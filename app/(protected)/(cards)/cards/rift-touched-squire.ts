import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-squire',
  type: 'ally',
  name: 'Rift-Touched Squire',
  text: 'When it dies: the enemy discards a random card.',
  flavor: 'He serves a knight from another century.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'time',
  price: 65,
  cost: 4,
  keywords: ['ranged'],
  attack: 5,
  health: 6,
  onDeath(ctx) {
    discardRandom(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Rift-Touched Squire: a towering elderly dwarf woman with tan skin, salt-and-pepper hair in cornrows and a dusting of freckles, wearing a tricorn hat, dressed in a wool shawl hung with tiny bells, carrying an oversized shield, with calm focus, tangerine accents, time rift wanderer style'
  }
})
