import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorraks-recurve-bow',
  type: 'weapon',
  name: "Gorrak's Recurve Bow",
  text: 'When it is equipped: deal 4 earth damage to a random enemy ally.',
  faction: 'primal',
  restriction: { heroes: ['gorrak-tyrant-king'] },
  rarity: 'epic',
  element: 'earth',
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
      "Gorrak's Recurve Bow: a single bow made of blue steel with silver runes, bursting with jagged rocks and dust, half buried in snow, diagonal dynamic composition, scarlet accents, prehistoric jungle era style"
  }
})
