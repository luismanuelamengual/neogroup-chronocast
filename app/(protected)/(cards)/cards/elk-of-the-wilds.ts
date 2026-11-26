import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'elk-of-the-wilds',
  type: 'ally',
  name: 'Elk of the Wilds',
  text: 'When it dies: deal 7 damage to a random enemy ally.',
  flavor: 'King of the forest, crowned in antlers.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'beast',
  attack: 8,
  health: 9,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 7)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Elk of the Wilds: an elk with sandy fur with dark mane and a broad antler rack, sniffing the air, rose pink accents, hunter style'
  }
})
