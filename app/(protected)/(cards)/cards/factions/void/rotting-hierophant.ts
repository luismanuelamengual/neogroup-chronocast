import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rotting-hierophant',
  type: 'ally',
  name: 'Rotting Hierophant',
  text: 'When it dies: summon a Risen Skeleton.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'cultist',
  keywords: ['poison'],
  attack: 5,
  health: 5,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'risen-skeleton')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'a hooded doomsday cultist, the rotting hierophant, crouching, ready to strike, dark end-of-time void style'
  }
})
