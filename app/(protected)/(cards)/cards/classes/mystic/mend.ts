import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mend',
  type: 'ability',
  name: 'Mend',
  text: 'An ally of yours heals 12. Fast.',
  flavor: 'A touch of light, a sigh of relief.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    heal(ctx, ctx.targets[0], 12)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'a glowing hand of soft golden light touching a wounded warrior'
  }
})
