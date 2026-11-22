import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damageRandomAlly, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gleaming-wyvern',
  type: 'ally',
  name: 'Gleaming Wyvern',
  text: 'When it enters: it gains +1 attack and +1 health for each other Drake of yours. When it dies: deal 4 arcane damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'exotic',
  element: 'arcane',
  resist: ['fire'],
  weak: ['ice'],
  price: 11600,
  cost: 3,
  tribe: 'drake',
  keywords: ['ranged', 'shield', 'unique'],
  attack: 5,
  health: 6,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'drake', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5, tags: ['buff', 'removal', 'tribe'] },
  art: {
    subject: 'a dragon-kin creature, the gleaming wyvern, charging into battle, medieval magic order style'
  }
})
