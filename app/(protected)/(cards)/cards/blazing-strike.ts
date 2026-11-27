import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-strike',
  type: 'ability',
  subtype: 'spell',
  name: 'Blazing Strike',
  text: 'Deal 4 fire damage to an enemy slot and burn it (2).',
  flavor: 'Heat first, questions never.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  element: 'fire',
  price: 420,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4, 'fire')
    burn(ctx, ctx.targets[0], 2)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Blazing Strike: a single devastating impact crater with shockwaves, wreathed in roaring flames, over a stormy battlefield, centered and seen from slightly below, turquoise accents, mage style'
  }
})
