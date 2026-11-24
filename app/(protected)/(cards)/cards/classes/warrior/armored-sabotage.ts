import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-sabotage',
  type: 'ability',
  name: 'Armored Sabotage',
  text: 'Destroy the enemy weapon. Fast.',
  flavor: 'Every armor has a loose strap.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 6, tags: ['antiGear'] },
  art: {
    subject:
      'Armored Sabotage: a sword and a shield cracking and rusting apart, above a calm lake at dusk, bursting toward the viewer, gold accents, warrior style'
  }
})
