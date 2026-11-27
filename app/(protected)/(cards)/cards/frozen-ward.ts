import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frozen-ward',
  type: 'armor',
  subtype: 'robe',
  name: 'Frozen Ward',
  text: 'When it is equipped: freeze a random enemy ally.',
  flavor: 'Cold enough to stop a sword mid-swing.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  armor: 1,
  durability: 3,
  onPlay(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      freezeAlly(ctx, unit)
    }
  },
  ai: { value: 1 },
  art: {
    subject:
      'Frozen Ward: a single ward made of copper with green patina, stuck in the sand, swirling around the center, magenta accents, mage style'
  }
})
