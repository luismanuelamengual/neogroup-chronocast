import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorraks-recurve-bow',
  type: 'weapon',
  subtype: 'bow',
  name: "Gorrak's Recurve Bow",
  text: 'When it is equipped: deal 4 earth damage to a random enemy ally.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'epic',
  element: 'earth',
  price: 1100,
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
