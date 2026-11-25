import { DB, Schema } from '@neogroup/neorm'

/**
 * The whole schema of ChronoCast (docs/PLAN.md, section 15.4).
 *
 * The DDL is engine-agnostic (neorm's `Schema` builder compiles it to
 * PostgreSQL in production and to SQLite in tests):
 *
 *   - users / email_verification_tokens / password_reset_tokens → authentication
 *   - user_cards / decks / deck_cards → the collection and the saved decks
 *   - matches → PvP rooms and matches
 *   - campaign_progress → how far each player got in each hero's campaign
 *
 * `users.rating` is the Prestige (Elo-like rating of public PvP matches),
 * `users.gold` the gold to spend in the shop and `users.xp` / `users.level`
 * the experience and the level it gives (the level opens the rarities of the
 * shop). The card catalog is not stored: it lives in the code and the tables
 * reference cards by id.
 */
export default {
  name: '001-create-tables',

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
        // Total experience earned and the level it gives (kept in sync by grantXp).
        table.integer('xp').default(0)
        table.integer('level').default(1)
        // The hero chosen on the first visit (null: not chosen yet).
        table.string('starterHeroId', 80).nullable()
        // The pity counter of the packs.
        table.integer('packsWithoutLegendary').default(0)
        // The first win of the day pays extra (epoch ms).
        table.bigInteger('lastWinAt').nullable()
        // Public matches played (the ranking lists who played).
        table.integer('pvpMatches').default(0)
        // The deck every game mode plays with. Null: the most recently edited playable deck.
        table.integer('activeDeckId').nullable()
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

      // How many copies of each card a player owns (heroes included).
      await Schema.createIfNotExists('user_cards', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('cardId', 80)
        table.integer('quantity').default(0)

        table.unique(['userId', 'cardId'])
        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })

      // The saved decks: a hero and the count of each card.
      await Schema.createIfNotExists('decks', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('name', 60)
        table.string('heroId', 80)
        table.timestamp('createdAt').useCurrent()
        table.timestamp('updatedAt').useCurrent()

        table.index('userId')
        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })

      await Schema.createIfNotExists('deck_cards', (table) => {
        table.increments('id')
        table.integer('deckId')
        table.string('cardId', 80)
        table.integer('count')

        table.unique(['deckId', 'cardId'])
        table.foreign('deckId').references('id').on('decks').cascadeOnDelete()
      })

      // The players and a copy of their decks, the engine state (JSON), the
      // timelines of the phase being programmed, the last resolution (to
      // animate it), the deadline and an optimistic lock (`version`). Times
      // the logic compares are epoch milliseconds.
      await Schema.createIfNotExists('matches', (table) => {
        table.increments('id')
        table.string('mode', 20).default('pvp')
        table.string('visibility', 10)
        table.string('code', 6).nullable()
        table.string('status', 12)
        table.integer('playerA')
        table.integer('playerB').nullable()
        table.string('heroA', 80)
        table.string('heroB', 80).nullable()
        table.text('deckA')
        table.text('deckB').nullable()
        table.integer('seed').nullable()
        table.text('state').nullable()
        table.text('planA').nullable()
        table.text('planB').nullable()
        table.text('lastResolution').nullable()
        table.integer('version').default(0)
        table.bigInteger('phaseDeadline').nullable()
        table.bigInteger('expiresAt').nullable()
        table.text('result').nullable()
        table.text('rewards').nullable()
        table.integer('winnerId').nullable()
        table.bigInteger('finishedAt').nullable()
        table.timestamp('createdAt').useCurrent()

        table.index('status')
        table.index('code')
        table.foreign('playerA').references('id').on('users').cascadeOnDelete()
      })

      // `stage` is the last battle won (0 to 10); `completedAt` (epoch ms) is
      // set when the boss falls, together with the exclusive card.
      await Schema.createIfNotExists('campaign_progress', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('heroId', 60)
        table.integer('stage').default(0)
        table.bigInteger('completedAt').nullable()

        table.unique(['userId', 'heroId'])
        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })
    })
  }
}
