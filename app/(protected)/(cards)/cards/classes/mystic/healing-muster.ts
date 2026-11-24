import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-muster',
  type: 'ability',
  name: 'Healing Muster',
  text: 'Summon a Guardian Spirit.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'guardian-spirit')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Healing Muster: a row of empty helmets and spears lit by dawn light, over a desert of red dunes, seen from above, turquoise accents, mystic healer style'
  }
})
