import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-call',
  type: 'ability',
  name: 'Nocturnal Call',
  text: 'Summon a Sabertooth Cub.',
  flavor: 'The night has ears, and it listens.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject:
      'Nocturnal Call: a carved bone whistle glowing with a call of light, over a stormy battlefield, dramatic backlight, crimson accents, hunter style'
  }
})
