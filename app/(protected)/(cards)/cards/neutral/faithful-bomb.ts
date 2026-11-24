import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'faithful-bomb',
  type: 'item',
  name: 'Faithful Bomb',
  text: 'Deal 4 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Faithful Bomb: a small bomb made of dark yew wood and brass fittings, on cracked stone tiles, diagonal dynamic composition, gold accents, time rift wanderer style'
  }
})
