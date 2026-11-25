import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'loyal-gorgon',
  type: 'ally',
  name: 'Loyal Gorgon',
  text: 'When it enters: deal 1 light damage to the enemy hero for each Colossus of yours.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  element: 'light',
  resist: ['earth'],
  weak: ['acid'],
  price: 155,
  cost: 2,
  tribe: 'colossus',
  attack: 3,
  health: 6,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'colossus').length)
  },
  ai: { value: 2, tags: ['aggro', 'tribe'] },
  art: {
    subject:
      'Loyal Gorgon: a gorgon with grey stone-like skin and a cracked marble crown, circling warily, scarlet accents, ancient bronze-age empire style'
  }
})
