import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  boss: true,
  name: 'Morgrath, the Lich Abbot',
  text: 'Unholy Bolt (3): deal 12 damage to an enemy slot and your hero heals 6. At the start of each phase, deal 5 damage to a random enemy ally.',
  flavor: 'He prayed for eternal life. Something answered.',
  faction: 'arcane',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'morgrath-lich-abbot' },
  rarity: 'legendary',
  cost: 0,
  health: 120,
  ability: {
    name: 'Unholy Bolt',
    text: 'Deal 12 damage to an enemy slot and your hero heals 6.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
    }
  },
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)
  },
  ai: { value: 0 },
  art: {
    subject:
      'an undead abbot in tattered monk robes with a glowing violet skull face holding a dark grimoire in a ruined abbey'
  }
})
