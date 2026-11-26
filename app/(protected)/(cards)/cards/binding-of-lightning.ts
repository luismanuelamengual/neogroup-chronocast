import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-lightning',
  type: 'ability',
  name: 'Binding of Lightning',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'Chains that spark and sting.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 420,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Binding of Lightning: glowing chains coiling tightly around nothing, locking shut, in a dark forest clearing, centered and seen from slightly below, crimson accents, mage style'
  }
})
