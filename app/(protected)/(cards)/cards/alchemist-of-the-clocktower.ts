import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'alchemist-of-the-clocktower',
  type: 'ally',
  name: 'Alchemist of the Clocktower',
  text: 'When it enters: deal 1 damage to the enemy hero for each Inventor of yours.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 570,
  cost: 3,
  tribe: 'inventor',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'inventor').length)
  },
  ai: { value: 4, tags: ['aggro', 'tribe'] },
  art: {
    subject:
      'Alchemist of the Clocktower: a willowy middle-aged man with deep brown skin, jet black hair in a sharp bob, mutton chops and a golden nose ring, wearing a leather aviator cap, dressed in a waistcoat with a pocket watch chain, pouring a bubbling flask, with a booming laugh, saffron yellow accents, steampunk steam era style'
  }
})
