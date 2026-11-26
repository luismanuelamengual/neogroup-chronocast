import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'halberd-of-valor',
  type: 'weapon',
  subtype: 'spear',
  name: 'Halberd of Valor',
  text: 'When it is equipped: draw a card.',
  flavor: 'Long reach, longer legend.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  attack: 2,
  durability: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1 },
  art: {
    subject:
      'Halberd of Valor: a single halberd made of carved obsidian, on a workbench with tools, dramatic backlight, teal accents, warrior style'
  }
})
