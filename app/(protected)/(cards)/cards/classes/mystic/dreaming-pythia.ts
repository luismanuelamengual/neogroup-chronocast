import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-pythia',
  type: 'ally',
  name: 'Dreaming Pythia',
  text: 'When it enters: it gains +1 attack and +1 health for each other Oracle of yours.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  resist: ['light'],
  price: 570,
  cost: 3,
  tribe: 'oracle',
  attack: 5,
  health: 7,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'oracle', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Dreaming Pythia: a stocky adult woman with warm beige skin, sandy hair in twin buns and round spectacles, dressed in flowing white robes with a laurel crown, breathing glowing vapors, with a haunted stare, cobalt blue accents, mystic healer style'
  }
})
