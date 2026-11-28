import { DB } from '@neogroup/neorm'
import { CARD_BACKS, DEFAULT_CARD_BACK, findCardBack } from '@/app/(protected)/(cards)/data/cardBacks'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

/** The card backs a player owns, in the shop's order: the default one and the ones bought. */
export async function ownedCardBacks(userId: number): Promise<string[]> {
  const rows = await DB.table('user_card_backs').where('userId', userId).get()
  const bought = new Set(rows.map((row) => String(column(row, 'backId'))))

  return CARD_BACKS.filter((back) => back.id === DEFAULT_CARD_BACK || bought.has(back.id)).map((back) => back.id)
}

/** Whether a player can put a back on a deck: a known one it owns. */
export async function ownsCardBack(userId: number, backId: string): Promise<boolean> {
  return (await ownedCardBacks(userId)).includes(backId)
}

/**
 * Buys a card back, inside the caller's transaction: its gold goes with the
 * `spend` of the shop (so it fails, buying nothing, without enough gold).
 */
export async function addCardBack(
  userId: number,
  backId: string,
  spend: (amount: number) => Promise<void>
): Promise<void> {
  const back = findCardBack(backId)

  if (!back || back.price <= 0) {
    throw new ApiException('errors.cardBackNotForSale')
  }

  if (await ownsCardBack(userId, backId)) {
    throw new ApiException('errors.cardBackOwned')
  }

  await spend(back.price)
  await DB.table('user_card_backs').insert({ userId, backId })
}
