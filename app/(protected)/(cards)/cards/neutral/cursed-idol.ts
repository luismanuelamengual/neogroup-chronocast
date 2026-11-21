import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-idol',
  type: 'artifact',
  name: 'Cursed Idol',
  text: 'Artifact with 4 uses. At the start of each phase, it deals 3 damage to the enemy hero.',
  flavor: 'It smiles. Nobody knows at whom.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 210,
  cost: 3,
  charges: 4,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
    spendCharge(ctx)
  },
  ai: { value: 3 },
  art: {
    subject: 'a creepy carved stone idol with glowing violet eyes and a wicked smile, dark mist around it'
  }
})
