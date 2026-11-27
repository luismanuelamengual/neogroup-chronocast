import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'counterstrike-mesh',
  type: 'armor',
  subtype: 'suit',
  name: 'Counterstrike Mesh',
  text: "When an enemy ally's attack hits your hero: that ally is destroyed.",
  flavor: 'Touch me and find out.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  armor: 1,
  durability: 4,
  modifyDamage(ctx, target, amount, source) {
    if (
      amount > 0 &&
      source?.attack &&
      source.attackerUid != null &&
      source.player === ctx.opponent &&
      target.player === ctx.owner &&
      target.slot === 'hero' &&
      ctx.engine.findUnit(source.attackerUid)
    ) {
      ctx.engine.destroy(source.attackerUid)
    }

    return amount
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Counterstrike Mesh: a black bodysuit of fine metal mesh crackling with electric arcs, on a mannequin, close-up filling the frame, electric yellow accents, neon cyberpunk future style'
  }
})
