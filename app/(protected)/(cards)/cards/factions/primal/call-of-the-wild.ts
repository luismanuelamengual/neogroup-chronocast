import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'call-of-the-wild',
  type: 'ability',
  name: 'Call of the Wild',
  text: 'Summon a Raptor Pack and your hero heals 6.',
  flavor: 'The jungle hears you. And it sends help.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'raptor-pack')
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
  },
  ai: { value: 3, tags: ['summon', 'heal'] },
  art: {
    subject: 'a huntress blowing a horn made of bone as raptors burst out of the jungle toward her'
  }
})
