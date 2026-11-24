import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'marble-fury',
  type: 'ability',
  name: 'Marble Fury',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  flavor: 'Cold as marble, hard as an emperor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Marble Fury: a roaring red storm of rage swirling around a cracked war axe, over a desert of red dunes, diagonal dynamic composition, amber accents, ancient bronze-age empire style'
  }
})
