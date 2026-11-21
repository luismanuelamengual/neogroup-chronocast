import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ash-drake',
  type: 'ally',
  boss: true,
  name: 'Ash Drake',
  text: '',
  flavor: 'Her children are smaller. Only a little.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kazhul-mother-of-ash' },
  rarity: 'epic',
  cost: 5,
  attack: 20,
  health: 15,
  keywords: ['flying'],
  ai: { value: 6 },
  art: {
    subject: 'a smaller black dragon with glowing lava veins flying through volcanic smoke'
  }
})
