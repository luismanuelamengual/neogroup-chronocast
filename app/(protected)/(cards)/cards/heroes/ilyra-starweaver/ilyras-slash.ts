import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ilyras-slash',
  type: 'ability',
  name: "Ilyra's Slash",
  text: 'Deal 10 arcane damage to an enemy slot and draw a card.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
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
      "Ilyra's Slash: a glowing crescent slash cutting through the air, circled by glowing violet runes, in a dark forest clearing, close-up filling the frame, emerald accents, medieval magic order style"
  }
})
