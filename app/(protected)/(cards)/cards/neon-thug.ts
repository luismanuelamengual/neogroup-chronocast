import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, isEnhanced, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'neon-thug',
  type: 'ally',
  name: 'Neon Thug',
  text: 'At the start of each phase: if it is Enhanced, deal 2 damage to a random enemy ally.',
  flavor: 'Rent is due. So are your teeth.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  keywords: ['retaliate'],
  attack: 4,
  health: 10,
  onPhaseStart(ctx) {
    const unit = self(ctx)

    if (unit && isEnhanced(unit)) {
      damageRandomAlly(ctx, ctx.opponent, 2)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Neon Thug: a petite middle-aged android man with a smooth metal scalp, a forked beard and a tattooed neck, dressed in a sharp black suit with neon tie, cracking brass knuckles, with a booming laugh, scarlet accents, neon cyberpunk future style'
  }
})
