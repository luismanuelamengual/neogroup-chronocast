import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brass-steam-knight',
  type: 'ally',
  name: 'Brass Steam Knight',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 40,
  cost: 1,
  tribe: 'automaton',
  keywords: ['retaliate'],
  attack: 2,
  health: 3,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['aggro', 'ramp'] },
  art: {
    subject:
      'Brass Steam Knight: a knight built of polished brass with ruby lenses, with antenna arrays, raising a mechanical arm, steampunk steam era style'
  }
})
