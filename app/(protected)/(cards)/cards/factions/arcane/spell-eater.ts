import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spell-eater',
  type: 'ally',
  name: 'Spell Eater',
  text: 'After it takes damage: it gains +2 attack.',
  flavor: 'Fire, ice, lightning. It tastes them all.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  health: 10,
  keywords: ['shield'],
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 4, tags: ['buff', 'defense'] },
  art: {
    subject: 'a strange blue magical beast with a huge mouth swallowing a glowing fireball'
  }
})
