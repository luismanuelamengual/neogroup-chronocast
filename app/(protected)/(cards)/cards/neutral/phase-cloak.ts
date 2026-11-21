import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phase-cloak',
  type: 'attachment',
  name: 'Phase Cloak',
  text: 'Attach to an ally of yours: it gains stealth and agile.',
  flavor: 'Now you see it. Mostly you do not.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 150,
  cost: 1,
  targets: ['friendlyAlly'],
  keywords: ['stealth', 'agile'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a translucent shimmering cloak fading in and out of reality around a hooded figure'
  }
})
