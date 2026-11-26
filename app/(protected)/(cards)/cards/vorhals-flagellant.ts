import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vorhals-flagellant',
  type: 'ally',
  name: "Vorhal's Flagellant",
  text: 'When another Cultist of yours enters: your hero heals 2. When it dies: summon a Risen Skeleton.',
  faction: 'void',
  restriction: { heroes: ['vorhal-the-last-hour'] },
  rarity: 'legendary',
  price: 2320,
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
    subject:
      "Vorhal's Flagellant: a broad-shouldered elderly woman with light brown skin, snow-white hair in an undercut and a jeweled brow piercing, wearing a crown of thorns, dressed in ash-grey vestments with a rusted censer, swinging a chain flail, with a fierce scowl, gold accents, dark end-of-time void style"
  }
})
