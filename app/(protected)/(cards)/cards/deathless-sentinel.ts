import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'deathless-sentinel',
  type: 'ally',
  name: 'Deathless Sentinel',
  text: 'When it dies: Consume 3; if you do, it returns to play.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  tribe: 'undead',
  keywords: ['retaliate'],
  attack: 4,
  health: 12,
  onDeath(ctx) {
    if (consume(ctx, 3)) {
      summonCard(ctx, ctx.owner, 'deathless-sentinel')
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Deathless Sentinel: an armored undead knight reassembling from scattered bones with violet fire, full body, violet accents, dark end-of-time void style'
  }
})
