import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'herd-mother',
  type: 'ally',
  name: 'Herd Mother',
  text: 'When another ally of yours enters, it gains +4 health.',
  flavor: 'Every calf in the valley calls her mother.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 9,
  ability: {
    name: 'Call the Herd',
    text: 'Summon a Dino Hatchling.',
    cost: 3,
    activate(ctx) {
      summonCard(ctx, ctx.owner, 'dino-hatchling')
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 4)
  },
  ai: { value: 3, tags: ['ability', 'buff'] },
  art: {
    subject: 'a big gentle triceratops mother protecting a group of small hatchlings under a giant fern'
  }
})
