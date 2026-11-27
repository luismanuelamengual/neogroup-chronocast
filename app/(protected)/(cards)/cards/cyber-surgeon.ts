import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cyber-surgeon',
  type: 'ally',
  name: 'Cyber Surgeon',
  text: 'When it enters: it gains +2 attack and +2 health for each Enhanced ally of yours.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'cyborg',
  attack: 3,
  health: 7,
  onEnter(ctx) {
    const count = enhancedAllies(ctx, ctx.owner).length

    buffSelf(ctx, 2 * count, 2 * count)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Cyber Surgeon: a cyborg surgeon with six thin robotic arms holding scalpels and implants, full body, teal accents, neon cyberpunk future style'
  }
})
