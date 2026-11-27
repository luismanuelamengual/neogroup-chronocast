import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bracers-of-the-ambush',
  type: 'armor',
  subtype: 'plate',
  name: 'Bracers of the Ambush',
  text: "When an enemy ally's attack hits your hero: that ally loses 2 attack.",
  flavor: 'Quiet on the wrist, loud on the hunt.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  armor: 3,
  durability: 4,
  modifyDamage(ctx, target, amount, source) {
    if (
      amount > 0 &&
      source?.attack &&
      source.attackerUid != null &&
      source.player === ctx.opponent &&
      target.player === ctx.owner &&
      target.slot === 'hero'
    ) {
      const found = ctx.engine.findUnit(source.attackerUid)

      if (found) {
        buff(ctx, found.unit, -Math.min(2, found.unit.attack), 0)
      }
    }

    return amount
  },
  ai: { value: 4 },
  art: {
    subject:
      'Bracers of the Ambush: a single bracers made of rough stone and sinew, in a beam of light from above, dramatic backlight, teal accents, hunter style'
  }
})
