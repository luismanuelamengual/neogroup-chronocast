import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-legion',
  type: 'ability',
  name: 'Binding of the Legion',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'Shields close in. No way out.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Binding of the Legion: glowing chains coiling tightly around nothing, locking shut, in a ruined temple, centered and seen from slightly below, teal accents, ancient bronze-age empire style'
  }
})
