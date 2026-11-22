import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dispel-wave',
  type: 'ability',
  name: 'Dispel Wave',
  text: 'Destroy the most expensive enemy artifact.',
  flavor: 'Every enchantment has an end. This is it.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  onPlay(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a ring of pure white light washing over enchanted objects, their glowing runes fading out'
  }
})
