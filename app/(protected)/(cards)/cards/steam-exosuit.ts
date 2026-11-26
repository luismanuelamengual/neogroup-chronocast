import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'steam-exosuit',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Steam Exosuit',
  text: 'Every damage your hero takes is 1 lower for each artifact of yours (up to 3).',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 400,
  cost: 4,
  durability: 4,
  armor: 1,
  modifyDamage(ctx, target, amount) {
    return target.player === ctx.owner && target.slot === 'hero' ? amount - Math.min(3, artifactCount(ctx)) : amount
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Steam Exosuit: a hulking walking exosuit of riveted brass plates and pistons, pressure gauges on the chest, steam venting from its back, front view, copper and yellow accents, steampunk steam era style'
  }
})
