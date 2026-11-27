import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brother-ossian',
  type: 'ally',
  reward: true,
  name: 'Brother Ossian',
  text: 'At the end of each phase: deal 2 shadow damage to a random enemy ally and your hero heals 2.',
  flavor: 'He kept praying after he died. Out of habit.',
  faction: 'void',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'legendary',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  cost: 4,
  tribe: 'undead',
  keywords: ['retaliate', 'unique'],
  attack: 3,
  health: 9,
  onPhaseEnd(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
    healHero(ctx, 2)
  },
  ai: { value: 5, tags: ['heal', 'removal'] },
  art: {
    subject:
      'a skeletal monk in a hooded brown robe with green ghost-fire in his eyes, holding a rosary of bones in a candlelit ruined abbey'
  }
})
