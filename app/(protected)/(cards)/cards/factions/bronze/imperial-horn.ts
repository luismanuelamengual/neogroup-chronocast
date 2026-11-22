import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-horn',
  type: 'ability',
  name: 'Imperial Horn',
  text: 'Summon a Hoplite Conscript.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject: 'Imperial Horn: a glowing portal with a creature stepping through, ancient bronze-age empire style'
  }
})
