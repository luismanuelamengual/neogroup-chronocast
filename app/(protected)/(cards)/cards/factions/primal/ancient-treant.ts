import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ancient-treant',
  type: 'ally',
  name: 'Ancient Treant',
  text: 'At the start of each phase, it gains +2 attack and +4 health and your hero heals 4.',
  flavor: 'It was a seed when the world was young.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 2100,
  cost: 7,
  attack: 20,
  health: 64,
  onPhaseStart(ctx) {
    buffSelf(ctx, 2, 4)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 8, tags: ['buff', 'heal'] },
  art: {
    subject: 'a gigantic walking tree with a mossy face and roots like legs towering over a prehistoric jungle'
  }
})
