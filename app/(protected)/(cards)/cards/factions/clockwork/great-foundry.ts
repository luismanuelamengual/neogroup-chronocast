import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'great-foundry',
  type: 'artifact',
  name: 'The Great Foundry',
  text: 'Artifact. At the start of each phase, if you have fewer than 3 allies, summon a Gear Drone.',
  flavor: 'Day and night, it makes more of everything.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length < 3) {
      summonCard(ctx, ctx.owner, 'gear-drone')
    }
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject: 'a vast foundry with rivers of molten metal, conveyor belts and assembly arms building small drones'
  }
})
