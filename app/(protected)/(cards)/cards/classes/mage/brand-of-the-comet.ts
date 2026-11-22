import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brand-of-the-comet',
  type: 'attachment',
  name: 'Brand of the Comet',
  text: "Attach to an enemy ally: it can't use its ability and has -1 attack.",
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: -1,
  targets: ['enemyAlly'],
  silences: true,
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Brand of the Comet: a glowing magical brand charm, mage style'
  }
})
