import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffSelf, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurion-of-steel',
  type: 'ally',
  name: 'Centurion of Steel',
  text: 'When another Legionnaire of yours enters: it gains +1 attack and +1 health. When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'legendary',
  price: 2160,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['unique'],
  attack: 4,
  health: 8,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'legionnaire')) {
      buff(ctx, ally, 1, 1)
    }
  },
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Centurion of Steel: a barrel-chested young man with dark ebony skin, ash brown hair cropped short, mutton chops and a beauty mark, wearing a plain bronze helm, dressed in a Greek hoplite panoply with a horsehair crest, pointing a gladius forward, with grim determination, lime green accents, warrior style'
  }
})
