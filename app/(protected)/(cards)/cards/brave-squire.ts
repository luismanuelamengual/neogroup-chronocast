import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-squire',
  type: 'ally',
  name: 'Brave Squire',
  text: 'When it enters: draw the first weapon of your deck.',
  flavor: 'Too young to know fear, old enough to fight it.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 80,
  cost: 6,
  attack: 7,
  health: 12,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'weapon')
  },
  ai: { value: 6, tags: ['draw'] },
  art: {
    subject:
      'Brave Squire: a lanky elderly goblin woman with salt-and-pepper hair in thick dreadlocks and sharp cheekbones, wearing a tricorn hat, dressed in a pirate greatcoat with clock-face buttons, carrying an oversized shield, with a confident smirk, turquoise accents, warrior style'
  }
})
