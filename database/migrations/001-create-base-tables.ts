import { DB, Schema } from '@neogroup/neorm'

/**
 * Base schema of ChronoCast.
 *
 * The DDL is engine-agnostic (neorm's `Schema` builder compiles it to
 * PostgreSQL in production and to SQLite in tests):
 *
 *   - users / email_verification_tokens / password_reset_tokens → authentication
 *
 * `users.rating` is the Prestige (Elo-like rating of public PvP matches) and
 * `users.gold` the gold to spend in the shop. The card catalog is not stored:
 * it lives in the code and the tables reference cards by id.
 */
export default {
  name: '001-create-base-tables',

  async up(): Promise<void> {
    await DB.transaction(async () => {
      await Schema.createIfNotExists('users', (table) => {
        table.increments('id')
        table.string('email', 255).unique()
        table.string('passwordHash', 255).nullable()
        table.string('name', 60).nullable()
        table.string('lastName', 60).nullable()
        table.string('nickname', 60).nullable()
        // Language chosen by the player ('en' | 'es', see app/i18n/config.ts): app and emails.
        table.string('locale', 5).default('en')
        table.boolean('emailVerified').default(false)
        table.boolean('active').default(true)
        table.integer('rating').default(1200)
        table.integer('gold').default(0)
        table.timestamp('createdAt').useCurrent()
      })

      await Schema.createIfNotExists('email_verification_tokens', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('token', 128).unique()
        table.timestamp('expiresAt')
        table.timestamp('createdAt').useCurrent()

        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })

      await Schema.createIfNotExists('password_reset_tokens', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('token', 128).unique()
        table.timestamp('expiresAt')
        table.timestamp('createdAt').useCurrent()

        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })
    })
  }
}
