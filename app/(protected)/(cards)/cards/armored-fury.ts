import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Armored Fury',
  text: 'An ally of yours gains +3 attack and +4 health. Instant.',
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
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Armored Fury: a roaring red storm of rage swirling around a cracked war axe, in a misty valley, close-up filling the frame, scarlet accents, warrior style'
  }
})
