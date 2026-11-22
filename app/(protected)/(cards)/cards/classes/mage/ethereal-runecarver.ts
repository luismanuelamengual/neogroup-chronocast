import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-runecarver',
  type: 'ally',
  name: 'Ethereal Runecarver',
  text: 'When it enters: draw the first Magus of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'arcane',
  resist: ['arcane'],
  price: 155,
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
    subject: 'a medieval spellcaster, the ethereal runecarver, glaring at the viewer, mage style'
  }
})
