import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'triceratops-matriarch',
  type: 'ally',
  name: 'Triceratops Matriarch',
  text: 'When another ally of yours enters, it gains +2 attack and +2 health.',
  flavor: 'Three horns, one rule: nobody touches the herd.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 22,
  health: 52,
  keywords: ['guardian', 'thorns'],
  thorns: 6,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 2, 2)
  },
  ai: { value: 7, tags: ['buff', 'defense'] },
  art: {
    subject: 'an enormous armored triceratops with a battle-scarred frill lowering its horns in front of its herd'
  }
})
