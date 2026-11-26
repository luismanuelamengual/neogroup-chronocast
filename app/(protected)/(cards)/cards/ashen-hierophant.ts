import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ashen-hierophant',
  type: 'ally',
  name: 'Ashen Hierophant',
  text: 'When it dies: your Cultists gain +1 attack and +1 health. When it enters: poison the enemy hero (3).',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'legendary',
  element: 'fire',
  price: 2160,
  cost: 3,
  tribe: 'cultist',
  keywords: ['unique'],
  attack: 5,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'cultist', 1, 1)
  },
  onEnter(ctx) {
    poison(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 5, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject:
      'Ashen Hierophant: a petite young grey-skinned man with chestnut hair in thick dreadlocks, mutton chops and a monocle, wearing a crown of thorns, dressed in a violet cowl with eye embroidery, raising a rotted staff, with wide-eyed wonder, emerald accents, dark end-of-time void style'
  }
})
