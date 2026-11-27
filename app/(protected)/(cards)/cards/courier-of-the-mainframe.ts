import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courier-of-the-mainframe',
  type: 'ally',
  name: 'Courier of the Mainframe',
  text: 'When it attacks: the enemy hero loses 1 energy; if it had none, deal 3 damage to it.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'sonic',
  price: 220,
  cost: 6,
  tribe: 'enforcer',
  attack: 8,
  health: 12,
  onAttack(ctx) {
    if (drainEnergy(ctx, ctx.opponent, 1) === 0) {
      damageEnemyHero(ctx, 3)
    }
  },
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject:
      'Courier of the Mainframe: a wiry elderly android man with a smooth metal scalp, heavy stubble and a beaded chin piercing, wearing a street hood, dressed in a bulky riot exosuit, clutching a sealed glowing letter, with a haunted stare, ivory accents, neon cyberpunk future style'
  }
})
