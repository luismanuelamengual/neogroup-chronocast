import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cleanse, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-the-crossroads',
  type: 'ability',
  subtype: 'instinct',
  name: 'Respite of the Crossroads',
  text: 'Your hero heals 6 and loses its poison and burn.',
  flavor: 'Every road ends at a campfire.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    cleanse(ctx, { player: ctx.owner, slot: 'hero' })
    healHero(ctx, 6)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject:
      'Respite of the Crossroads: a quiet campfire with a steaming kettle and bedroll, in a snowy pass, framed by drifting embers, tangerine accents, time rift wanderer style'
  }
})
