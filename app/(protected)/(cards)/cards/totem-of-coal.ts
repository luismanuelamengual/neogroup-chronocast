import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, isTribe, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'totem-of-coal',
  type: 'artifact',
  name: 'Totem of Coal',
  text: 'When a Skyship of yours enters: draw a card. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'skyship')) {
      draw(ctx, ctx.owner, 1)
      spendCharge(ctx)
    }
  },
  charges: 3,
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Totem of Coal: an ancient totem made of dark yew wood and brass fittings, standing in a ruined temple, dramatic backlight, scarlet accents, steampunk steam era style'
  }
})
