import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-bard',
  type: 'ally',
  name: 'Patient Bard',
  text: 'When it enters: draw the first trap of your deck.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  keywords: ['ranged'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    seek(ctx, ctx.owner, (card) => card.type === 'trap')
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the patient bard, standing guard, hunter style'
  }
})
