import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cowards-brand',
  type: 'attachment',
  name: 'Brand of the Coward',
  text: 'Attach to an enemy ally: it loses guardian and has -2 attack.',
  flavor: 'Nobody follows a coward into battle.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  targets: ['enemyAlly'],
  attack: -2,
  onPlay(ctx) {
    const found = host(ctx)

    if (found) {
      found.unit.keywords = found.unit.keywords.filter((keyword) => keyword !== 'guardian')
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a shamed knight with a yellow brand on his broken shield, walking away from the front line'
  }
})
