import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scrap-automaton',
  type: 'ally',
  name: 'Scrap Automaton',
  text: 'Scrap: when an artifact of yours leaves play, it gains +2 attack and +2 health.',
  flavor: 'Built from what the others threw away.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'automaton',
  attack: 2,
  health: 3,
  onArtifactLeave(ctx) {
    buffSelf(ctx, 2, 2)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Scrap Automaton: a rickety automaton patched together from mismatched brass plates, pipes and gears, one glowing eye, standing in a junkyard, full body, copper and yellow accents, steampunk steam era style'
  }
})
