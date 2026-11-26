import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-haruspex',
  type: 'ally',
  name: 'Devout Haruspex',
  text: 'When it enters: draw the first Oracle of your deck.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'rare',
  resist: ['light'],
  price: 360,
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
      'Devout Haruspex: a muscular middle-aged woman with sun-weathered bronze skin, jet black hair spiky and a scar across one eye, wearing a golden diadem, dressed in a sea-green himation with pearl strands, reading signs in a golden bowl, with grim determination, tangerine accents, mystic healer style'
  }
})
