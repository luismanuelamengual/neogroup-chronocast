import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legion-war-banner',
  type: 'artifact',
  name: 'Legion War Banner',
  text: 'The attacks of your allies deal 2 more damage. When you play it, if you have no allies: draw a card.',
  flavor: 'Raise it, and they will come.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    if (alliesOf(ctx, ctx.owner).length === 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  attackBonus(ctx, attacker) {
    return attacker.player === ctx.owner && attacker.slot !== 'hero' ? 2 : 0
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Legion War Banner: a tall red and gold legion standard with a bronze eagle on top, planted in a battlefield, banners flapping, gold accents, ancient bronze-age empire style'
  }
})
