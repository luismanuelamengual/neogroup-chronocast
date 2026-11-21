import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mother-of-shadows',
  type: 'ally',
  name: 'Mother of Shadows',
  text: 'When it dies: summon a Void Spawn and summon a Void Spawn. At the start of each phase, if your discard pile has 8 or more cards, summon a Void Spawn.',
  flavor: 'All darkness comes from somewhere. It comes from her.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 14,
  health: 17,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'void-spawn')
    summonCard(ctx, ctx.owner, 'void-spawn')
  },
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 8) {
      summonCard(ctx, ctx.owner, 'void-spawn')
    }
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject: 'a giant shadowy mother figure with countless small void creatures crawling from her cloak'
  }
})
