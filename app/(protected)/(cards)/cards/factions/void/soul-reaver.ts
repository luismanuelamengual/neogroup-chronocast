import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-reaver',
  type: 'ally',
  name: 'Soul Reaver',
  text: 'When it attacks: it gains +1 attack and +2 health.',
  flavor: 'Every soul she takes makes her stronger.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 14,
  health: 11,
  keywords: ['lifesteal'],
  onAttack(ctx) {
    buffSelf(ctx, 1, 2)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a dark warrior woman with a glowing green blade draining wisps of souls from fallen enemies'
  }
})
