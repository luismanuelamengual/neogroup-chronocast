import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'starshot-bow',
  type: 'weapon',
  name: 'Starshot Bow',
  text: 'On play: deal 6 damage to every enemy ally.',
  flavor: 'Its arrows are falling stars.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'mythic',
  price: 32500,
  cost: 6,
  attack: 16,
  durability: 4,
  keywords: ['ranged', 'cleave'],
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 9, tags: ['removal'] },
  art: {
    subject: 'a magnificent silver bow shooting an arrow of pure starlight across the night sky'
  }
})
