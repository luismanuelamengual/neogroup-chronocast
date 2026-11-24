import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-of-steel',
  type: 'ally',
  name: 'Phalanx of Steel',
  text: 'When it enters: if you have another Legionnaire, draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  tribe: 'legionnaire',
  keywords: ['cleave'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'legionnaire', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Phalanx of Steel: a muscular middle-aged man with warm beige skin, jet black hair slicked back, a pointed goatee and a golden nose ring, dressed in scale armor with a purple sash, locking a tall round shield, with calm focus, scarlet accents, warrior style'
  }
})
