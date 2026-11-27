import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroySupportAt, gainEnergy, supportAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patented-tick',
  type: 'ability',
  subtype: 'gadget',
  name: 'Patented Tick',
  text: 'Destroy an artifact of yours: your hero gains as much energy as its cost. Instant.',
  flavor: 'Patent pending since 1887.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    const found = supportAt(ctx, ctx.targets[0])

    if (found && destroySupportAt(ctx, ctx.targets[0])) {
      gainEnergy(ctx, ctx.owner, found.definition.cost)
    }
  },
  targets: ['friendlyArtifact'],
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Patented Tick: a pocket watch mid-tick with glowing gears exploding outward, in a snowy pass, centered and seen from slightly below, ivory accents, steampunk steam era style'
  }
})
