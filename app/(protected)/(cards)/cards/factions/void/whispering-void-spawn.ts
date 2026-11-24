import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, summonCard, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'whispering-void-spawn',
  type: 'ally',
  name: 'Whispering Void Spawn',
  text: 'When it enters: deal 1 shadow damage to the enemy hero for each Horror of yours. When it dies: summon a Risen Skeleton.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'exotic',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 10800,
  cost: 2,
  tribe: 'horror',
  keywords: ['unique'],
  attack: 2,
  health: 9,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'horror').length)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'risen-skeleton')
  },
  ai: { value: 4, tags: ['aggro', 'summon', 'tribe'] },
  art: {
    subject:
      'Whispering Void Spawn: a spawn with pallid flesh with green veins and floating rings of teeth, baring its teeth, teal accents, dark end-of-time void style'
  }
})
