import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-ruin',
  type: 'ability',
  subtype: 'program',
  name: 'Frost of Ruin',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'The cold that comes after the end.',
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
      'Frost of Ruin: a spiral of razor-sharp frost shards, in a snowy pass, close-up filling the frame, emerald accents, mage style'
  }
})
