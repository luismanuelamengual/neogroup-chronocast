import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-idol',
  type: 'artifact',
  name: 'Cursed Idol',
  text: 'At the start of each phase: each hero takes 2 shadow damage. (5 uses)',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 5,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2, 'shadow')
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 2, 'shadow')
    spendCharge(ctx)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Cursed Idol: a grinning obsidian idol with ruby eyes on a cracked pedestal, dark tendrils reaching in two directions, dark ritual mood'
  }
})
