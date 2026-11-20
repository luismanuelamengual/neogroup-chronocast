import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

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
  attack: 14,
  health: 30,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject: 'a grand wizard in a starry cloak pulling a glowing magical creature out of a swirling portal'
  }
})
