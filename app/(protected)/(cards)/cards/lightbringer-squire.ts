import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lightbringer-squire',
  type: 'ally',
  name: 'Lightbringer Squire',
  text: 'When it enters: deal 2 light damage to the enemy hero and your hero heals 2.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'light',
  price: 50,
  cost: 2,
  tribe: 'drifter',
  attack: 2,
  health: 5,
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2, 'light')
    healHero(ctx, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Lightbringer Squire: a young squire holding up a lantern that shoots a beam of sunlight, eager grin, white tabard, mystic healer style'
  }
})
