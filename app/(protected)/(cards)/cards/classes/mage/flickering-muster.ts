import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-muster',
  type: 'ability',
  name: 'Flickering Muster',
  text: 'Summon an Arcane Familiar.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 2, tags: ['summon'] },
  art: {
    subject: 'Flickering Muster: a glowing portal with a creature stepping through, mage style'
  }
})
