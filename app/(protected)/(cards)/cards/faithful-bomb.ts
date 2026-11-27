import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'faithful-bomb',
  type: 'item',
  name: 'Faithful Bomb',
  text: 'Deal 4 damage to an enemy slot and 2 to the allies next to it.',
  flavor: 'It has never let its owner down. Yet.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)

    for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
      damage(ctx, ref, 2)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Faithful Bomb: a small bomb made of dark yew wood and brass fittings, on cracked stone tiles, diagonal dynamic composition, gold accents, time rift wanderer style'
  }
})
