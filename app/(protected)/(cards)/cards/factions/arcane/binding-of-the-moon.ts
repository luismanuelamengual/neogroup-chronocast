import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-moon',
  type: 'ability',
  name: 'Binding of the Moon',
  text: 'Stun an enemy ally. Fast.',
  flavor: 'Moonlight is softer than chains, and stronger.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Binding of the Moon: glowing chains coiling tightly around nothing, locking shut, over a desert of red dunes, dramatic backlight, magenta accents, medieval magic order style'
  }
})
