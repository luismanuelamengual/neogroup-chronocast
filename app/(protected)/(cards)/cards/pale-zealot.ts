import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pale-zealot',
  type: 'ally',
  name: 'Pale Zealot',
  text: 'When it enters: draw the first Cultist of your deck. When it dies: deal 3 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1200,
  cost: 4,
  tribe: 'cultist',
  keywords: ['poison'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'cultist')
  },
  onDeath(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro', 'draw', 'tribe'] },
  art: {
    subject:
      'Pale Zealot: a hunched young grey-skinned man with snow-white hair spiky, a braided beard and heavy golden earrings, wearing a crown of thorns, dressed in a mud-caked burial wrap, holding a black candle, with a booming laugh, cobalt blue accents, dark end-of-time void style'
  }
})
