import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { mindControl } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'study-of-flame',
  type: 'ability',
  subtype: 'program',
  name: 'Study of Flame',
  text: 'Hack an enemy ally: it attacks another enemy ally, and then it is stunned.',
  flavor: 'Page one: do not touch. Page two: too late.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPlay(ctx) {
    const [controlled, target] = ctx.targets

    if (controlled && target) {
      mindControl(ctx, controlled, target)
    }
  },
  targets: ['enemyAlly', 'enemyAlly'],
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Study of Flame: an open book with glowing pages flipping by themselves, in a ruined temple, diagonal dynamic composition, saffron yellow accents, mage style'
  }
})
