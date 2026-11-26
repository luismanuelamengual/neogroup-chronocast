import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, seekSubtype } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'back-alley-clinic',
  type: 'ability',
  subtype: 'program',
  name: 'Back-Alley Clinic',
  text: 'Draw the first implant of your deck and draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  onPlay(ctx) {
    seekSubtype(ctx, ctx.owner, 'implant')
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Back-Alley Clinic: a cramped neon-lit clinic in a rainy alley, a reclining surgery chair under a robotic arm, shelves of glowing implants in jars, teal accents, neon cyberpunk future style'
  }
})
