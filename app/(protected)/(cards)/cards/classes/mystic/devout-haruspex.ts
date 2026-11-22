import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-haruspex',
  type: 'ally',
  name: 'Devout Haruspex',
  text: 'When it enters: draw the first Oracle of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  resist: ['light'],
  price: 510,
  cost: 2,
  tribe: 'oracle',
  attack: 3,
  health: 6,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'oracle')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'an ancient temple seer in white robes, the devout haruspex, crouching, ready to strike, mystic healer style'
  }
})
