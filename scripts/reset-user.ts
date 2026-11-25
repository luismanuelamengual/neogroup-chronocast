/* eslint-disable no-console */
/**
 * Development: takes a player back to a brand new account, keeping the account
 * itself (email, password, name): no cards, decks, shop unlocks, campaign
 * progress or PvP matches, the starting gold (2000) and Prestige 1200. The next visit goes to
 * /welcome to choose the starter hero again. Refuses to run against production.
 *
 * Usage: yarn db:reset-user <email>
 */
import { config } from 'dotenv'

config({ path: '.env.local' })
config({ path: '.env' })

import { DB } from '@neogroup/neorm'
import { STARTING_GOLD } from '@/app/(protected)/(shop)/data/gold'

async function run(): Promise<void> {
  if (process.env.VERCEL_ENV === 'production') {
    console.error('🚫 db:reset-user refuses to run against production.')
    process.exit(1)
  }

  const [email] = process.argv.slice(2)

  if (!email) {
    console.error('Usage: yarn db:reset-user <email>')
    process.exit(1)
  }

  const user = await DB.table('users').where('email', email.toLowerCase()).first()

  if (!user) {
    console.error(`No player with the email ${email}.`)
    process.exit(1)
  }

  const userId = Number(user.id)

  await DB.transaction(async () => {
    await DB.table('matches').where('playerA', userId).delete()
    await DB.table('matches').where('playerB', userId).delete()
    await DB.table('campaign_progress').where('userId', userId).delete()
    // deck_cards go with their decks (ON DELETE CASCADE).
    await DB.table('decks').where('userId', userId).delete()
    await DB.table('user_cards').where('userId', userId).delete()
    await DB.table('users').where('id', userId).update({
      gold: STARTING_GOLD,
      xp: 0,
      level: 1,
      rating: 1200,
      starterHeroId: null,
      packsWithoutLegendary: 0,
      lastWinAt: null,
      pvpMatches: 0,
      activeDeckId: null
    })
  })

  console.log(`${email} is a brand new player again: the next visit chooses the starter hero.`)
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('db:reset-user failed:', error)
    process.exit(1)
  })
