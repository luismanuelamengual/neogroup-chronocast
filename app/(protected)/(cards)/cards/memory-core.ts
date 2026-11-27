import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'memory-core',
  type: 'attachment',
  subtype: 'implant',
  name: 'Memory Core',
  text: 'Attach to an ally of yours: when it dies, draw 2 cards.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Memory Core: a glowing crystal data core set in the back of a cyborg skull, close-up, violet accents, neon cyberpunk future style'
  }
})
