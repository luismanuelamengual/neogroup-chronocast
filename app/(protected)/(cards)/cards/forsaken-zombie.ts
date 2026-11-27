import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { banishFromDiscard, buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forsaken-zombie',
  type: 'ally',
  name: 'Forsaken Zombie',
  text: 'When it enters: banish up to 2 cards of your discard pile; it gains +2 attack for each one.',
  flavor: 'Nobody came back for him, so he came back for them.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  attack: 5,
  health: 8,
  onEnter(ctx) {
    buffSelf(ctx, 2 * banishFromDiscard(ctx, ctx.owner, 2), 0)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Forsaken Zombie: a zombie with translucent blue ectoplasm and a cracked halo, circling warily, tangerine accents, dark end-of-time void style'
  }
})
