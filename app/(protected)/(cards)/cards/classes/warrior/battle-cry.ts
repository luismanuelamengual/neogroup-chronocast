import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-cry',
  type: 'ability',
  name: 'Battle Cry',
  text: 'Your allies gain +2 attack and +2 health.',
  flavor: 'Louder than the war drums.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 2, 2)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a warrior roaring with sword raised, allies around him glowing with red energy'
  }
})
