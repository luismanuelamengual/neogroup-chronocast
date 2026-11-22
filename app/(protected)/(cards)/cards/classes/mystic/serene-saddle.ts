import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-saddle',
  type: 'attachment',
  name: 'Serene Saddle',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health. When that ally dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1720,
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
    subject: 'Serene Saddle: a glowing magical serene charm, mystic healer style'
  }
})
