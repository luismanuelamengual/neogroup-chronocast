import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gag-of-silence',
  type: 'attachment',
  name: 'Gag of Silence',
  text: 'Attach to an enemy ally: it cannot use its ability.',
  flavor: 'No chants, no orders, no spells.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 1,
  targets: ['enemyAlly'],
  silences: true,
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a mage with a glowing rune gag over his mouth, sparks of a failed spell fizzling from his hands'
  }
})
