import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffAt, draw, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Armored Fury',
  text: 'An ally of yours gains +3 attack and +4 health. Instant. If an enemy ally is your Prey, draw a card.',
  flavor: 'Rage, now with plating.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)

    if (alliesOf(ctx, ctx.opponent).some((unit) => isPrey(ctx, unit))) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Armored Fury: a roaring red storm of rage swirling around a cracked war axe, in a misty valley, close-up filling the frame, scarlet accents, warrior style'
  }
})
