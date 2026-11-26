import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-of-storms',
  type: 'ability',
  name: 'Hourglass of Storms',
  text: 'Your hero gains 1 energy. Instant.',
  flavor: 'Its sand is made of lightning.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 40,
  cost: 0,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['energy'] },
  art: {
    subject:
      'Hourglass of Storms: a giant ornate hourglass with glowing falling sand, against a starry sky, close-up filling the frame, crimson accents, mage style'
  }
})
