import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stone-golem-of-lightning',
  type: 'ally',
  name: 'Stone Golem of Lightning',
  text: 'When it enters: deal 7 earth damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'rare',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 600,
  cost: 6,
  tribe: 'elemental',
  keywords: ['retaliate'],
  attack: 7,
  health: 14,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 7)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject:
      'Stone Golem of Lightning: an elemental golem with a flickering winged shape made of deep teal water, sniffing the air, mage style'
  }
})
