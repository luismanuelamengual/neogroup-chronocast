import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'last-oath',
  type: 'attachment',
  name: 'Last Oath',
  text: 'Attach to an ally of yours: it has +2 attack. When it dies, you draw 2 cards.',
  flavor: 'Swear it, and your death will not be in vain.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 2,
  targets: ['friendlyAlly'],
  attack: 2,
  onHostDeath(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a knight kneeling and swearing an oath on a glowing sword, a ribbon of light around them'
  }
})
