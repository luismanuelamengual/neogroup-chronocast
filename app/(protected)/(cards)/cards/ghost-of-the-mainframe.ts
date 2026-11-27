import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { enhancedAllies, grantKeyword } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ghost-of-the-mainframe',
  type: 'ally',
  name: 'Ghost of the Mainframe',
  text: 'When it enters: a random Enhanced ally of yours gains Stealth.',
  flavor: 'It lives where the code forgot to look.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    const candidates = enhancedAllies(ctx, ctx.owner)

    if (candidates.length > 0) {
      grantKeyword(ctx, candidates[Math.floor(ctx.random() * candidates.length)], 'stealth')
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Ghost of the Mainframe: a plump elderly woman with warm beige skin, ultraviolet hair in thick dreadlocks and heavy golden earrings, dressed in an oversized hoodie with cables spilling out, holding a small caged light, leaping through the air, with a fierce scowl, turquoise accents, neon cyberpunk future style'
  }
})
