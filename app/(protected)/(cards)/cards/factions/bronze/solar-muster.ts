import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'solar-muster',
  type: 'ability',
  name: 'Solar Muster',
  text: 'Summon 2 Hoplite Conscripts.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Solar Muster: a row of empty helmets and spears lit by dawn light, in a ruined temple, swirling around the center, indigo accents, ancient bronze-age empire style'
  }
})
