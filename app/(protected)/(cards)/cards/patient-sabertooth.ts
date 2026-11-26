import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-sabertooth',
  type: 'ally',
  name: 'Patient Sabertooth',
  text: 'When it enters: summon a Sabertooth Cub. When it dies: deal 8 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: {},
  rarity: 'legendary',
  price: 2400,
  cost: 7,
  tribe: 'beast',
  keywords: ['stealth', 'ranged', 'unique'],
  attack: 7,
  health: 9,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 8)
  },
  ai: { value: 9, tags: ['removal', 'summon'] },
  art: {
    subject:
      'Patient Sabertooth: a sabertooth with shaggy russet fur and a bone collar, baring its teeth, crimson accents, hunter style'
  }
})
