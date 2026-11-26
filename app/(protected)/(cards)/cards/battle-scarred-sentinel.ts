import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-sentinel',
  type: 'ally',
  name: 'Battle-Scarred Sentinel',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  resist: ['earth'],
  weak: ['acid'],
  price: 480,
  cost: 4,
  tribe: 'colossus',
  keywords: ['guardian', 'retaliate'],
  attack: 4,
  health: 12,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Battle-Scarred Sentinel: a sentinel with grey stone-like skin and gilded armor plates, circling warily, cobalt blue accents, warrior style'
  }
})
