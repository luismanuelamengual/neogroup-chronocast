import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-guardian',
  type: 'ability',
  name: 'Spirit Guardian',
  text: 'Summon a Rift Guardian and your hero gains 6 armor.',
  flavor: 'An old friend from beyond answers the call.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'rift-guardian')
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 4, tags: ['summon', 'defense'] },
  art: {
    subject: 'a ghostly glowing guardian spirit appearing beside a mystic, shield raised'
  }
})
