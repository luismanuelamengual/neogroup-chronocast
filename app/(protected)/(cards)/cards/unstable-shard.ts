import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unstable-shard',
  type: 'artifact',
  name: 'Unstable Shard',
  text: 'The attacks of your allies deal 3 more damage. When an ally of yours takes damage: it dies.',
  flavor: 'Infinite power, finite patience.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  attackBonus(ctx, attacker) {
    return attacker.player === ctx.owner && attacker.slot !== 'hero' ? 3 : 0
  },
  modifyDamage(ctx, target, amount) {
    // Any hit at all is fatal.
    return amount > 0 && target.slot !== 'hero' && isAllyOf(ctx, target, ctx.owner) ? amount + 999 : amount
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Unstable Shard: a cracked crystal shard caged in brass wires, crackling with unstable orange energy, on a workbench, close-up filling the frame, orange accents, steampunk steam era style'
  }
})
