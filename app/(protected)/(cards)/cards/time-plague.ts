import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainChronosCapacity } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'time-plague',
  type: 'ability',
  subtype: 'ritual',
  name: 'Time Plague',
  text: 'The rival loses 2 Chronos capacity (it keeps at least 2), and you lose 1.',
  flavor: 'Time rots for everyone. Some more than others.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 4,
  onPlay(ctx) {
    const rival = ctx.engine.player(ctx.opponent)

    drainChronosCapacity(ctx, ctx.opponent, Math.min(2, Math.max(0, rival.chronosCapacity - 2)))
    drainChronosCapacity(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['control'] },
  art: {
    subject:
      'Time Plague: a cracked hourglass oozing black sand and rot, flies circling it, on a ruined altar, close-up filling the frame, sickly yellow accents, dark end-of-time void style'
  }
})
