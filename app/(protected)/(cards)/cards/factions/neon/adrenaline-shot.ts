import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'adrenaline-shot',
  type: 'ability',
  name: 'Adrenaline Shot',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'Side effects include winning.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'a glowing magenta syringe injector with a burst of energy around it'
  }
})
