import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'netrunner-of-the-pack',
  type: 'ally',
  name: 'Netrunner of the Pack',
  text: 'When it enters: the enemy hero loses 1 energy for each Netrunner of yours.',
  flavor: 'She hunts in packets, not packs.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 6,
  health: 11,
  onEnter(ctx) {
    drainEnergy(ctx, ctx.opponent, tribeAllies(ctx, ctx.owner, 'netrunner').length)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Netrunner of the Pack: a plump elderly android woman with a smooth metal scalp and heavy golden earrings, wearing a VR visor, dressed in a sleek bodysuit traced with light lines, typing on a floating keyboard, with a serene smile, teal accents, hunter style'
  }
})
