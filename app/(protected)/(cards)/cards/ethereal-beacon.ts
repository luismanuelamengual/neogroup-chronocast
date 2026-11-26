import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-beacon',
  type: 'artifact',
  name: 'Ethereal Beacon',
  text: 'At the start of each phase: deal 2 arcane damage to a random enemy ally. (4 uses)',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'arcane',
  price: 300,
  cost: 1,
  charges: 4,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Ethereal Beacon: an ancient beacon made of chrome with neon light strips, circled by glowing violet runes, standing on a hilltop at dusk, framed by drifting embers, teal accents, mage style'
  }
})
