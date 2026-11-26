import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'summons-of-the-wilds',
  type: 'ability',
  name: 'Summons of the Wilds',
  text: 'Summon a Sabertooth Cub.',
  flavor: 'The forest answers its own.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Summons of the Wilds: a glowing summoning circle opening a portal, in a snowy pass, dramatic backlight, turquoise accents, hunter style'
  }
})
