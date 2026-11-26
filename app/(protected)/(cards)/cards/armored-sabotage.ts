import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAttachedAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-sabotage',
  type: 'ability',
  name: 'Armored Sabotage',
  text: 'Destroy an enemy weapon, armor or attachment, your choice. Fast.',
  flavor: 'Every armor has a loose strap.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 540,
  cost: 5,
  speed: 'fast',
  targets: ['enemyAttachment'],
  onPlay(ctx) {
    destroyAttachedAt(ctx, ctx.targets[0])
  },
  ai: { value: 6, tags: ['antiGear'] },
  art: {
    subject:
      'Armored Sabotage: a sword and a shield cracking and rusting apart, above a calm lake at dusk, bursting toward the viewer, gold accents, warrior style'
  }
})
