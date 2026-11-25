import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-oracle',
  type: 'ability',
  name: 'Frost of the Oracle',
  text: 'Stun an enemy ally for two phases. Fast.',
  flavor: 'She saw the winter coming and sent it ahead.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Frost of the Oracle: a spiral of razor-sharp frost shards, in a ruined temple, dramatic backlight, turquoise accents, ancient bronze-age empire style'
  }
})
