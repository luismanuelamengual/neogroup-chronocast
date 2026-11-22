import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pixie-of-spirits',
  type: 'ally',
  name: 'Pixie of Spirits',
  text: 'When it enters: deal 1 light damage to the enemy hero for each Fae of yours.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  element: 'light',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 140,
  cost: 1,
  tribe: 'fae',
  keywords: ['shield'],
  attack: 2,
  health: 3,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'fae').length)
  },
  ai: { value: 1, tags: ['aggro', 'tribe'] },
  art: {
    subject: 'a fairy-tale fae creature, the pixie of spirits, lunging forward, mystic healer style'
  }
})
