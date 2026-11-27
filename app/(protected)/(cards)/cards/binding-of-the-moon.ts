import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-moon',
  type: 'ability',
  subtype: 'spell',
  name: 'Binding of the Moon',
  text: 'Stun every frozen enemy ally. Fast.',
  flavor: 'Moonlight is softer than chains, and stronger.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if ((unit.frozenUntilPhase ?? 0) >= ctx.engine.state.phase) {
        stun(ctx, unit)
      }
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Binding of the Moon: glowing chains coiling tightly around nothing, locking shut, over a desert of red dunes, dramatic backlight, magenta accents, medieval magic order style'
  }
})
