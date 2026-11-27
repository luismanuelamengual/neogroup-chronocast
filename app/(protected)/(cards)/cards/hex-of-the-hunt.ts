import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-the-hunt',
  type: 'ability',
  subtype: 'spell',
  name: 'Hex of the Hunt',
  text: 'Deal 4 ice damage to every frozen enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if ((unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase) {
        damageAlly(ctx, unit, 4, 'ice')
      }
    }
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Hex of the Hunt: a glowing hex sigil burning in the air, circled by glowing violet runes, in a snowy pass, swirling around the center, gold accents, hunter style'
  }
})
