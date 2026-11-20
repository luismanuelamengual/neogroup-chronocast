import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-hunt',
  type: 'ability',
  name: 'Wild Hunt',
  text: 'Summon a Raptor Pack and your allies gain +2 attack.',
  flavor: 'When Kora howls, the whole jungle hunts.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'raptor-pack')
    buffAllies(ctx, ctx.owner, 2, 0)
  },
  ai: { value: 4, tags: ['summon', 'buff'] },
  art: {
    subject: 'Kora running through the jungle with raptors and a sabertooth at her side, all charging'
  }
})
