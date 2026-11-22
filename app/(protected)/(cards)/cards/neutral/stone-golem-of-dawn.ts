import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stone-golem-of-dawn',
  type: 'ally',
  name: 'Stone Golem of Dawn',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 55,
  cost: 3,
  tribe: 'elemental',
  attack: 5,
  health: 6,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject: 'an elemental spirit, the stone golem of dawn, lunging forward, time rift wanderer style'
  }
})
