import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, repairWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-the-first-fire',
  type: 'ability',
  name: 'Aegis of the First Fire',
  text: 'Your weapon gains +3 durability. Draw a card.',
  flavor: 'The first fire still protects its children.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    repairWeapon(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['repair', 'draw'] },
  art: {
    subject:
      'Aegis of the First Fire: a radiant dome-shaped magical barrier, in a dark forest clearing, diagonal dynamic composition, indigo accents, prehistoric jungle era style'
  }
})
