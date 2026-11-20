import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mother-of-beasts',
  type: 'ally',
  name: 'Mother of Beasts',
  text: 'On enter: summon a Raptor Pack and summon a Thornback Boar.',
  flavor: 'Every beast in the jungle was born from her song.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'legendary',
  price: 5500,
  cost: 6,
  attack: 16,
  health: 44,
  keywords: ['unique'],
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'raptor-pack')
    summonCard(ctx, ctx.owner, 'thornback-boar')
  },
  ai: { value: 8, tags: ['summon'] },
  art: {
    subject:
      'a mystical tribal woman with antlers and animal pelts singing, wild beasts emerging from the jungle around her'
  }
})
