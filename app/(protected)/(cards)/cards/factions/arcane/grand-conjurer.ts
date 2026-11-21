import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grand-conjurer',
  type: 'ally',
  name: 'Grand Conjurer',
  text: 'On enter: summon a Arcane Familiar.',
  flavor: 'Why fight alone when you can bring friends from thin air?',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 12,
  health: 13,
  ability: {
    name: 'Arcane Lance',
    text: 'Deal 10 damage to an enemy ally.',
    cost: 2,
    targets: ['enemyAlly'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 10)
    }
  },
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 6, tags: ['ability', 'summon'] },
  art: {
    subject: 'a grand wizard in a starry cloak pulling a glowing magical creature out of a swirling portal'
  }
})
