import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-the-wanderer',
  type: 'ally',
  name: 'Lamplighter of the Wanderer',
  text: 'When it enters: your other Drifters gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  tribe: 'drifter',
  keywords: ['charge'],
  attack: 3,
  health: 5,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'drifter', 1, 1, true)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Lamplighter of the Wanderer: a wiry elderly catfolk woman with salt-and-pepper hair in long braids and a beauty mark, wearing a bowler hat, dressed in a colonial explorer jacket covered in pockets, raising a lantern on a long pole, with a fierce scowl, scarlet accents, time rift wanderer style'
  }
})
