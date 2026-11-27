import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'marble-fury',
  type: 'ability',
  subtype: 'tactic',
  name: 'Marble Fury',
  text: 'An ally of yours that has Guardian gains +7 attack this phase. Instant.',
  flavor: 'Cold as marble, hard as an emperor.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit?.keywords.includes('guardian')) {
      buffThisPhase(ctx, unit, 7)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Marble Fury: a roaring red storm of rage swirling around a cracked war axe, over a desert of red dunes, diagonal dynamic composition, amber accents, ancient bronze-age empire style'
  }
})
