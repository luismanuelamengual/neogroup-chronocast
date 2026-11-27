import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, cardOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pegasus-of-still-waters',
  type: 'ally',
  name: 'Pegasus of Still Waters',
  text: "When it enters: return an enemy ally that costs 2 or less to its owner's hand.",
  flavor: 'It drinks only from lakes that reflect the stars.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 65,
  cost: 4,
  tribe: 'fae',
  attack: 6,
  health: 9,
  onEnter(ctx) {
    const unit = alliesOf(ctx, ctx.opponent).find((candidate) => cardOf(candidate).cost <= 2)

    if (unit) {
      returnToHand(ctx, unit)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Pegasus of Still Waters: a pegasus with moss-green skin and flower hair and dragonfly wings, mid-stride, indigo accents, mystic healer style'
  }
})
