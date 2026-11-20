import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-staff',
  type: 'weapon',
  name: 'Frost Staff',
  text: 'On play: stun a random enemy ally.',
  flavor: 'Hold it with gloves.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  durability: 3,
  keywords: ['ranged'],
  onPlay(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject: 'a pale blue staff crowned with jagged ice crystals, frost spreading on the ground'
  }
})
