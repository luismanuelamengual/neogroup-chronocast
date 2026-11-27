import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderhead-of-dawn',
  type: 'ally',
  name: 'Thunderhead of Dawn',
  text: 'When it enters: your hero heals 4 and gains 1 energy.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
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
    healHero(ctx, 4)
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['ramp'] },
  art: {
    subject:
      'Thunderhead of Dawn: an elemental thunderhead with a serpent-like coil made of mossy green and grey stone, pawing the ground, time rift wanderer style'
  }
})
