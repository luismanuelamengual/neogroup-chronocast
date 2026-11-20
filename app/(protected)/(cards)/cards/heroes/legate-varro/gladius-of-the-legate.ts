import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gladius-of-the-legate',
  type: 'weapon',
  name: 'Gladius of the Legate',
  text: 'On play: your hero gains 5 armor.',
  flavor: 'Every notch on its blade is a century.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'legate-varro' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  durability: 4,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'an ornate Roman gladius with a golden eagle hilt resting on a red cloak'
  }
})
