/* eslint-disable no-console */
/**
 * Seeds demo data for local development: two verified demo users that can sign
 * in with email and password right away (no verification mail needed). Two, to
 * play PvP against yourself in two browsers.
 *
 * Usage: yarn db:seed
 */
import { config } from 'dotenv'

config({ path: '.env.local' })
config({ path: '.env' })

import { DB } from '@neogroup/neorm'
import bcrypt from 'bcryptjs'

const DEMO_USERS = [
  { email: 'demo@chronocast.app', name: 'Demo' },
  { email: 'rival@chronocast.app', name: 'Rival' }
]
const DEMO_PASSWORD = 'demo1234'
/** Gold to try the shop. */
const DEMO_GOLD = 20000

async function run(): Promise<void> {
  if (process.env.VERCEL_ENV === 'production') {
    console.error('🚫 db:seed refuses to run against production.')
    process.exit(1)
  }

  for (const { email, name } of DEMO_USERS) {
    if (await DB.table('users').where('email', email).first()) {
      console.log(`Demo user already exists (${email}).`)
      continue
    }

    await DB.table('users').insert({
      email,
      passwordHash: await bcrypt.hash(DEMO_PASSWORD, 10),
      name,
      emailVerified: true,
      active: true,
      gold: DEMO_GOLD
    })

    console.log(`Demo user created: ${email} / ${DEMO_PASSWORD} (${DEMO_GOLD} gold)`)
  }
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Seed failed:', error)
    process.exit(1)
  })
