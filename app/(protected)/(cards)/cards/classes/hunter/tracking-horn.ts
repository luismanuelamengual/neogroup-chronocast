import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-horn',
  type: 'ability',
  name: 'Tracking Horn',
  text: 'Summon a Sabertooth Cub.',
  flavor: 'One blast and the pack knows the way.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Tracking Horn: a great war horn sounding a visible blast of sound, above a calm lake at dusk, framed by drifting embers, amber accents, hunter style'
  }
})
