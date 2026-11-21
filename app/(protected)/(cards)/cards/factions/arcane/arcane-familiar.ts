import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-familiar',
  type: 'ally',
  name: 'Arcane Familiar',
  text: 'On enter: draw a card.',
  flavor: 'It always knows which book you were looking for.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  attack: 5,
  health: 4,
  keywords: ['flying'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: { subject: 'a small glowing blue owl made of starlight, flying around a pile of floating spell books' }
})
