import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf, isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-lost-time',
  type: 'artifact',
  name: 'Altar of Lost Time',
  text: 'Every damage your Skyships take is 2 lower.',
  flavor: 'Offerings to hours that never happened.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  modifyDamage(ctx, target, amount) {
    const unit = target.slot !== 'hero' && isAllyOf(ctx, target, ctx.owner) ? unitAt(ctx, target) : null

    return unit && isTribe(unit, 'skyship') ? Math.max(0, amount - 2) : amount
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Altar of Lost Time: an ancient altar made of polished bronze with engraved spirals, standing on a hilltop at dusk, close-up filling the frame, rose pink accents, steampunk steam era style'
  }
})
