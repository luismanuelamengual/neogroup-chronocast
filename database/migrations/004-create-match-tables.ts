import { DB, Schema } from '@neogroup/neorm'

/**
 * PvP (docs/PLAN.md, sections 10 and 12):
 *
 *   - matches → rooms and matches: the players and a copy of their decks, the
 *     engine state (JSON), the timelines of the phase being programmed, the
 *     last resolution (to animate it), the deadline and an optimistic lock
 *     (`version`). Times the logic compares are epoch milliseconds.
 *   - users.lastWinAt  → the first win of the day pays extra
 *   - users.pvpMatches → public matches played (the ranking lists who played)
 */
export default {
  name: '004-create-match-tables',

  async up(): Promise<void> {
    await DB.transaction(async () => {
      await Schema.table('users', (table) => {
        table.bigInteger('lastWinAt').nullable()
        table.integer('pvpMatches').default(0)
      })

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
    })
  }
}
