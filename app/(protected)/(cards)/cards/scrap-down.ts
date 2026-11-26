import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroySupportAt, draw, supportAt } from '@/app/(protected)/(engine)/effects'

/** From this cost on, the scrapped artifact gives one more card. */
const BIG_ARTIFACT_COST = 4

export default defineCard({
  id: 'scrap-down',
  type: 'ability',
  subtype: 'gadget',
  name: 'Scrap Down',
  text: 'Destroy an artifact of yours: draw 2 cards, or 3 if it cost 4 or more.',
  flavor: 'Nothing is wasted in the workshop. Least of all a good gear.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['friendlyArtifact'],
  onPlay(ctx) {
    const chosen = supportAt(ctx, ctx.targets[0])

    if (!chosen || !destroySupportAt(ctx, ctx.targets[0])) {
      return
    }

    draw(ctx, ctx.owner, chosen.definition.cost >= BIG_ARTIFACT_COST ? 3 : 2)
  },
  ai: { value: 2, tags: ['draw', 'scrap'] },
  art: {
    subject:
      'Scrap Down: goggled tinkerer hands taking apart a brass clockwork machine on a workbench, gears and springs flying out, sparks, copper and yellow accents, steampunk style'
  }
})
