import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'charm-of-the-vanguard',
  type: 'attachment',
  subtype: 'charm',
  name: 'Charm of the Vanguard',
  text: 'Attach to an ally of yours: it gains +1 attack, +4 health and Guardian. When it dies, draw a card.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Charm of the Vanguard: an enchanted charm made of gilded marble, floating above a marble pedestal, seen from above, teal accents, warrior style'
  }
})
