import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shackle-of-the-pack',
  type: 'ability',
  subtype: 'program',
  name: 'Shackle of the Pack',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'The pack never lets go.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Shackle of the Pack: heavy iron shackles snapping closed, in a snowy pass, swirling around the center, lime green accents, hunter style'
  }
})
