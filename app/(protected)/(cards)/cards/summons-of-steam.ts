import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'summons-of-steam',
  type: 'ability',
  subtype: 'gadget',
  name: 'Summons of Steam',
  text: 'Summon a Cog Drone.',
  flavor: 'The whistle blows. Something answers.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Summons of Steam: a glowing summoning circle opening a portal, in a misty valley, centered and seen from slightly below, gold accents, steampunk steam era style'
  }
})
