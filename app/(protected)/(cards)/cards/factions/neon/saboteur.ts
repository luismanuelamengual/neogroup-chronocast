import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact, destroyTrap } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'saboteur',
  type: 'ally',
  name: 'Saboteur',
  text: 'When it enters: destroy a random face-down enemy trap. If there was none, destroy the cheapest enemy artifact.',
  flavor: 'Wires cut, alarms off, nobody saw a thing.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 165,
  cost: 3,
  attack: 5,
  health: 8,
  keywords: ['stealth'],
  onEnter(ctx) {
    if (!destroyTrap(ctx, ctx.opponent)) {
      destroyArtifact(ctx, ctx.opponent, 'cheapest')
    }
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a masked cyber thief cutting glowing neon wires on a security panel in a dark alley'
  }
})
