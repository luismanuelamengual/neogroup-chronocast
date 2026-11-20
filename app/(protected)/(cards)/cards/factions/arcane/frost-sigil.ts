import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-sigil',
  type: 'trap',
  name: 'Frost Sigil',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  flavor: 'One step on the sigil, and winter comes for you.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit)
  },
  ai: { value: 2, tags: ['trap', 'control'] },
  art: {
    subject: 'a frost sigil carved into the ground freezing a charging beast in place'
  }
})
