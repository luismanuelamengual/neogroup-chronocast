/* eslint-disable */
import { DB } from '@neogroup/neorm'
import baseTables from '@/database/migrations/001-create-base-tables'
import collectionTables from '@/database/migrations/002-create-collection-tables'
import shopTables from '@/database/migrations/003-create-shop-tables'
import matchTables from '@/database/migrations/004-create-match-tables'
import campaignTables from '@/database/migrations/005-create-campaign-tables'

const TABLES = [
  'campaign_progress',
  'matches',
  'shop_unlocks',
  'deck_cards',
  'decks',
  'user_cards',
  'password_reset_tokens',
  'email_verification_tokens',
  'users'
]

/** Drops every table and re-applies the real migrations. */
export async function resetDatabase(): Promise<void> {
  for (const table of TABLES) {
    await DB.execute(`DROP TABLE IF EXISTS "${table}"`)
  }

  await baseTables.up()
  await collectionTables.up()
  await shopTables.up()
  await matchTables.up()
  await campaignTables.up()
}

/** Inserts a verified user and returns its id. */
export async function createUser(email = 'player@chronocast.test'): Promise<number> {
  await DB.table('users').insert({ email, name: 'Player', emailVerified: true, active: true })
  const row = await DB.table('users').where('email', email).first()

  return Number(row!.id)
}
