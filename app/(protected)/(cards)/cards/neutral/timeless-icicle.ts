import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-icicle',
  type: 'ally',
  name: 'Timeless Icicle',
  text: 'When it enters: the enemy weapon loses 1 durability. When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  element: 'ice',
  resist: ['ice'],
  weak: ['fire'],
  price: 2200,
  cost: 7,
  tribe: 'elemental',
  keywords: ['quick'],
  attack: 9,
  health: 12,
  onEnter(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 8, tags: ['antiGear', 'draw'] },
  art: {
    subject: 'an elemental spirit, the timeless icicle, lunging forward, time rift wanderer style'
  }
})
