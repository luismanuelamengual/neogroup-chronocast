import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-long-road',
  type: 'ally',
  name: 'Bounty Hunter of the Long Road',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 570,
  cost: 3,
  keywords: ['charge'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Bounty Hunter of the Long Road: a muscular elderly foxfolk woman with silver hair with a side-swept fringe and a beaded chin piercing, wearing a wide-brimmed hat, dressed in a Victorian waistcoat with a samurai sash, holding a wanted poster and a coiled lasso, with a haunted stare, indigo accents, time rift wanderer style'
  }
})
