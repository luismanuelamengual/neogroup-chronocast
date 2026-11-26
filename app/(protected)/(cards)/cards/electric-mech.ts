import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'electric-mech',
  type: 'ally',
  name: 'Electric Mech',
  text: 'When it enters: your other Cyborgs gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  weak: ['lightning'],
  price: 420,
  cost: 3,
  tribe: 'cyborg',
  keywords: ['ranged'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'cyborg', 1, 1, true)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Electric Mech: a mech built of bronze with steam vents, with a cockpit with a tiny pilot, raising a mechanical arm, neon cyberpunk future style'
  }
})
