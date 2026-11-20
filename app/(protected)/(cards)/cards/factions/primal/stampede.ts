import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stampede',
  type: 'ability',
  name: 'Stampede',
  text: 'Deal 6 damage to every enemy ally and your allies gain +2 attack. Slow.',
  flavor: 'Do not stand in the valley. Ever.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 60,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    buffAllies(ctx, ctx.owner, 2, 0)
  },
  ai: { value: 4, tags: ['removal', 'buff'] },
  art: {
    subject: 'a massive stampede of dinosaurs and mammoths thundering across a dusty valley'
  }
})
