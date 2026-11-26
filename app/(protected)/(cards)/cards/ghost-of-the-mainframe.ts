import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ghost-of-the-mainframe',
  type: 'ally',
  name: 'Ghost of the Mainframe',
  text: 'When it enters: draw a card.',
  flavor: 'It lives where the code forgot to look.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Ghost of the Mainframe: a plump elderly woman with warm beige skin, ultraviolet hair in thick dreadlocks and heavy golden earrings, dressed in an oversized hoodie with cables spilling out, holding a small caged light, leaping through the air, with a fierce scowl, turquoise accents, neon cyberpunk future style'
  }
})
