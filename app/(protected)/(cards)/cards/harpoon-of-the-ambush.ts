import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disarmAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'harpoon-of-the-ambush',
  type: 'weapon',
  subtype: 'harpoon',
  name: 'Harpoon of the Ambush',
  text: "When your hero attacks an ally with it: that ally can't attack next phase.",
  flavor: 'Thrown from the reeds, felt in the bones.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  keywords: ['ranged'],
  attack: 4,
  durability: 3,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      disarmAt(ctx, target, 1)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Harpoon of the Ambush: a single harpoon made of crystal and silver filigree, leaning against a ruined wall, centered and seen from slightly below, magenta accents, hunter style'
  }
})
