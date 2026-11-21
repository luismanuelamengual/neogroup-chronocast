import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chronos-leviathan',
  type: 'ally',
  name: 'Chronos Leviathan',
  text: 'On enter: stun every enemy ally.',
  flavor: 'It swallows hours whole.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'exotic',
  price: 14000,
  cost: 8,
  attack: 36,
  health: 35,
  keywords: ['unique'],
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      stun(ctx, unit)
    }
  },
  ai: { value: 9, tags: ['control'] },
  art: {
    subject:
      'a gigantic sea serpent made of flowing clockwork and turquoise water, coiling around a sinking clock tower'
  }
})
