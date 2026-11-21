import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'patchwork-golem',
  type: 'ally',
  name: 'Patchwork Golem',
  text: '',
  flavor: 'Built from the scraps of five different centuries.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 16,
  health: 16,
  ai: { value: 4 },
  art: {
    subject: 'a big golem made of stone, wood, bronze and rusty metal pieces stitched together with glowing seams'
  }
})
