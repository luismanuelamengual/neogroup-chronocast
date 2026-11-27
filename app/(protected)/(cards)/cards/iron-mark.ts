import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-mark',
  type: 'attachment',
  subtype: 'curse',
  name: 'Iron Mark',
  text: 'Attach to an enemy ally: at the end of each phase, it loses 1 attack.',
  flavor: 'Branded once, hunted forever.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  targets: ['enemyAlly'],
  onPhaseEnd(ctx) {
    const found = host(ctx)

    if (found && found.unit.attack > 0) {
      buff(ctx, found.unit, -1, 0)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Iron Mark: an enchanted mark made of white bone and leather wraps, resting on a velvet cloth, seen from above, emerald accents, warrior style'
  }
})
