import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'constellation-weave',
  type: 'ability',
  name: 'Constellation Weave',
  text: 'Deal 6 damage to every enemy ally and stun a random enemy ally. Slow.',
  flavor: 'She ties the stars together, and the sky obeys.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['removal', 'control'] },
  art: {
    subject: 'Ilyra weaving glowing constellation threads across the sky that rain down light on enemies'
  }
})
