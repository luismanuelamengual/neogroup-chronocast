import { DB, Schema } from '@neogroup/neorm'

/**
 * Campaigns (docs/PLAN.md, sections 13 and 15.4): how far each player got in
 * each hero's campaign. `stage` is the last battle won (0 to 10); winning the
 * next one unlocks the following. `completedAt` (epoch ms) is set when the
 * boss falls, together with the exclusive card.
 */
export default {
  name: '005-create-campaign-tables',

  async up(): Promise<void> {
    await DB.transaction(async () => {
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
