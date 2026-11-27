import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'axe-of-the-vanguard',
  type: 'weapon',
  subtype: 'axe',
  name: 'Axe of the Vanguard',
  text: 'When your hero attacks an ally with it: each ally next to that one takes 2 damage.',
  flavor: 'The first to swing, the last to dull.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  attack: 5,
  durability: 3,
  onAttack(ctx, target) {
    for (const ref of slotsNextTo(ctx, target)) {
      damage(ctx, ref, 2)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Axe of the Vanguard: a single axe made of carved obsidian, on a pile of old coins, diagonal dynamic composition, crimson accents, warrior style'
  }
})
