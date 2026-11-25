import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spider-engine-of-the-foundry',
  type: 'ally',
  name: 'Spider Engine of the Foundry',
  text: 'When it enters: deal 1 damage to the enemy hero for each Automaton of yours.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  resist: ['acid'],
  weak: ['lightning'],
  price: 190,
  cost: 4,
  tribe: 'automaton',
  keywords: ['guardian', 'retaliate'],
  attack: 4,
  health: 11,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'automaton').length)
  },
  ai: { value: 4, tags: ['aggro', 'tribe'] },
  art: {
    subject:
      'Spider Engine of the Foundry: an engine built of chrome with cyan light strips, with segmented spider legs, skidding into position, steampunk steam era style'
  }
})
