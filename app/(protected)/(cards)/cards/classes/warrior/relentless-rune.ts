import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'relentless-rune',
  type: 'attachment',
  name: 'Relentless Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  keywords: ['guardian'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Relentless Rune: a glowing magical relentless charm, warrior style'
  }
})
