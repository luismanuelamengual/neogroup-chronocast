import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-prayer-staff',
  type: 'weapon',
  subtype: 'staff',
  name: 'Devout Prayer Staff',
  text: "When your hero attacks with it: return a random frozen enemy ally to its owner's hand.",
  flavor: 'Faith with a heavy end.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  attack: 6,
  durability: 5,
  onAttack(ctx) {
    const frozen = alliesOf(ctx, ctx.opponent).filter((unit) => (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase)

    if (frozen.length > 0) {
      returnToHand(ctx, frozen[Math.floor(ctx.random() * frozen.length)])
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Devout Prayer Staff: a single staff made of pale ash wood wrapped in red cloth, on a worn wooden table, diagonal dynamic composition, magenta accents, mystic healer style'
  }
})
