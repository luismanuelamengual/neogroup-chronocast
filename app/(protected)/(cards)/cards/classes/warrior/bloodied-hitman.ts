import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-hitman',
  type: 'ally',
  name: 'Bloodied Hitman',
  text: 'When it enters: your hero gains 7 armor.',
  flavor: 'He prices by the scar.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  tribe: 'enforcer',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 7)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Bloodied Hitman: a hunched elderly man with light brown skin, a shaved head and a crooked broken nose, wearing a street hood, dressed in a leather duster with LED fringe, holding a silenced pistol, with a sly grin, saffron yellow accents, warrior style'
  }
})
