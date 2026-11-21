import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devourer-of-light',
  type: 'ally',
  name: 'Devourer of Light',
  text: 'On enter: destroy your weakest other ally: if you do, deal 8 damage to every enemy ally.',
  flavor: 'The stars go out where it passes.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 18,
  health: 17,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      damageAllAllies(ctx, ctx.opponent, 8)
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a huge shadowy beast with a gaping mouth swallowing glowing stars from the sky'
  }
})
