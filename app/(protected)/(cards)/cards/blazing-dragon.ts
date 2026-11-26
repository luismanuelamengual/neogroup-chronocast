import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-dragon',
  type: 'ally',
  name: 'Blazing Dragon',
  text: 'When it enters: deal 1 fire damage to the enemy hero for each Drake of yours. When it dies: deal 1 fire damage to every enemy ally.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'legendary',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 2160,
  cost: 3,
  tribe: 'drake',
  keywords: ['flying', 'unique'],
  attack: 5,
  health: 7,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'drake').length)
  },
  onDeath(ctx) {
    damageAllAllies(ctx, ctx.opponent, 1)
  },
  ai: { value: 5, tags: ['aggro', 'removal', 'tribe'] },
  art: {
    subject:
      'Blazing Dragon: a dragon with sapphire scales and a petrifying glare, rearing up, teal accents, mage style'
  }
})
