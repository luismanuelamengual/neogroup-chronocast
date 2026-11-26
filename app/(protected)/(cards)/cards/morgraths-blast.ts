import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgraths-blast',
  type: 'ability',
  subtype: 'spell',
  name: "Morgrath's Blast",
  text: 'Deal 10 shadow damage to an enemy slot and draw a card.',
  faction: 'arcane',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1200,
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
      "Morgrath's Blast: a violent explosion of energy, wrapped in swirling black smoke, in a misty valley, framed by drifting embers, violet accents, medieval magic order style"
  }
})
