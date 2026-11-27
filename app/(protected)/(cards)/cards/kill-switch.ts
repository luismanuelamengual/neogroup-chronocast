import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kill-switch',
  type: 'attachment',
  subtype: 'implant',
  name: 'Kill Switch',
  text: "Attach to an enemy ally: it can't use its ability. When it dies, draw a card.",
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  targets: ['enemyAlly'],
  silences: true,
  onHostDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Kill Switch: a red emergency switch implant clamped onto a cyborg spine, a warning hologram above it, red accents, neon cyberpunk future style'
  }
})
