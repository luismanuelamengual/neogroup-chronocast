import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prophet-of-the-labyrinth',
  type: 'ally',
  name: 'Prophet of the Labyrinth',
  text: 'At the start of each phase: your hero heals 2. Its ability is paid with energy (⚡).',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  resist: ['light'],
  price: 630,
  cost: 4,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 4,
  health: 12,
  ability: {
    name: 'Inspire',
    text: 'An ally of yours gains +1 attack and +2 health.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 1, 2)
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject:
      'Prophet of the Labyrinth: a towering elderly woman with golden skin, silver hair in short curls and a beaded chin piercing, wearing a golden diadem, dressed in linen robes painted with eye symbols, pointing at the sky with a scroll, with a booming laugh, teal accents, ancient bronze-age empire style'
  }
})
