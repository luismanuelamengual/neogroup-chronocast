import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-crossbow',
  type: 'weapon',
  subtype: 'crossbow',
  name: 'Keen-Eyed Crossbow',
  text: 'When an attack of your hero with it kills an ally: draw a card.',
  flavor: 'It sees the gap in every armor.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 3,
  durability: 2,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          draw(ctx, ctx.owner, 1)
        }
      })
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Keen-Eyed Crossbow: a single crossbow made of white bone and leather wraps, on cracked stone tiles, diagonal dynamic composition, indigo accents, hunter style'
  }
})
