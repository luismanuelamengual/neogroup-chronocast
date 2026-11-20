import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dino-hatchling',
  type: 'ally',
  name: 'Dino Hatchling',
  text: 'At the start of each phase, it gains +1 attack and +1 health.',
  flavor: 'It eats, it grows, it eats again.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 3,
  health: 10,
  onPhaseStart(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'a tiny cute green dinosaur hatching from a cracked spotted egg in a nest of ferns'
  }
})
