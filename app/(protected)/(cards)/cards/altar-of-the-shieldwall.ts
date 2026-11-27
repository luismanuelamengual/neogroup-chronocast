import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-shieldwall',
  type: 'artifact',
  name: 'Altar of the Shieldwall',
  text: "When an enemy ally's attack hits your hero: that ally takes 3 damage. (3 uses)",
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 3,
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
        damageAlly(ctx, found.unit, 3)
        spendCharge(ctx)
      }
    }

    return amount
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Altar of the Shieldwall: an ancient altar made of polished bronze with engraved spirals, standing in shallow water, dramatic backlight, saffron yellow accents, warrior style'
  }
})
