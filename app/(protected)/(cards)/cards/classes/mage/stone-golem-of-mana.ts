import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stone-golem-of-mana',
  type: 'ally',
  name: 'Stone Golem of Mana',
  text: 'When it dies: deal 1 earth damage to every enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 50,
  cost: 2,
  tribe: 'elemental',
  keywords: ['shield'],
  attack: 1,
  health: 7,
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'an elemental spirit, the stone golem of mana, charging into battle, mage style'
  }
})
