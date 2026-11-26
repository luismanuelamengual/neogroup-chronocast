import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-pyromancer',
  type: 'ally',
  name: 'Scholarly Pyromancer',
  text: 'When it enters: deal 5 fire damage to a random enemy ally.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'fire',
  resist: ['arcane'],
  price: 65,
  cost: 4,
  tribe: 'magus',
  keywords: ['shield'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Scholarly Pyromancer: a lanky young gnome man with golden skin, salt-and-pepper hair in an undercut, a pointed goatee and war paint stripes, dressed in a crimson mantle with ember-edged sleeves, conjuring a spiral of flame, with a haunted stare, gold accents, mage style'
  }
})
