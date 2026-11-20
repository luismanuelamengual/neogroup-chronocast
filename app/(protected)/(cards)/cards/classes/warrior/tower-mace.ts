import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tower-mace',
  type: 'weapon',
  name: 'Tower Mace',
  text: 'On play: your hero gains 5 armor.',
  flavor: 'Knock knock.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 10,
  durability: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'a huge flanged mace with a spiked head resting against a castle wall'
  }
})
