import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'airship-of-brass',
  type: 'ally',
  name: 'Airship of Brass',
  text: 'When it enters: if you have another Skyship, draw a card. At the start of each phase: your hero heals 2.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'exotic',
  weak: ['wind'],
  price: 11600,
  cost: 3,
  tribe: 'skyship',
  keywords: ['guardian', 'unique'],
  attack: 4,
  health: 12,
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'skyship', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['defense', 'draw', 'tribe'] },
  art: {
    subject:
      'Airship of Brass: an airship built of bronze with steam vents, with a ticking clock face on its chest, firing steam, steampunk steam era style'
  }
})
