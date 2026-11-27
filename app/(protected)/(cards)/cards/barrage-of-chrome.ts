import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-chrome',
  type: 'ability',
  subtype: 'program',
  name: 'Barrage of Chrome',
  text: 'Deal 3 lightning damage to an enemy slot for each Enhanced ally of yours.',
  flavor: 'Bullets cost money. Chrome costs more.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  element: 'lightning',
  price: 55,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 3 * enhancedAllies(ctx, ctx.owner).length, 'lightning')
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Barrage of Chrome: a dense volley of projectiles raining down, crackling with forked lightning, in a sunlit meadow, diagonal dynamic composition, rose pink accents, neon cyberpunk future style'
  }
})
