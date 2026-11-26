import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shackle-of-dawn',
  type: 'ability',
  subtype: 'program',
  name: 'Shackle of Dawn',
  text: 'Stun an enemy ally. Fast.',
  flavor: 'Even the sunrise can take prisoners.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Shackle of Dawn: heavy iron shackles snapping closed, in a misty valley, seen from above, ivory accents, neon cyberpunk future style'
  }
})
