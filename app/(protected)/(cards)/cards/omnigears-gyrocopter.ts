import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigears-gyrocopter',
  type: 'ally',
  name: "Omnigear's Gyrocopter",
  text: 'When it enters: your other Skyships gain +2 attack and +2 health. At the start of each phase: your hero heals 2.',
  faction: 'clockwork',
  restriction: { heroes: ['omnigear-prime'] },
  rarity: 'legendary',
  weak: ['wind'],
  price: 2320,
  cost: 5,
  tribe: 'skyship',
  keywords: ['shield', 'unique'],
  attack: 6,
  health: 8,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'skyship', 2, 2, true)
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 7, tags: ['buff', 'defense', 'tribe'] },
  art: {
    subject:
      "Omnigear's Gyrocopter: a gyrocopter built of matte olive with yellow eyes, with a spinning propeller, hovering above the ground, steampunk steam era style"
  }
})
