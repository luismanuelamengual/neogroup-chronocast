import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'piston-golem',
  type: 'ally',
  name: 'Piston Golem',
  text: 'After it takes damage: it gains +2 attack.',
  flavor: 'Every hit winds it up a little more.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  attack: 17,
  health: 42,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a massive golem of pistons and pipes hissing steam, one fist raised to smash'
  }
})
