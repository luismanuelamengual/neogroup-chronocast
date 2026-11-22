import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-the-wanderer',
  type: 'ally',
  name: 'Mercenary of the Wanderer',
  text: 'When it enters: your hero gains 5 armor. At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  tribe: 'drifter',
  keywords: ['guardian', 'agile'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 5)
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 4, tags: ['defense', 'heal'] },
  art: {
    subject: 'a time-traveling wanderer, the mercenary of the wanderer, lunging forward, time rift wanderer style'
  }
})
