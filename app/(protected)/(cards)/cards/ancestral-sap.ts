import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ancestral-sap',
  type: 'ability',
  subtype: 'instinct',
  name: 'Ancestral Sap',
  text: 'An ally of yours gains +10 health.',
  flavor: 'The oldest trees still share.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 0, 10)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Ancestral Sap: a stream of glowing amber sap flowing from an ancient tree root into a cupped leaf, close-up, emerald accents, prehistoric jungle era style'
  }
})
