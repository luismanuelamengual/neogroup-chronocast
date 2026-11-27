import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'carrion-feaster',
  type: 'ally',
  name: 'Carrion Feaster',
  text: 'When an enemy ally dies: you gain 1 Chronos this phase.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'horror',
  attack: 3,
  health: 8,
  onEnemyAllyDeath(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Carrion Feaster: a hunched eyeless horror with a long tongue feeding on a fallen corpse, full body, rot green accents, dark end-of-time void style'
  }
})
