import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-strike',
  type: 'ability',
  name: 'Blazing Strike',
  text: 'Deal 9 fire damage to an enemy slot.',
  flavor: 'Heat first, questions never.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'fire',
  price: 420,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Blazing Strike: a single devastating impact crater with shockwaves, wreathed in roaring flames, over a stormy battlefield, centered and seen from slightly below, turquoise accents, mage style'
  }
})
