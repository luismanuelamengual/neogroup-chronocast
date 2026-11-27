import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-the-ambush',
  type: 'ally',
  name: 'Infiltrator of the Ambush',
  text: 'When it enters: destroy the enemy weapon.',
  flavor: 'By the time you see her, it is over.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  tribe: 'netrunner',
  attack: 4,
  health: 12,
  onEnter(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['summon'] },
  art: {
    subject:
      'Infiltrator of the Ambush: a wiry elderly android woman with a smooth metal scalp and a monocle, wearing a glowing hood, dressed in a tracksuit with a neural crown, slipping through a glowing doorway, with wide-eyed wonder, tangerine accents, hunter style'
  }
})
