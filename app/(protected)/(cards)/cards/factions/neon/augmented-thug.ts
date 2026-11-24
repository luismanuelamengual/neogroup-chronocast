import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'augmented-thug',
  type: 'ally',
  name: 'Augmented Thug',
  text: 'When it enters: draw a card.',
  flavor: 'More chrome than brains.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Augmented Thug: a lanky middle-aged man with dark ebony skin, electric teal hair in cornrows, a pointed goatee and a monocle, wearing a fedora, dressed in a sharp black suit with neon tie, cracking brass knuckles, with a confident smirk, cobalt blue accents, neon cyberpunk future style'
  }
})
