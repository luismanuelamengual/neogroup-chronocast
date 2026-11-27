import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorraks-recurve-bow',
  type: 'weapon',
  subtype: 'bow',
  name: "Gorrak's Recurve Bow",
  text: 'When it is equipped: your Saurians gain +1 attack and +2 health.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'saurian')) {
      buff(ctx, unit, 1, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Gorrak's Recurve Bow: a single bow made of blue steel with silver runes, bursting with jagged rocks and dust, half buried in snow, diagonal dynamic composition, scarlet accents, prehistoric jungle era style"
  }
})
