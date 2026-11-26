import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oiled-clockmaker',
  type: 'ally',
  name: 'Oiled Clockmaker',
  text: 'When another Inventor of yours enters: your hero heals 2.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'inventor',
  keywords: ['thorns'],
  thorns: 3,
  attack: 3,
  health: 10,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'inventor')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Oiled Clockmaker: a wiry young dwarf woman with pale skin, ash brown hair in twin buns and heterochromatic eyes, wearing a welding mask pushed up, dressed in a leather apron full of tools, holding a strange relic, walking calmly, with a mischievous wink, tangerine accents, steampunk steam era style'
  }
})
