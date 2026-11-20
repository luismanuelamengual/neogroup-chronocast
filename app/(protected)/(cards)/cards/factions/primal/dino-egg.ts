import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dino-egg',
  type: 'item',
  name: 'Giant Dino Egg',
  text: 'Summon a Dino Hatchling and draw a card.',
  flavor: 'Do not ask who laid it.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'dino-hatchling')
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['summon', 'draw'] },
  art: {
    subject: 'a giant spotted dinosaur egg cracking open with a glowing light coming from inside'
  }
})
