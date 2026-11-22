import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-rift',
  type: 'ally',
  name: 'Bounty Hunter of the Rift',
  text: 'When it enters: your hero gains 5 armor. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  element: 'time',
  price: 170,
  cost: 3,
  keywords: ['flying'],
  attack: 4,
  health: 5,
  ability: {
    name: 'Strike',
    text: 'Deal 5 time damage to an enemy slot.',
    cost: 2,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  },
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 3, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject: 'a time-traveling adventurer, the bounty hunter of the rift, mid-leap, time rift wanderer style'
  }
})
