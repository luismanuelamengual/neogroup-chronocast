import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flesh-weaver',
  type: 'ally',
  name: 'Flesh Weaver',
  text: 'When another ally of yours enters, it gains +4 health. When it dies: summon a Void Spawn.',
  flavor: 'She stitches the fallen back together. Not always correctly.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 12,
  health: 26,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 4)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'void-spawn')
  },
  ai: { value: 4, tags: ['buff', 'summon'] },
  art: {
    subject: 'a creepy seamstress with many arms sewing together a creature made of shadows and bones'
  }
})
