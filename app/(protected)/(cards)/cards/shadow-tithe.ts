import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shadow-tithe',
  type: 'ability',
  subtype: 'ritual',
  name: 'Shadow Tithe',
  text: 'Your hero takes 6 shadow damage. Draw 2 cards.',
  flavor: 'The Eclipse always collects. In blood, if you are short on coin.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 420,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 6, 'shadow')
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Shadow Tithe: a hooded hand dropping glowing red blood drops into a black offering bowl, purple smoke rising into whispering shadow shapes, dark ritual mood'
  }
})
