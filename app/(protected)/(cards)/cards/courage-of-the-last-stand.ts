import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-the-last-stand',
  type: 'ability',
  subtype: 'tactic',
  name: 'Courage of the Last Stand',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'There is nowhere left to go but forward.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Courage of the Last Stand: a lion-head emblem blazing with golden light, against a starry sky, dramatic backlight, gold accents, warrior style'
  }
})
