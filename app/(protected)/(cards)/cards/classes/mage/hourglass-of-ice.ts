import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-of-ice',
  type: 'ability',
  name: 'Hourglass of Ice',
  text: 'You gain 4 Chronos this phase. Instant.',
  flavor: 'Time freezes, one grain at a time.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Hourglass of Ice: a giant ornate hourglass with glowing falling sand, in a ruined temple, dramatic backlight, gold accents, mage style'
  }
})
