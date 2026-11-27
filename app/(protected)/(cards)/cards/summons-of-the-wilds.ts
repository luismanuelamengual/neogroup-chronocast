import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'summons-of-the-wilds',
  type: 'ability',
  subtype: 'instinct',
  name: 'Summons of the Wilds',
  text: 'Summon a Sabertooth Cub. A random enemy ally becomes your Prey.',
  flavor: 'The forest answers its own.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')

    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Summons of the Wilds: a glowing summoning circle opening a portal, in a snowy pass, dramatic backlight, turquoise accents, hunter style'
  }
})
