import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-arcanum',
  type: 'ability',
  name: 'Rally of the Arcanum',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Arcanum: a tattered war banner planted in the ground, glowing with rallying light, over rooftops at night, close-up filling the frame, rose pink accents, mage style'
  }
})
