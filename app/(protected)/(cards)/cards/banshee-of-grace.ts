import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-grace',
  type: 'ally',
  name: 'Banshee of Grace',
  text: 'When it dies: your allies heal 6.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 600,
  cost: 6,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 8,
  health: 13,
  onDeath(ctx) {
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 7, tags: ['heal'] },
  art: {
    subject:
      'Banshee of Grace: a banshee with ash-grey skin and a wailing open mouth, turning its head toward the viewer, indigo accents, mystic healer style'
  }
})
