import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-fury',
  type: 'ability',
  subtype: 'tactic',
  name: 'Radiant Fury',
  text: 'An ally of yours gains +2 attack this phase and heals 4. Instant.',
  flavor: 'Holy wrath shines bright.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 2)
    heal(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Radiant Fury: a roaring red storm of rage swirling around a cracked war axe, against a starry sky, dramatic backlight, amber accents, mystic healer style'
  }
})
