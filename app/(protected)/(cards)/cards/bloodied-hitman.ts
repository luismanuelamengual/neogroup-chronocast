import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-hitman',
  type: 'ally',
  name: 'Bloodied Hitman',
  text: 'When it enters: your hero takes 4 shadow damage and it gains +4 attack.',
  flavor: 'He prices by the scar.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  tribe: 'enforcer',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 4, 'shadow')
    buffSelf(ctx, 4, 0)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Bloodied Hitman: a hunched elderly man with light brown skin, a shaved head and a crooked broken nose, wearing a street hood, dressed in a leather duster with LED fringe, holding a silenced pistol, with a sly grin, saffron yellow accents, warrior style'
  }
})
