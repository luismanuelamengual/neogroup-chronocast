import { DB, Schema } from '@neogroup/neorm'

/**
 * The shop (docs/PLAN.md, section 11.2): the rarities each player unlocked to
 * buy single cards. Common is open from the start, so it never has a row.
 */
export default {
  name: '003-create-shop-tables',

  async up(): Promise<void> {
    await DB.transaction(async () => {
      await Schema.createIfNotExists('shop_unlocks', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('rarity', 20)
        table.timestamp('unlockedAt').useCurrent()

        table.unique(['userId', 'rarity'])
        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })
    })
  }
}
