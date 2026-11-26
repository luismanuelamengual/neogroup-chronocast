import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fixer-of-the-undercity',
  type: 'ally',
  name: 'Fixer of the Undercity',
  text: 'When it dies: your Enforcers gain +1 attack and +1 health. When it enters: draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'exotic',
  price: 3080,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['unique'],
  attack: 4,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 1, 1)
  },
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['aggro', 'buff', 'draw', 'tribe'] },
  art: {
    subject:
      'Fixer of the Undercity: a broad-shouldered middle-aged man with deep brown skin, acid green hair in long braids and a golden nose ring, wearing a tinted visor, dressed in a hooded street jacket with glowing seams, carrying a glowing satchel, spinning around, with a mischievous wink, indigo accents, neon cyberpunk future style'
  }
})
