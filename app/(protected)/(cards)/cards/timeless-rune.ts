import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-rune',
  type: 'attachment',
  subtype: 'rune',
  name: 'Timeless Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health. At the start of each phase: that ally heals 2.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['flying'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      heal(ctx, found.ref, 2)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Timeless Rune: an enchanted rune made of rough stone and sinew, leaning against a ruined wall, centered and seen from slightly below, gold accents, time rift wanderer style'
  }
})
