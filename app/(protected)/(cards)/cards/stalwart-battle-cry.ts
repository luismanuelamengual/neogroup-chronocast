import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalwart-battle-cry',
  type: 'ability',
  name: 'Stalwart Battle Cry',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'A shout that steadies a hundred hands.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Stalwart Battle Cry: a visible shockwave of sound blasting across a battlefield, over a desert of red dunes, framed by drifting embers, violet accents, warrior style'
  }
})
