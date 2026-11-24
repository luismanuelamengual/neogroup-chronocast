import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, damage, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-the-rift',
  type: 'ally',
  name: 'Scavenger of the Rift',
  text: 'When another Drifter of yours enters: it gains +1 attack and +1 health. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  element: 'time',
  price: 155,
  cost: 2,
  tribe: 'drifter',
  keywords: ['guardian'],
  attack: 1,
  health: 5,
  ability: {
    name: 'Strike',
    text: 'Deal 4 time damage to an enemy slot.',
    cost: 2,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 4)
    }
  },
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'drifter')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 2, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject:
      'Scavenger of the Rift: a stocky young orc woman with ash brown hair in a single long braid and a beauty mark, dressed in a sailor uniform with bronze greaves, carrying a sack bursting with salvaged relics, with a confident smirk, saffron yellow accents, time rift wanderer style'
  }
})
