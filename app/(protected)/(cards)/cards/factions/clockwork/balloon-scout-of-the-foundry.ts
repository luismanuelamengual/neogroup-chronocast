import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'balloon-scout-of-the-foundry',
  type: 'ally',
  name: 'Balloon Scout of the Foundry',
  text: 'When it enters: your hero gains 7 armor. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  weak: ['wind'],
  price: 750,
  cost: 6,
  tribe: 'skyship',
  keywords: ['guardian'],
  attack: 7,
  health: 14,
  ability: {
    name: 'Strike',
    text: 'Deal 8 damage to an enemy slot.',
    cost: 3,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)
    }
  },
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 7)
  },
  ai: { value: 7, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject: 'a steampunk flying machine, the balloon scout of the foundry, lunging forward, steampunk steam era style'
  }
})
