import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scrap-golem',
  type: 'ally',
  name: 'Scrap Golem',
  text: 'When it enters: destroy the most expensive enemy artifact.',
  flavor: 'It eats machines and grows from their parts.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 540,
  cost: 4,
  attack: 7,
  health: 12,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject: 'a hulking golem made of scrap metal tearing apart a glowing magical device with its hands'
  }
})
