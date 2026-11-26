import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** From this cost on, the scrapped artifact gives one more card. */
const BIG_ARTIFACT_COST = 4

export default defineCard({
  id: 'scrap-down',
  type: 'ability',
  name: 'Scrap Down',
  text: 'Destroy your priciest artifact: draw 2 cards, or 3 if it cost 4 or more.',
  flavor: 'Nothing is wasted in the workshop. Least of all a good gear.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  onPlay(ctx) {
    const priciest = [...ctx.engine.player(ctx.owner).artifacts].sort(
      (a, b) => getCard(b.cardId).cost - getCard(a.cardId).cost
    )[0]

    if (!priciest) {
      return
    }

    const cost = getCard(priciest.cardId).cost

    ctx.engine.destroyArtifactsWhere((card, player) => player === ctx.owner && card.uid === priciest.uid)
    draw(ctx, ctx.owner, cost >= BIG_ARTIFACT_COST ? 3 : 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Scrap Down: goggled tinkerer hands taking apart a brass clockwork machine on a workbench, gears and springs flying out, sparks, copper and yellow accents, steampunk style'
  }
})
