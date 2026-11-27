import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-mantle',
  type: 'armor',
  subtype: 'robe',
  name: 'Flickering Mantle',
  text: "When an enemy ally's attack hits your hero: freeze that ally.",
  flavor: 'Now you see it, now you miss.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
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
        freezeAlly(ctx, found.unit)
      }
    }

    return amount
  },
  ai: { value: 3 },
  art: {
    subject:
      'Flickering Mantle: a single mantle made of pale ash wood wrapped in red cloth, half buried in snow, diagonal dynamic composition, scarlet accents, mage style'
  }
})
