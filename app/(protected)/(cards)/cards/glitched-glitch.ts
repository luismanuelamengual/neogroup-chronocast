import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glitched-glitch',
  type: 'ally',
  name: 'Glitched Glitch',
  text: 'When it attacks: a random Enhanced ally of yours gains +1 attack and +1 health.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'common',
  element: 'lightning',
  price: 65,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 3,
  health: 10,
  onAttack(ctx) {
    const candidates = enhancedAllies(ctx, ctx.owner)

    if (candidates.length > 0) {
      buff(ctx, candidates[Math.floor(ctx.random() * candidates.length)], 1, 1)
    }
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Glitched Glitch: a hunched young android man with a smooth metal scalp, a full beard and bushy eyebrows, wearing a glowing hood, dressed in a sleek bodysuit traced with light lines, clutching a rolled scroll, striding forward, with a confident smirk, saffron yellow accents, neon cyberpunk future style'
  }
})
