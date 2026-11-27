import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sting-of-the-silent-trail',
  type: 'ability',
  subtype: 'ritual',
  name: 'Sting of the Silent Trail',
  text: 'Double the poison of every enemy ally.',
  flavor: 'You will not hear it. You will feel it.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'mythic',
  price: 4080,
  cost: 2,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      unit.poison = (unit.poison ?? 0) * 2
    }
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Sting of the Silent Trail: a giant venomous stinger dripping poison, in a misty valley, centered and seen from slightly below, rose pink accents, hunter style'
  }
})
