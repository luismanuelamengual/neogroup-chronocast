import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prismatic-battlemage',
  type: 'ally',
  name: 'Prismatic Battlemage',
  text: 'When it dies: your Magi gain +1 attack and +1 health. When it enters: your hero gains 1 energy.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  resist: ['arcane'],
  price: 1560,
  cost: 2,
  tribe: 'magus',
  keywords: ['ranged'],
  attack: 1,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'magus', 1, 1)
  },
  onEnter(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['buff', 'energy', 'tribe'] },
  art: {
    subject: 'a medieval spellcaster, the prismatic battlemage, raising its weapon, medieval magic order style'
  }
})
