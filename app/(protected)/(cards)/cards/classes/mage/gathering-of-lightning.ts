import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gathering-of-lightning',
  type: 'ability',
  name: 'Gathering of Lightning',
  text: 'Summon an Arcane Familiar.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'mythic',
  price: 29000,
  cost: 3,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'arcane-familiar')
  },
  ai: { value: 6, tags: ['summon'] },
  art: {
    subject: 'Gathering of Lightning: a glowing portal with a creature stepping through, mage style'
  }
})
