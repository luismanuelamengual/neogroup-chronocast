import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Devout Fury',
  text: 'An ally of yours gains +1 attack and +1 health.',
  flavor: 'The faithful hit hardest.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 120,
  cost: 0,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 1, 1)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Devout Fury: a roaring red storm of rage swirling around a cracked war axe, in a dark forest clearing, dramatic backlight, crimson accents, mystic healer style'
  }
})
