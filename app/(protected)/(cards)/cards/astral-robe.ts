import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { randomAlly, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'astral-robe',
  type: 'armor',
  subtype: 'robe',
  name: 'Astral Robe',
  text: "When it is equipped: return a random enemy ally to its owner's hand.",
  flavor: 'Woven from the night sky, stitched with stars.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'exotic',
  price: 3160,
  cost: 3,
  armor: 3,
  durability: 4,
  onPlay(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      returnToHand(ctx, unit)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Astral Robe: a single robe made of blue steel with silver runes, on cracked stone tiles, diagonal dynamic composition, tangerine accents, mage style'
  }
})
