import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Stray Fury',
  text: 'An ally of yours gains +2 attack and +2 health for each trap you have set.',
  flavor: 'A rage that wandered in from another era.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const traps = ctx.engine.player(ctx.owner).traps.length

    buffAt(ctx, ctx.targets[0], 2 * traps, 2 * traps)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Stray Fury: a roaring red storm of rage swirling around a cracked war axe, over burning grassland, diagonal dynamic composition, crimson accents, prehistoric jungle era style'
  }
})
