import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nysas-bow',
  type: 'weapon',
  subtype: 'bow',
  name: "Nysa's Bow",
  text: 'When it is equipped: deal 4 wind damage to a random enemy ally.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'epic',
  element: 'wind',
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
      "Nysa's Bow: a single bow made of blackened iron with gold inlay, swept by a spiraling gust with leaves, on a workbench with tools, dramatic backlight, magenta accents, prehistoric jungle era style"
  }
})
