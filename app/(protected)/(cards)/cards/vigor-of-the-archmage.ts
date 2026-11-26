import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-archmage',
  type: 'ability',
  name: 'Vigor of the Archmage',
  text: 'An ally of yours gains +4 attack and +5 health.',
  flavor: 'The archmage shares a spark of his endless energy.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Archmage: a glowing heart of green life energy pulsing with veins of light, inside a cave of crystals, dramatic backlight, scarlet accents, medieval magic order style'
  }
})
