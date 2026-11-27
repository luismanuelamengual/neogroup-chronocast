import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bramble-of-the-wanderer',
  type: 'ally',
  name: 'Bramble of the Wanderer',
  text: 'When it dies: draw the first Elemental of your deck.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 55,
  cost: 3,
  tribe: 'elemental',
  attack: 3,
  health: 10,
  onDeath(ctx) {
    seekTribe(ctx, ctx.owner, 'elemental')
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Bramble of the Wanderer: an elemental bramble with a hulking humanoid shape made of pearly white mist, sniffing the air, time rift wanderer style'
  }
})
