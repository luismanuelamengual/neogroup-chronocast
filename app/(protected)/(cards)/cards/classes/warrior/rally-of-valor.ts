import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-valor',
  type: 'ability',
  name: 'Rally of Valor',
  text: 'An ally of yours gains +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 1, 1)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Rally of Valor: a tattered war banner planted in the ground, glowing with rallying light, against a starry sky, close-up filling the frame, cobalt blue accents, warrior style'
  }
})
