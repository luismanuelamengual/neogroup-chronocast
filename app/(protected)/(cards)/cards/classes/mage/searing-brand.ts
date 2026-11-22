import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'searing-brand',
  type: 'ability',
  name: 'Searing Brand',
  text: 'Set an enemy slot on fire: it loses 3 health at the start of each of the next 3 phases.',
  flavor: 'The mark fades. The pain, not so soon.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 55,
  cost: 1,
  targets: ['enemySlot'],
  onPlay(ctx) {
    burn(ctx, ctx.targets[0], 3, 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a glowing orange fire rune burning onto the armor of a warrior, flames licking around it'
  }
})
