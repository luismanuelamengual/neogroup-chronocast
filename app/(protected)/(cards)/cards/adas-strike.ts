import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'adas-strike',
  type: 'ability',
  subtype: 'gadget',
  name: "Ada's Strike",
  text: 'Deal 3 damage to an enemy slot for each artifact of yours, and draw a card.',
  flavor: 'Measured twice, struck once.',
  faction: 'clockwork',
  restriction: { heroes: ['ada-copperwick'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 3 * artifactCount(ctx))
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Ada's Strike: a single devastating impact crater with shockwaves, against a starry sky, framed by drifting embers, amber accents, steampunk steam era style"
  }
})
