import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { randomInt } from 'crypto'
import { addCards } from '@/app/(protected)/(collection)/services/collection'
import { countCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { findPack, PackDefinition, PITY_PACKS } from '@/app/(protected)/(shop)/data/packs'
import { PackPurchase } from '@/app/(protected)/(shop)/models/ShopState'
import { getShopState, spendGold } from '@/app/(protected)/(shop)/services/shop'
import { drawPack } from '@/app/(protected)/(shop)/utils/drawPack'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

/**
 * Opens a pack for a player: the draw (with the guarantee) and the cards into
 * the collection. Runs inside the caller's transaction (a purchase, or a
 * campaign reward). Guardian and eternal packs count for the guarantee: after
 * 10 in a row without a legendary, the next one brings one.
 */
export async function openPack(
  userId: number,
  pack: PackDefinition,
  seed: number = randomInt(2 ** 31)
): Promise<{ cards: string[]; guaranteed: boolean }> {
  const user = await DB.table('users').where('id', userId).first()
  const streak = Number(column(user ?? {}, 'packsWithoutLegendary') ?? 0)
  const guarantee = !!pack.pity && streak >= PITY_PACKS
  const plain = guarantee ? drawPack(pack, seed) : null
  const result = drawPack(pack, seed, guarantee)

  await addCards(userId, countCards(result.cards))

  if (pack.pity) {
    await DB.table('users')
      .where('id', userId)
      .update({ packsWithoutLegendary: result.hasLegendary ? 0 : streak + 1 })
  }

  return { cards: result.cards, guaranteed: guarantee && !!plain && !plain.hasLegendary && result.hasLegendary }
}

/**
 * Buys and opens a pack (docs/PLAN.md, section 11.1). The draw happens here,
 * on the server; the screen only animates the result.
 */
export async function buyPack(
  userId: number,
  packId: string,
  seed: number = randomInt(2 ** 31)
): Promise<PackPurchase> {
  const pack = findPack(packId)

  if (!pack) {
    throw new ApiException('errors.unknownPack')
  }

  let opened = { cards: [] as string[], guaranteed: false }

  await DB.transaction(async () => {
    await spendGold(userId, pack.price)
    opened = await openPack(userId, pack, seed)
  })

  return { state: await getShopState(userId), ...opened }
}
