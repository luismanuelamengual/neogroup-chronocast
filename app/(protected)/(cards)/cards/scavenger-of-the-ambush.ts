import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-the-ambush',
  type: 'ally',
  name: 'Scavenger of the Ambush',
  text: 'When it attacks: deal 2 damage to the enemy hero.',
  flavor: 'Nothing on the battlefield goes to waste.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  health: 8,
  onAttack(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Scavenger of the Ambush: a petite adult dwarf man with dark ebony skin, blue-black hair in long braids and an eyepatch, wearing a deep hood, dressed in a Renaissance doublet with mismatched armor pieces, carrying a sack bursting with salvaged relics, with grim determination, violet accents, hunter style'
  }
})
