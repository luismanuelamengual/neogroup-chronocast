import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sting-of-the-silent-trail',
  type: 'ability',
  subtype: 'ritual',
  name: 'Sting of the Silent Trail',
  text: 'Poison an enemy ally (3).',
  flavor: 'You will not hear it. You will feel it.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'mythic',
  price: 4080,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Sting of the Silent Trail: a giant venomous stinger dripping poison, in a misty valley, centered and seen from slightly below, rose pink accents, hunter style'
  }
})
