import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'curse-of-frailty',
  type: 'attachment',
  subtype: 'curse',
  name: 'Curse of Frailty',
  text: 'Attach to an enemy ally: it loses all its keywords.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      unit.keywords = []
      unit.shield = false
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Curse of Frailty: a cracked porcelain mask hanging on a thorny chain, glowing with a sickly hex, close-up, violet accents, dark end-of-time void style'
  }
})
