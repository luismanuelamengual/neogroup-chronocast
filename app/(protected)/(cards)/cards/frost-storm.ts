import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, damageAllAllies, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-storm',
  type: 'ability',
  subtype: 'spell',
  name: 'Frost Storm',
  text: 'Deal 2 ice damage to every enemy ally and freeze them.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  element: 'ice',
  price: 420,
  cost: 4,
  onPlay(ctx) {
    const refs = allyRefs(ctx, ctx.opponent)

    damageAllAllies(ctx, ctx.opponent, 2)
    // After the damage: frozen first, the ice would deal it double.
    ctx.engine.afterDamage(() => refs.forEach((ref) => freeze(ctx, ref)))
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Frost Storm: a howling blizzard of ice shards sweeping across a battlefield, frozen warriors, a mage silhouette at the center, wide shot, cobalt blue accents, medieval magic order style'
  }
})
