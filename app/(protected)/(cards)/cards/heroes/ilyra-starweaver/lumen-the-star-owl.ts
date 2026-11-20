import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lumen-the-star-owl',
  type: 'ally',
  name: 'Lumen, the Star Owl',
  text: 'On enter: draw a card. At the start of each phase, deal 3 damage to a random enemy ally.',
  flavor: 'Ilyra found her inside a falling star.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  health: 24,
  keywords: ['flying'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 5, tags: ['draw', 'removal'] },
  art: {
    subject: "a glowing owl made of starlight with constellations on its wings, perched on Ilyra's arm"
  }
})
