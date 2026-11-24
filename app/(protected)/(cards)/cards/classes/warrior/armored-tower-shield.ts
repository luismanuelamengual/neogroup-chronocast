import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-tower-shield',
  type: 'armor',
  name: 'Armored Tower Shield',
  text: 'When it is equipped: your allies heal 2.',
  flavor: 'A wall you can carry.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'legendary',
  price: 4400,
  cost: 2,
  armor: 9,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Armored Tower Shield: a single shield made of dark yew wood and brass fittings, half buried in snow, seen from above, ivory accents, warrior style'
  }
})
