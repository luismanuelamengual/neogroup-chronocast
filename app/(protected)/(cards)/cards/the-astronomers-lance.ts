import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-astronomers-lance',
  type: 'ability',
  name: "The Astronomer's Lance",
  text: 'Deal 10 arcane damage to an enemy slot and draw a card.',
  faction: 'arcane',
  restriction: { heroes: ['hollow-astronomer'] },
  rarity: 'epic',
  element: 'arcane',
  price: 1880,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      "The Astronomer's Lance: a long lance of pure energy piercing the air, circled by glowing violet runes, in a snowy pass, centered and seen from slightly below, rose pink accents, medieval magic order style"
  }
})
