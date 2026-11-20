import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-ninths-stand',
  type: 'ability',
  name: "The Ninth's Stand",
  text: 'Your hero gains 15 armor and your allies gain +6 health. Instant.',
  flavor: 'They held for a century. They can hold for a minute.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 15)
    buffAllies(ctx, ctx.owner, 0, 6)
  },
  ai: { value: 4, tags: ['defense', 'buff'] },
  art: {
    subject: 'the Ninth Legion in a tight circle of shields on a hilltop, surrounded by enemies under a stormy sky'
  }
})
