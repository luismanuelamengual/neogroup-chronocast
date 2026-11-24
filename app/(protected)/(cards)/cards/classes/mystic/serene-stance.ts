import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-stance',
  type: 'ability',
  name: 'Serene Stance',
  text: 'Your hero gains 6 armor. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject:
      'Serene Stance: a round shield and crossed spear planted firmly on stone, in a ruined temple, bursting toward the viewer, turquoise accents, mystic healer style'
  }
})
