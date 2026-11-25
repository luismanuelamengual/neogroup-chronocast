import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tempest-of-the-arcanum',
  type: 'ability',
  name: 'Tempest of the Arcanum',
  text: 'Deal 6 wind damage to every enemy ally. Slow.',
  flavor: 'Spellbooks fly open when it blows.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'wind',
  price: 690,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Tempest of the Arcanum: a towering storm of wind and lightning, swept by a spiraling gust with leaves, over rooftops at night, framed by drifting embers, violet accents, mage style'
  }
})
