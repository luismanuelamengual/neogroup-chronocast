import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tame-beast',
  type: 'ability',
  name: 'Tame Beast',
  text: 'Summon a Thornback Boar and your hero heals 5.',
  flavor: 'Gently. Gently. Good boy.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'thornback-boar')
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
  },
  ai: { value: 4, tags: ['summon', 'heal'] },
  art: {
    subject: 'a hunter calmly offering her hand to a wild boar in a forest clearing'
  }
})
