import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-fury',
  type: 'ability',
  subtype: 'instinct',
  name: 'Dreaming Fury',
  text: 'An ally of yours gains +5 attack and +7 health. Your hero takes 5 shadow damage.',
  flavor: 'A rage born in a nightmare.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 5, 7)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 5, 'shadow')
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Dreaming Fury: a roaring red storm of rage swirling around a cracked war axe, over rooftops at night, close-up filling the frame, teal accents, mystic healer style'
  }
})
