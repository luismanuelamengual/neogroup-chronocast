import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hunters-snare',
  type: 'trap',
  name: "Hunter's Snare",
  text: 'When an enemy ally is summoned: it becomes your Prey.',
  flavor: 'The jungle marks its own.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 50,
  cost: 1,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    markPrey(ctx, event.unit)
  },
  ai: { value: 1, tags: ['prey'] },
  art: {
    subject:
      "Hunter's Snare: a looped vine snare hidden under ferns, a bone trigger peg, morning mist in a dense jungle, close-up filling the frame, lime green accents, prehistoric jungle era style"
  }
})
