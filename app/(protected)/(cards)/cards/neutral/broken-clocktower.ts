import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'broken-clocktower',
  type: 'artifact',
  name: 'Broken Clocktower',
  text: 'Artifact. Your allies enter with +6 health.',
  flavor: 'It stopped at the right time.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 6)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a tall ruined clocktower with frozen hands and vines, sheltering soldiers at its base'
  }
})
