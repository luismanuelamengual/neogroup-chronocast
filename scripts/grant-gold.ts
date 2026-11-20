/* eslint-disable no-console */
/**
 * Development: gives gold to a player, to try the shop before the matches pay
 * it (phase 6). Refuses to run against production.
 *
 * Usage: yarn db:gold <email> [amount]     (amount: 10000 by default)
 */
import { config } from 'dotenv'

config({ path: '.env.local' })
config({ path: '.env' })

import { DB } from '@neogroup/neorm'

async function run(): Promise<void> {
  if (process.env.VERCEL_ENV === 'production') {
    console.error('🚫 db:gold refuses to run against production.')
    process.exit(1)
  }

  const [email, amount = '10000'] = process.argv.slice(2)

  if (!email || !Number.isInteger(Number(amount))) {
    console.error('Usage: yarn db:gold <email> [amount]')
    process.exit(1)
  }

  const user = await DB.table('users').where('email', email.toLowerCase()).first()

  if (!user) {
    console.error(`No player with the email ${email}.`)
    process.exit(1)
  }

  const gold = Number(user.gold ?? 0) + Number(amount)

  await DB.table('users').where('id', Number(user.id)).update({ gold })
  console.log(`${email} now has ${gold} gold.`)
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('db:gold failed:', error)
    process.exit(1)
  })
