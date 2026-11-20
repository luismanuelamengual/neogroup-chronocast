/* eslint-disable no-console */
/**
 * Economy: how long things take for a typical player (docs/PLAN.md, section
 * 16). Prints the gold of a day, the days to unlock each rarity and the days
 * to complete the collection of each starter hero (4 copies, 1 if unique, of
 * every card it can use) buying singles or packs (with quick sell of the
 * spare copies).
 *
 * Usage: yarn economy [matchesPerDay] [winRate] [runs]
 *        yarn economy 8 0.5 200
 */
import '@/app/(protected)/(cards)/utils/catalog'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { CARDS } from '@/app/(protected)/(cards)/utils/catalog'
import { countCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { RARITIES } from '@/app/(protected)/(engine)/models/Rarity'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { GOLD_REWARDS } from '@/app/(protected)/(shop)/data/gold'
import { findPack, PackDefinition } from '@/app/(protected)/(shop)/data/packs'
import { UNLOCK_COSTS } from '@/app/(protected)/(shop)/data/prices'
import { drawPack } from '@/app/(protected)/(shop)/utils/drawPack'
import { copyLimit, isBuyable, sellPrice } from '@/app/(protected)/(shop)/utils/prices'

const matchesPerDay = Number(process.argv[2] ?? 8)
const winRate = Number(process.argv[3] ?? 0.5)
const runs = Number(process.argv[4] ?? 200)
/** Packs bought at most in one simulation (a collection that never completes). */
const MAX_PACKS = 5000

/** Gold of a typical day: public matches, the average win bonus and the first win of the day. */
function goldPerDay(): number {
  const wins = matchesPerDay * winRate
  const losses = matchesPerDay - wins
  const perWin = GOLD_REWARDS.win + GOLD_REWARDS.winBonusMax / 2

  return Math.round(wins * perWin + losses * GOLD_REWARDS.loss + (wins >= 1 ? GOLD_REWARDS.firstWinOfDay : 0))
}

const daily = goldPerDay()
const days = (gold: number) => (gold / daily).toFixed(1)

/** What a hero's collection is missing: copies of each card it can use, beyond what the starter gives. */
function missingCards(hero: CardDefinition, owned: Record<string, number>): Record<string, number> {
  const missing: Record<string, number> = {}

  for (const card of CARDS.filter((candidate) => isBuyable(candidate) && canUseCard(hero, candidate))) {
    const count = copyLimit(card) - (owned[card.id] ?? 0)

    if (count > 0) {
      missing[card.id] = count
    }
  }

  return missing
}

/** Buying singles: the unlocks the cards need plus each card at its price. */
function singlesCost(missing: Record<string, number>): number {
  const top = Math.max(0, ...Object.keys(missing).map((id) => RARITIES.indexOf(getCard(id).rarity)))
  const unlocks = RARITIES.slice(0, top + 1).reduce((sum, rarity) => sum + UNLOCK_COSTS[rarity], 0)

  return unlocks + Object.entries(missing).reduce((sum, [id, count]) => sum + getCard(id).price! * count, 0)
}

/** Buying one kind of pack until the hero's collection is complete, selling every spare copy: the net gold. */
function packsCost(hero: CardDefinition, start: Record<string, number>, pack: PackDefinition, seed: number): number {
  const owned = { ...start }
  let gold = 0

  for (let i = 0; i < MAX_PACKS && Object.keys(missingCards(hero, owned)).length > 0; i++) {
    gold += pack.price

    for (const id of drawPack(pack, seed * 100_003 + i).cards) {
      owned[id] = (owned[id] ?? 0) + 1

      if (owned[id] > copyLimit(getCard(id))) {
        owned[id]--
        gold -= sellPrice(getCard(id))
      }
    }
  }

  return gold
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b)

  return sorted[Math.floor(sorted.length / 2)]
}

console.log(`\nA typical player: ${matchesPerDay} public matches a day, ${Math.round(winRate * 100)} % won.`)
console.log(`Gold a day: ${daily}\n`)

console.log('Unlocking single cards (cumulative):')

let unlockTotal = 0

for (const rarity of RARITIES.slice(1)) {
  unlockTotal += UNLOCK_COSTS[rarity]
  console.log(`  ${rarity.padEnd(10)} ${String(unlockTotal).padStart(7)} gold   ${days(unlockTotal).padStart(6)} days`)
}

const byRarity = RARITIES.map(
  (rarity) => `${rarity} ${CARDS.filter((card) => card.rarity === rarity && isBuyable(card)).length}`
)

console.log(`\nCatalog for sale: ${byRarity.join(', ')}`)

for (const heroId of STARTER_HERO_IDS) {
  const hero = getCard(heroId)
  const start = countCards(starterDeck(heroId).cards)
  const missing = missingCards(hero, start)
  const copies = Object.values(missing).reduce((sum, count) => sum + count, 0)

  console.log(`\n${hero.name}: ${copies} copies missing after the starter`)

  const singles = singlesCost(missing)

  console.log(`  singles               ${String(singles).padStart(7)} gold   ${days(singles).padStart(6)} days`)

  for (const packId of ['traveler', 'chronicler', `faction-${hero.faction}`]) {
    const pack = findPack(packId)!
    const cost = median(Array.from({ length: runs }, (_, run) => packsCost(hero, start, pack, run + 1)))

    console.log(`  ${`${packId} packs`.padEnd(21)} ${String(cost).padStart(7)} gold   ${days(cost).padStart(6)} days`)
  }
}

console.log(`\n(${runs} simulations per pack, median; spare copies are quick-sold.)`)
