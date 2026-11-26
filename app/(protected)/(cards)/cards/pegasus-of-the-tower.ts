import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pegasus-of-the-tower',
  type: 'ally',
  name: 'Pegasus of the Tower',
  text: 'When it enters: draw the first Fae of your deck.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 140,
  cost: 2,
  tribe: 'fae',
  attack: 3,
  health: 5,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'fae')
  },
  ai: { value: 2, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Pegasus of the Tower: a pegasus with pale blue skin and starry hair and a trail of glowing pollen, circling warily, rose pink accents, medieval magic order style'
  }
})
