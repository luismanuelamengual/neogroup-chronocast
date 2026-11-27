import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'machinist-of-the-foundry',
  type: 'ally',
  name: 'Machinist of the Foundry',
  text: 'When it enters: your other Inventors gain Shield.',
  flavor: 'If it ticks, she can fix it.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'inventor',
  keywords: ['shield'],
  attack: 5,
  health: 7,
  onEnter(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'inventor', true)) {
      grantKeyword(ctx, unit, 'shield')
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Machinist of the Foundry: a muscular elderly gnome man with warm beige skin, salt-and-pepper hair in a wild mane, a pointed goatee and round spectacles, wearing a battered top hat, dressed in a padded flight jacket, operating a sparking lathe arm, with a fierce scowl, lime green accents, steampunk steam era style'
  }
})
