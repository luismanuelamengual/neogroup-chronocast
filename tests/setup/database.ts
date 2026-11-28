/* eslint-disable */
import { DB } from '@neogroup/neorm'
import createTables from '@/database/migrations/001-create-tables'

const TABLES = [
  'user_card_backs',
  'campaign_progress',
  'matches',
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

  await createTables.up()
}

/** Inserts a verified user and returns its id. */
export async function createUser(email = 'player@chronocast.test'): Promise<number> {
  await DB.table('users').insert({ email, name: 'Player', emailVerified: true, active: true })
  const row = await DB.table('users').where('email', email).first()

  return Number(row!.id)
}
