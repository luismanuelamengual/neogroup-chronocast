import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pixie-of-the-ancestors',
  type: 'ally',
  name: 'Pixie of the Ancestors',
  text: 'When it dies: draw the first Fae of your deck.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 70,
  cost: 5,
  tribe: 'fae',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onDeath(ctx) {
    seekTribe(ctx, ctx.owner, 'fae')
  },
  ai: { value: 5, tags: ['revive'] },
  art: {
    subject:
      'Pixie of the Ancestors: a pixie with pale blue skin and starry hair and a trail of glowing pollen, baring its teeth, rose pink accents, mystic healer style'
  }
})
