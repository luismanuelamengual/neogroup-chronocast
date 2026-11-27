import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stonehide-wolf',
  type: 'ally',
  name: 'Stonehide Wolf',
  text: 'It takes no damage from attacks (only effects can hurt it).',
  flavor: 'Claws and blades slide off its hide.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  tribe: 'beast',
  attack: 3,
  health: 4,
  modifyDamage(ctx, target, amount, source) {
    return source?.attack && unitAt(ctx, target)?.uid === ctx.self.uid ? 0 : amount
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Stonehide Wolf: a wolf whose fur has turned to grey granite plates, standing on a cliff edge, full body, dusty brown accents, prehistoric jungle era style'
  }
})
