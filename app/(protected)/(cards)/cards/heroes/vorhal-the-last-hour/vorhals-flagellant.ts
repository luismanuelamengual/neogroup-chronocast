import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vorhals-flagellant',
  type: 'ally',
  name: "Vorhal's Flagellant",
  text: 'When another Cultist of yours enters: your hero heals 2. When it dies: summon a Risen Skeleton.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'legendary',
  price: 5600,
  cost: 5,
  tribe: 'cultist',
  keywords: ['unique'],
  attack: 6,
  health: 12,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'cultist')) {
      healHero(ctx, 2)
    }
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'risen-skeleton')
  },
  ai: { value: 7, tags: ['heal', 'summon'] },
  art: {
    subject: "a hooded doomsday cultist, the vorhal's flagellant, lunging forward, dark end-of-time void style"
  }
})
