import { DB, Schema } from '@neogroup/neorm'

/**
 * Collection and decks (docs/PLAN.md, section 15.4):
 *
 *   - users.starterHeroId         → the hero chosen on the first visit (null: not chosen yet)
 *   - users.packsWithoutLegendary → the pity counter of the packs (phase 4)
 *   - user_cards                  → how many copies of each card a player owns (heroes included)
 *   - decks / deck_cards          → the saved decks: a hero and the count of each card
 *
 * Cards are referenced by their id: the catalog lives in the code.
 */
export default {
  name: '002-create-collection-tables',

  async up(): Promise<void> {
    await DB.transaction(async () => {
      await Schema.table('users', (table) => {
        table.string('starterHeroId', 80).nullable()
        table.integer('packsWithoutLegendary').default(0)
      })

      await Schema.createIfNotExists('user_cards', (table) => {
        table.increments('id')
        table.integer('userId')
        table.string('cardId', 80)
        table.integer('quantity').default(0)

        table.unique(['userId', 'cardId'])
        table.foreign('userId').references('id').on('users').cascadeOnDelete()
      })

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
    })
  }
}
