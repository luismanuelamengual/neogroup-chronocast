import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { deleteAccount } from '@/app/(protected)/(account)/services/accounts'
import { User } from '@/app/models/User'
import { createUser, resetDatabase } from '@/tests/setup/database'

describe('account deletion', () => {
  let ana: number
  let beto: number

  beforeEach(async () => {
    await resetDatabase()
    ana = await createUser('ana@chronocast.test')
    beto = await createUser('beto@chronocast.test')
  })

  it('deletes the user and its tokens', async () => {
    await DB.table('password_reset_tokens').insert({ userId: ana, token: 'reset', expiresAt: new Date() })
    await DB.table('email_verification_tokens').insert({ userId: ana, token: 'verify', expiresAt: new Date() })

    await deleteAccount(ana)

    expect(await User.find(ana)).toBeFalsy()
    expect(await DB.table('password_reset_tokens').where('userId', ana).get()).toHaveLength(0)
    expect(await DB.table('email_verification_tokens').where('userId', ana).get()).toHaveLength(0)
    // Other accounts are untouched.
    expect(await User.find(beto)).toBeTruthy()
  })

  it('starts every player with 1200 of Prestige and no gold', async () => {
    const user = await User.find(beto)

    expect(Number(user!.rating)).toBe(1200)
    expect(Number(user!.gold)).toBe(0)
  })
})
