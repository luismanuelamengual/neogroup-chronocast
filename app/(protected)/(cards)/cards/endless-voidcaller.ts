import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-voidcaller',
  type: 'ally',
  name: 'Endless Voidcaller',
  text: 'When another Cultist of yours enters: it gains +1 attack and +1 health.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 450,
  cost: 1,
  tribe: 'cultist',
  attack: 1,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'cultist')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Endless Voidcaller: a plump elderly pale ghoul-like woman with charcoal grey hair in a topknot and an eyepatch, wearing a bone mask, dressed in tattered black robes with sigils, holding a strange relic, bracing for impact, with a haunted stare, magenta accents, dark end-of-time void style'
  }
})
