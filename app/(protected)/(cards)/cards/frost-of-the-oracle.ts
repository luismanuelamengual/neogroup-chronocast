import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { slotsNextTo, stunAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-oracle',
  type: 'ability',
  subtype: 'tactic',
  name: 'Frost of the Oracle',
  text: 'Stun an enemy ally and a random ally next to it. Fast.',
  flavor: 'She saw the winter coming and sent it ahead.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const target = ctx.targets[0]
    const next = slotsNextTo(ctx, target).filter((ref) => unitAt(ctx, ref))

    stunAt(ctx, target)

    if (next.length > 0) {
      stunAt(ctx, next[Math.floor(ctx.random() * next.length)])
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Frost of the Oracle: a spiral of razor-sharp frost shards, in a ruined temple, dramatic backlight, turquoise accents, ancient bronze-age empire style'
  }
})
