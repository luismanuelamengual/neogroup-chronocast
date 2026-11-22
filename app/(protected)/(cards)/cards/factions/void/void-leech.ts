import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'void-leech',
  type: 'ally',
  name: 'Void Leech',
  text: 'When it enters: the enemy hero loses 2 energy.',
  flavor: 'It drinks what makes heroes heroes.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 165,
  cost: 2,
  attack: 4,
  health: 6,
  onEnter(ctx) {
    drainEnergy(ctx, ctx.opponent, 2)
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject: 'a slimy purple leech creature with glowing eyes sucking golden light out of the air'
  }
})
