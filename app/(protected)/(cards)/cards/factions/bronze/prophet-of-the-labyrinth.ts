import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prophet-of-the-labyrinth',
  type: 'ally',
  name: 'Prophet of the Labyrinth',
  text: 'At the start of each phase: your hero gains 2 armor. Its ability is paid with energy (⚡).',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
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
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject:
      'an ancient temple seer in white robes, the prophet of the labyrinth, standing guard, ancient bronze-age empire style'
  }
})
