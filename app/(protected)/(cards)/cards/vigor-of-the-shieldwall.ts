import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-shieldwall',
  type: 'ability',
  name: 'Vigor of the Shieldwall',
  text: 'An ally of yours gains +5 attack and +7 health.',
  flavor: 'Lock shields, breathe together, stand together.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 5, 7)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Shieldwall: a glowing heart of green life energy pulsing with veins of light, against a starry sky, centered and seen from slightly below, scarlet accents, warrior style'
  }
})
