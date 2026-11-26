import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-runecarver',
  type: 'ally',
  name: 'Ethereal Runecarver',
  text: 'When it enters: draw the first Magus of your deck.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  element: 'arcane',
  resist: ['arcane'],
  price: 140,
  cost: 2,
  tribe: 'magus',
  keywords: ['ranged'],
  attack: 2,
  health: 4,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'magus')
  },
  ai: { value: 2, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Ethereal Runecarver: a wiry young elf woman with tan skin, chestnut hair spiky and a scar across one eye, dressed in a hooded traveling cloak with silver clasps, carving a glowing rune into stone, with grim determination, cobalt blue accents, mage style'
  }
})
