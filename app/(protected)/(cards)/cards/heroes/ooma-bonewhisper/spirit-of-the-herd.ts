import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-of-the-herd',
  type: 'ability',
  name: 'Spirit of the Herd',
  text: 'Your allies gain +2 attack and +4 health and your hero heals 4.',
  flavor: 'A thousand hooves, one heart.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 2, 4)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 3, tags: ['buff', 'heal'] },
  art: {
    subject: 'ghostly spirits of mammoths and dinosaurs running through a tribe, filling them with green light'
  }
})
