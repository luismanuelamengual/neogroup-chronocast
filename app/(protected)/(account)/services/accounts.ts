import { DB } from '@neogroup/neorm'
import { ApiException } from '@/app/models/ApiException'
import { User } from '@/app/models/User'

/**
 * Deletes a player's account and everything tied to it (required by Google
 * Play for apps that let people create an account): its user and its tokens
 * and its collection and decks (the game tables join this list as they are added). The rows are deleted explicitly instead of relying on the foreign keys'
 * ON DELETE, which SQLite (tests) does not enforce.
 */
export async function deleteAccount(userId: number): Promise<void> {
  const user = await User.find(userId)

  if (!user) {
    throw new ApiException('errors.notAuthenticated', 401)
  }

  await DB.transaction(async () => {
    const decks = await DB.table('decks').where('userId', userId).select('id').get()

    if (decks.length > 0) {
      await DB.table('deck_cards')
        .whereIn(
          'deckId',
          decks.map((deck) => Number(deck.id))
        )
        .delete()
    }

    await DB.table('decks').where('userId', userId).delete()
    await DB.table('user_cards').where('userId', userId).delete()
    await DB.table('email_verification_tokens').where('userId', userId).delete()
    await DB.table('password_reset_tokens').where('userId', userId).delete()
    await DB.table('users').where('id', userId).delete()
  })
}
