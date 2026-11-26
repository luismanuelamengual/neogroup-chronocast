import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-stance',
  type: 'ability',
  subtype: 'instinct',
  name: 'Serene Stance',
  text: 'Your hero heals 6. Instant.',
  flavor: 'Still as a mountain, soft as a breeze.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject:
      'Serene Stance: a round shield and crossed spear planted firmly on stone, in a ruined temple, bursting toward the viewer, turquoise accents, mystic healer style'
  }
})
