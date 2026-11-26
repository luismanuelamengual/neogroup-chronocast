import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-hitman',
  type: 'ally',
  name: 'Unbroken Hitman',
  text: 'When it attacks: it gains +1 attack.',
  flavor: 'Shot twice. Still working.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 540,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['thorns', 'retaliate'],
  thorns: 4,
  attack: 6,
  health: 11,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      'Unbroken Hitman: a hunched young woman with tan skin, ultraviolet hair with a side-swept fringe and an eyepatch, wearing a tinted visor, dressed in a sleeveless kevlar vest with chrome pauldrons, holding a silenced pistol, with a haunted stare, indigo accents, warrior style'
  }
})
