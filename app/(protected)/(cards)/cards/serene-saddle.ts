import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-saddle',
  type: 'attachment',
  name: 'Serene Saddle',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health. When that ally dies: draw a card.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Serene Saddle: an enchanted saddle made of polished bronze with engraved spirals, half buried in snow, centered and seen from slightly below, crimson accents, mystic healer style'
  }
})
