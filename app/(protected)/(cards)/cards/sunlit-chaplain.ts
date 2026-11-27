import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sunlit-chaplain',
  type: 'ally',
  name: 'Sunlit Chaplain',
  text: 'At the start of each phase: the most damaged ally of yours heals 4.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'oracle',
  attack: 3,
  health: 7,
  onPhaseStart(ctx) {
    const hurt = alliesOf(ctx, ctx.owner).sort((a, b) => b.maxHealth - b.health - (a.maxHealth - a.health))[0]
    const ref = hurt ? slotOf(ctx, hurt) : null

    if (ref) {
      heal(ctx, ref, 4)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Sunlit Chaplain: a gentle chaplain with a sun-disc pendant laying glowing hands on a bandaged soldier inside a field tent, mystic healer style'
  }
})
