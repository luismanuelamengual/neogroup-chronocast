import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hex-of-dawn',
  type: 'attachment',
  name: 'Hex of Dawn',
  text: 'Attach to an enemy ally: it has -3 attack.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: -3,
  targets: ['enemyAlly'],
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Hex of Dawn: a glowing magical hex charm, time rift wanderer style'
  }
})
