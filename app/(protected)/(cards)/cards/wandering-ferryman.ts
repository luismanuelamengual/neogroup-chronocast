import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-ferryman',
  type: 'ally',
  name: 'Wandering Ferryman',
  text: 'When it dies: draw a card.',
  flavor: 'He rows across rivers of time.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'drifter',
  keywords: ['flying'],
  attack: 4,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Wandering Ferryman: a willowy elderly goblin woman with charcoal grey hair long and straight and an eyepatch, wearing a bowler hat, dressed in a 1920s pinstripe suit with a tattered cape, pushing a long oar trailing light, with a fierce scowl, cobalt blue accents, time rift wanderer style'
  }
})
