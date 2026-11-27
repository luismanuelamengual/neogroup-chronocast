import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'twilight-cryomancer',
  type: 'ally',
  name: 'Twilight Cryomancer',
  text: 'The attacks of your allies deal 2 more damage to frozen allies.',
  flavor: 'She freezes the dusk to keep it longer.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'common',
  element: 'ice',
  resist: ['arcane'],
  price: 65,
  cost: 4,
  tribe: 'magus',
  keywords: ['shield'],
  attack: 6,
  health: 8,
  attackBonus(ctx, attacker, target) {
    const unit = unitAt(ctx, target)

    return attacker.slot !== 'hero' && unit && (unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase ? 2 : 0
  },
  ai: { value: 4 },
  art: {
    subject:
      'Twilight Cryomancer: a lanky elderly woman with umber skin, salt-and-pepper hair cropped short and bushy eyebrows, wearing a deep hood, dressed in star-embroidered indigo robes, forming a shard of ice, with a haunted stare, violet accents, medieval magic order style'
  }
})
