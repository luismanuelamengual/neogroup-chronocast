import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgraths-blast',
  type: 'ability',
  subtype: 'spell',
  name: "Morgrath's Blast",
  text: 'Deal 8 shadow damage to an enemy slot. Then Consume 2; if you do, draw 2 cards.',
  faction: 'void',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1200,
  cost: 4,
  keywords: ['unique'],
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8, 'shadow')

    if (consume(ctx, 2)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Morgrath's Blast: a violent explosion of sickly green soul-fire, wrapped in swirling black smoke, in a misty valley, framed by drifting embers, sickly green accents, dark end-of-time void style"
  }
})
