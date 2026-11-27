import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disarmAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-ruin',
  type: 'ability',
  subtype: 'program',
  name: 'Frost of Ruin',
  text: "An enemy ally can't attack for the next 3 phases. Fast.",
  flavor: 'The cold that comes after the end.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    disarmAt(ctx, ctx.targets[0], 3)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Frost of Ruin: a spiral of razor-sharp frost shards, in a snowy pass, close-up filling the frame, emerald accents, mage style'
  }
})
