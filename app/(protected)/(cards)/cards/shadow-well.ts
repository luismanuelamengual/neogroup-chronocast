import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shadow-well',
  type: 'ability',
  subtype: 'ritual',
  name: 'Shadow Well',
  text: 'Your hero takes 4 shadow damage and gains 4 energy. Instant.',
  flavor: 'Drink deep. Pay later.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'instant',
  onPlay(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 4, 'shadow')
    gainEnergy(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Shadow Well: a stone well brimming with liquid shadow that rises in black tendrils under a starless sky, close-up filling the frame, violet accents, time rift wanderer style'
  }
})
