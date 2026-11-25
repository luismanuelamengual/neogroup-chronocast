import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-horn',
  type: 'ability',
  name: 'Imperial Horn',
  text: 'Summon a Hoplite Conscript.',
  flavor: 'When it sounds, the empire marches.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject:
      'Imperial Horn: a great war horn sounding a visible blast of sound, in a ruined temple, framed by drifting embers, crimson accents, ancient bronze-age empire style'
  }
})
