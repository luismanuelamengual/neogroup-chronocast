import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-missiles',
  type: 'ability',
  name: 'Arcane Missiles',
  text: 'Deal 6 damage to a random enemy ally. Fast.',
  flavor: 'Three little lights, one big problem.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'three glowing violet missiles streaking through the air toward a target'
  }
})
