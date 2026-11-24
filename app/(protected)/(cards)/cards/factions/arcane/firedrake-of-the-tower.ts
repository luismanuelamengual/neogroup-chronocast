import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firedrake-of-the-tower',
  type: 'ally',
  name: 'Firedrake of the Tower',
  text: 'When it enters: it gains +1 attack and +1 health for each other Drake of yours.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 630,
  cost: 4,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 5,
  health: 7,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'drake', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Firedrake of the Tower: a firedrake with obsidian scales with ember cracks and smoke curling from its nostrils, prowling low, scarlet accents, medieval magic order style'
  }
})
