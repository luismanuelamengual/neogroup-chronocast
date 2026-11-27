import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poisonAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'whisper-of-the-pit',
  type: 'ally',
  name: 'Whisper of the Pit',
  text: 'When it dies: poison every enemy ally (1).',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'horror',
  attack: 2,
  health: 6,
  onDeath(ctx) {
    poisonAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Whisper of the Pit: a wispy shadow creature with many mouths seeping out of a black pit, full body, acid green accents, dark end-of-time void style'
  }
})
