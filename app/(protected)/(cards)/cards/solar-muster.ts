import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'solar-muster',
  type: 'ability',
  name: 'Solar Muster',
  text: 'Summon 2 Hoplite Conscripts.',
  flavor: 'They rise with the sun and fight until it sets.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
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
