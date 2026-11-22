import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-adept',
  type: 'ally',
  name: 'Storm Adept',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'Lightning answers when she calls, but it charges a fee.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 180,
  cost: 3,
  attack: 5,
  health: 8,
  ability: {
    name: 'Thunderclap',
    text: 'Deal 6 damage to an enemy slot.',
    cost: 2,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
    }
  },
  ai: { value: 3, tags: ['ability', 'energy'] },
  art: {
    subject: 'a young sorceress raising a staff into a storm, a lightning bolt striking down from the clouds'
  }
})
