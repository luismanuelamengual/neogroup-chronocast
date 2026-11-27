import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cleaver-of-valor',
  type: 'weapon',
  subtype: 'axe',
  name: 'Cleaver of Valor',
  text: 'When it is equipped: draw the first armor of your deck.',
  flavor: 'Courage, sharpened to an edge.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    seekType(ctx, ctx.owner, 'armor')
  },
  ai: { value: 2 },
  art: {
    subject:
      'Cleaver of Valor: a single cleaver made of white bone and leather wraps, leaning against a ruined wall, close-up filling the frame, scarlet accents, warrior style'
  }
})
