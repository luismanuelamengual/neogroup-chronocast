import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kades-cleaver',
  type: 'weapon',
  name: "Kade's Cleaver",
  text: 'When it is equipped: your hero gains 5 armor.',
  flavor: 'Order, one cut at a time.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'overseer-kade' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Kade's Cleaver: a single cleaver made of ivory and jade, in a beam of light from above, diagonal dynamic composition, amber accents, neon cyberpunk future style"
  }
})
