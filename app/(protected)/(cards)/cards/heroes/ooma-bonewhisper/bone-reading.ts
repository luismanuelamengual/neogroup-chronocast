import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-reading',
  type: 'ability',
  name: 'Bone Reading',
  text: 'Draw a card and your hero heals 4. Fast.',
  flavor: 'The bones fall. The future shows.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 1, tags: ['draw', 'heal'] },
  art: {
    subject: 'Ooma throwing carved bones on an animal hide by a campfire, ghostly shapes rising'
  }
})
