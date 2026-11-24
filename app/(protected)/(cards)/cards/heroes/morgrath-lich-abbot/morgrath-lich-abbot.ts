import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  name: 'Morgrath, the Lich Abbot',
  text: 'Unholy Bolt (5): deal 12 shadow damage to an enemy slot and your hero heals 6. At the start of each phase, deal 3 shadow damage to a random enemy ally.',
  flavor: 'He prayed for eternal life. Something answered.',
  faction: 'arcane',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'morgrath-lich-abbot' },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 65,
  ability: {
    name: 'Unholy Bolt',
    text: 'Deal 12 shadow damage to an enemy slot and your hero heals 6.',
    cost: 5,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
      healHero(ctx, 6)
    }
  },
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 0 },
  art: {
    subject:
      'an undead abbot in tattered monk robes with a glowing violet skull face holding a dark grimoire in a ruined abbey'
  }
})
