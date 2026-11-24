import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vestments-of-renewal',
  type: 'armor',
  name: 'Vestments of Renewal',
  text: 'When it is equipped: your allies heal 2.',
  flavor: 'Worn by healers who never sleep.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  armor: 4,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Vestments of Renewal: a single vestments made of blackened iron with gold inlay, on a worn wooden table, framed by drifting embers, teal accents, mystic healer style'
  }
})
