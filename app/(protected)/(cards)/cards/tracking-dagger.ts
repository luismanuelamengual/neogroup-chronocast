import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-dagger',
  type: 'weapon',
  subtype: 'dagger',
  name: 'Tracking Dagger',
  text: 'When your hero attacks an ally with it: poison that ally (3).',
  flavor: 'It points toward its last victim.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  attack: 4,
  durability: 4,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      poison(ctx, target, 3)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Tracking Dagger: a single dagger made of rough stone and sinew, in a beam of light from above, seen from above, emerald accents, hunter style'
  }
})
