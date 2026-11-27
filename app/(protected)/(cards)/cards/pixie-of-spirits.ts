import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pixie-of-spirits',
  type: 'ally',
  name: 'Pixie of Spirits',
  text: 'When it enters: deal 1 light damage to the enemy hero for each Fae of yours.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'light',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 120,
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
    subject:
      'Pixie of Spirits: a pixie with bark-brown skin with leafy hair and antlers with blossoms, leaping forward, tangerine accents, mystic healer style'
  }
})
