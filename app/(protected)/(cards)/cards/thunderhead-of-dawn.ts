import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderhead-of-dawn',
  type: 'ally',
  name: 'Thunderhead of Dawn',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 200,
  cost: 5,
  tribe: 'elemental',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['ramp'] },
  art: {
    subject:
      'Thunderhead of Dawn: an elemental thunderhead with a serpent-like coil made of mossy green and grey stone, pawing the ground, time rift wanderer style'
  }
})
