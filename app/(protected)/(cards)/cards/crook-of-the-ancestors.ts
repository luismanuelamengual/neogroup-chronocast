import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crook-of-the-ancestors',
  type: 'weapon',
  subtype: 'staff',
  name: 'Crook of the Ancestors',
  text: 'When your hero attacks with it: your hero heals 2 for each frozen enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  attack: 4,
  durability: 4,
  onAttack(ctx) {
    healHero(
      ctx,
      2 * alliesOf(ctx, ctx.opponent).filter((unit) => (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase).length
    )
  },
  ai: { value: 4 },
  art: {
    subject:
      'Crook of the Ancestors: a single crook made of rough stone and sinew, radiating golden holy light, on cracked stone tiles, framed by drifting embers, lime green accents, mystic healer style'
  }
})
