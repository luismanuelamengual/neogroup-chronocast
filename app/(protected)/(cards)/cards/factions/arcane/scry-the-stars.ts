import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scry-the-stars',
  type: 'ability',
  name: 'Scry the Stars',
  text: 'Draw a card. Your hero gains 1 energy.',
  flavor: 'The constellations never lie. They just speak slowly.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 55,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw', 'energy'] },
  art: {
    subject: 'a young mage reading glowing constellations in a crystal orb under a starry dome'
  }
})
