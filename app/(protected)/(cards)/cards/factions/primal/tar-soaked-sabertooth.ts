import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-soaked-sabertooth',
  type: 'ally',
  name: 'Tar-Soaked Sabertooth',
  text: 'When it attacks: your hero heals 3.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  element: 'acid',
  price: 170,
  cost: 3,
  tribe: 'beast',
  keywords: ['guardian'],
  attack: 3,
  health: 10,
  onAttack(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Tar-Soaked Sabertooth: a sabertooth with sandy fur with dark mane and a hump of fat, sniffing the air, ivory accents, prehistoric jungle era style'
  }
})
