import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-rift',
  type: 'ally',
  name: 'Bounty Hunter of the Rift',
  text: 'When it enters: your hero heals 5. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'time',
  price: 160,
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
    healHero(ctx, 5)
  },
  ai: { value: 3, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject:
      'Bounty Hunter of the Rift: a hunched young orc man with ash brown hair in twin buns, a pointed goatee and glowing tattoos on the cheeks, wearing a beaded headband, dressed in a poncho woven with hourglass patterns, holding a wanted poster and a coiled lasso, with a confident smirk, rose pink accents, time rift wanderer style'
  }
})
