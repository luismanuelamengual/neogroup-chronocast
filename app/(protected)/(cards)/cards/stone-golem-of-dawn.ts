import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stone-golem-of-dawn',
  type: 'ally',
  name: 'Stone Golem of Dawn',
  text: 'When it enters: your armor gains +2 durability.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
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
    repairArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject:
      'Stone Golem of Dawn: an elemental golem with a hulking humanoid shape made of silver wind streams, charging head-on, time rift wanderer style'
  }
})
