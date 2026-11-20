import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-will',
  type: 'ability',
  name: 'Iron Will',
  text: 'Your hero gains 12 armor and your hero heals 10.',
  flavor: 'Bend, never break.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 10)
  },
  ai: { value: 4, tags: ['defense', 'heal'] },
  art: {
    subject: 'a warrior surrounded by a shimmering silver iron aura, wounds closing'
  }
})
