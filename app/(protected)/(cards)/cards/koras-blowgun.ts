import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'koras-blowgun',
  type: 'weapon',
  name: "Kora's Blowgun",
  text: 'When it is equipped: deal 4 wind damage to a random enemy ally.',
  faction: 'primal',
  restriction: { heroes: ['kora-wildfang'] },
  rarity: 'epic',
  element: 'wind',
  price: 1720,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Kora's Blowgun: a single blowgun made of pale ash wood wrapped in red cloth, swept by a spiraling gust with leaves, on cracked stone tiles, close-up filling the frame, emerald accents, prehistoric jungle era style"
  }
})
