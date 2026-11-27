import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isPrey, repairWeapon, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'longbow-of-the-hawk',
  type: 'weapon',
  subtype: 'bow',
  name: 'Longbow of the Hawk',
  text: 'When your hero attacks a Prey with it: it gains +1 durability.',
  flavor: 'It sees farther than its archer.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  element: 'wind',
  price: 140,
  cost: 2,
  keywords: ['poison'],
  attack: 2,
  durability: 2,
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)

    if (unit && isPrey(ctx, unit)) {
      repairWeapon(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Longbow of the Hawk: a single longbow made of gilded marble, swept by a spiraling gust with leaves, on a workbench with tools, dramatic backlight, gold accents, hunter style'
  }
})
