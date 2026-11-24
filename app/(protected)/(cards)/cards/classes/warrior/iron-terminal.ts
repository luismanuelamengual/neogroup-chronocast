import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-terminal',
  type: 'artifact',
  name: 'Iron Terminal',
  text: 'At the start of each phase: your hero heals 3. (4 uses)',
  flavor: 'Old hardware, still dangerous.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  charges: 4,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Iron Terminal: an ancient terminal made of copper with green patina, standing on a floating rock, framed by drifting embers, turquoise accents, warrior style'
  }
})
