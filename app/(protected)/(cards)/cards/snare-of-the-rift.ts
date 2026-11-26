import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-rift',
  type: 'ability',
  subtype: 'program',
  name: 'Snare of the Rift',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'A trap set in one century, sprung in another.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Snare of the Rift: a looped rope snare snapping shut, over burning grassland, swirling around the center, lime green accents, neon cyberpunk future style'
  }
})
