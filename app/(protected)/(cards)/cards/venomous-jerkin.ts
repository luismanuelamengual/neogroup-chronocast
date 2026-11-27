import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-jerkin',
  type: 'armor',
  subtype: 'suit',
  name: 'Venomous Jerkin',
  text: "When an enemy ally's attack hits your hero: poison that ally (2).",
  flavor: 'Lined with the skins of things that bite.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  armor: 2,
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
        poison(ctx, { player: found.player, slot: found.slot }, 2)
      }
    }

    return amount
  },
  ai: { value: 3 },
  art: {
    subject:
      'Venomous Jerkin: a single jerkin made of white bone and leather wraps, leaning against a ruined wall, diagonal dynamic composition, lime green accents, hunter style'
  }
})
