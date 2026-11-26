import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glyptodon-of-the-volcano',
  type: 'ally',
  name: 'Glyptodon of the Volcano',
  text: 'When it enters: summon a Sabertooth Cub.',
  flavor: 'A walking fortress with a warm heart.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  element: 'fire',
  price: 600,
  cost: 6,
  tribe: 'beast',
  attack: 8,
  health: 12,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 7, tags: ['summon'] },
  art: {
    subject:
      'Glyptodon of the Volcano: a glyptodon with shaggy russet fur and a bone collar, turning its head toward the viewer, ivory accents, prehistoric jungle era style'
  }
})
