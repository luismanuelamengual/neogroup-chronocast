import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'camouflaged-brontosaur',
  type: 'ally',
  name: 'Camouflaged Brontosaur',
  text: 'When it attacks an ally: deal 2 damage to the allies next to it.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 220,
  cost: 6,
  tribe: 'saurian',
  keywords: ['stealth'],
  attack: 7,
  health: 12,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      for (const ref of slotsNextTo(ctx, target)) {
        damage(ctx, ref, 2)
      }
    }
  },
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject:
      'Camouflaged Brontosaur: a brontosaur with a teal hide with a pearly belly and glowing amber eyes, rearing up, scarlet accents, hunter style'
  }
})
