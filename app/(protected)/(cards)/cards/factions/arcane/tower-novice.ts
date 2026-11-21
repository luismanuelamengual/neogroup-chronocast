import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tower-novice',
  type: 'ally',
  name: 'Tower Novice',
  text: 'On enter: deal 2 damage to the enemy hero.',
  flavor: 'Her first spell was an accident. So was the second.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 5,
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 1, tags: ['burn'] },
  art: {
    subject: 'a young novice mage in an oversized blue robe, a small spark of magic fizzling from her wand'
  }
})
