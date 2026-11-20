import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nysa-goldbow',
  type: 'hero',
  name: 'Nysa Goldbow',
  text: 'Golden Arrow (2): deal 8 damage to an enemy slot. When another ally of yours enters, it gains +1 attack.',
  flavor: 'She hunted with the gods once. Now she hunts for herself.',
  faction: 'bronze',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'rare',
  cost: 0,
  health: 90,
  ability: {
    name: 'Golden Arrow',
    text: 'Deal 8 damage to an enemy slot.',
    cost: 2,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 1, 0)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a Greek huntress with braided golden hair and a white tunic, drawing a golden bow on a marble temple rooftop at sunset'
  }
})
