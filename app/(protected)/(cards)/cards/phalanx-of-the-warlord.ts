import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-of-the-warlord',
  type: 'ally',
  name: 'Phalanx of the Warlord',
  text: 'When it attacks: it gains +2 attack and your hero takes 1 shadow damage.',
  flavor: 'They move as one, and fall as none.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'legionnaire',
  attack: 5,
  health: 8,
  onAttack(ctx) {
    buffSelf(ctx, 2, 0)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 1, 'shadow')
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Phalanx of the Warlord: a petite young woman with sun-weathered bronze skin, auburn hair in an afro and a tattooed neck, wearing a plumed Greek helmet, dressed in light skirmisher leathers with bronze bracers, locking a tall round shield, with a fierce scowl, rose pink accents, warrior style'
  }
})
