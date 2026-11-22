import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  name: 'Morgrath, the Lich Abbot',
  text: 'Unholy Bolt (3): deal 6 shadow damage to an enemy slot and your hero heals 3. At the start of each phase, deal 3 shadow damage to a random enemy ally.',
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
    text: 'Deal 6 shadow damage to an enemy slot and your hero heals 3.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
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
