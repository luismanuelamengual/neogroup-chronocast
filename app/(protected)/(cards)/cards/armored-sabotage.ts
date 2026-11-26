import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-sabotage',
  type: 'ability',
  name: 'Armored Sabotage',
  text: 'Destroy the enemy armor. Fast.',
  flavor: 'Every armor has a loose strap.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  speed: 'fast',
  onPlay(ctx) {
    destroyArmor(ctx, ctx.opponent)
  },
  ai: { value: 6, tags: ['antiArmor'] },
  art: {
    subject:
      'Armored Sabotage: a sword and a shield cracking and rusting apart, above a calm lake at dusk, bursting toward the viewer, gold accents, warrior style'
  }
})
