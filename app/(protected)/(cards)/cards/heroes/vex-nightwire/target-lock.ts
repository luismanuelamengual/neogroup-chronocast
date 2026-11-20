import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'target-lock',
  type: 'ability',
  name: 'Target Lock',
  text: 'Deal 4 damage to an enemy ally and draw a card. Instant.',
  flavor: 'Locked. Loaded. Leaving.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'instant',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['removal', 'draw'] },
  art: {
    subject: "a glowing red targeting reticle locking onto a creature through Vex's visor"
  }
})
