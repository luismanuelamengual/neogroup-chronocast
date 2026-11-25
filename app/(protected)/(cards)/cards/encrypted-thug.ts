import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-thug',
  type: 'ally',
  name: 'Encrypted Thug',
  text: 'When another Enforcer of yours enters: your hero heals 2.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 450,
  cost: 1,
  tribe: 'enforcer',
  keywords: ['ranged'],
  attack: 3,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'enforcer')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 2, tags: ['aggro', 'heal'] },
  art: {
    subject:
      'Encrypted Thug: an athletic young android woman with a smooth metal scalp and war paint stripes, wearing a tinted visor, dressed in a samurai-styled carbon armor, cracking brass knuckles, with wide-eyed wonder, rose pink accents, neon cyberpunk future style'
  }
})
