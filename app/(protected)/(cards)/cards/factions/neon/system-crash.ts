import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'system-crash',
  type: 'ability',
  name: 'System Crash',
  text: 'Stun an enemy ally for two phases. Fast.',
  flavor: 'Have you tried turning it off and never on again?',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject: 'a robot frozen with a blue error screen on its face and glitch effects around it'
  }
})
