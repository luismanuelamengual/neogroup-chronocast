import { DB, Schema } from '@neogroup/neorm'

/**
 * The active deck (docs/PLAN.md, section 6): the deck every game mode plays
 * with and the one the shop keeps playable when selling. Null: the most
 * recently edited playable deck.
 */
export default {
  name: '006-add-active-deck',

  async up(): Promise<void> {
    await DB.transaction(async () => {
      await Schema.table('users', (table) => {
        table.integer('activeDeckId').nullable()
      })
    })
  }
}
