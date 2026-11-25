import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbound-hierophant',
  type: 'ally',
  name: 'Unbound Hierophant',
  text: 'When it enters: poison the enemy hero (3). When it dies: deal 3 shadow damage to the enemy hero.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  element: 'shadow',
  price: 1880,
  cost: 4,
  tribe: 'cultist',
  keywords: ['lifesteal', 'poison'],
  attack: 4,
  health: 7,
  onEnter(ctx) {
    poison(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  onDeath(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Unbound Hierophant: a stocky adult grey-skinned woman with auburn hair in a single long braid and a tattooed neck, wearing a deep hood, dressed in a mud-caked burial wrap, raising a rotted staff, with grim determination, amber accents, dark end-of-time void style'
  }
})
