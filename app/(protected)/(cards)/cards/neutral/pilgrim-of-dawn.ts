import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-dawn',
  type: 'ally',
  name: 'Pilgrim of Dawn',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  attack: 3,
  health: 7,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a time-traveling adventurer, the pilgrim of dawn, glaring at the viewer, time rift wanderer style'
  }
})
