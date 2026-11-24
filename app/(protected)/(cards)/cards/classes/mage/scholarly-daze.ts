import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-daze',
  type: 'ability',
  name: 'Scholarly Daze',
  text: 'Stun an enemy ally. Fast.',
  flavor: 'A lecture so dense it stuns.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Scholarly Daze: spinning stars and swirls circling a dented helmet, in a snowy pass, framed by drifting embers, turquoise accents, mage style'
  }
})
