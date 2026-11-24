import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-chrononaut',
  type: 'ally',
  name: 'Old Chrononaut',
  text: 'When it enters: draw a card.',
  flavor: 'He remembers tomorrow better than yesterday.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 5,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Old Chrononaut: a stocky young elf woman with deep brown skin, ash brown hair in thick dreadlocks and a dusting of freckles, wearing a beaded headband, dressed in a pirate greatcoat with clock-face buttons, adjusting a brass time compass on the wrist, with a serene smile, amber accents, time rift wanderer style'
  }
})
