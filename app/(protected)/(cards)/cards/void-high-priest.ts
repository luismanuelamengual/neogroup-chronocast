import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isCursed } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'void-high-priest',
  type: 'ally',
  name: 'Void High Priest',
  text: 'When an enemy ally with a curse dies: your hero heals 4.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  tribe: 'cultist',
  attack: 3,
  health: 5,
  onEnemyAllyDeath(ctx, unit) {
    if (isCursed(unit)) {
      healHero(ctx, 4)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Void High Priest: a gaunt high priest in tattered black and violet robes raising a staff topped with a void orb, cursed runes floating around him, full body, purple accents, dark end-of-time void style'
  }
})
