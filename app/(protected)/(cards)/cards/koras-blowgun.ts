import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'koras-blowgun',
  type: 'weapon',
  subtype: 'blowgun',
  name: "Kora's Blowgun",
  text: 'When your hero attacks with it: the ally it hits becomes your Prey and gets 2 poison.',
  faction: 'primal',
  restriction: { heroes: ['kora-wildfang'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      markPrey(ctx, target)
      poison(ctx, target, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Kora's Blowgun: a single blowgun made of pale ash wood wrapped in red cloth, swept by a spiraling gust with leaves, on cracked stone tiles, close-up filling the frame, emerald accents, prehistoric jungle era style"
  }
})
