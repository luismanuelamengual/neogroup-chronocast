import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-fortune-teller',
  type: 'ally',
  name: 'Timeless Fortune Teller',
  text: 'When it enters: you gain 1 Chronos this phase for each other ally of yours.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'time',
  price: 40,
  cost: 1,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 2,
  health: 3,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, alliesOf(ctx, ctx.owner).filter((unit) => unit.uid !== ctx.self.uid).length)
  },
  ai: { value: 1, tags: ['aggro', 'ramp'] },
  art: {
    subject:
      'Timeless Fortune Teller: a muscular adult owlfolk woman with platinum blond feathers and a burn scar on the jaw, wearing a turban, dressed in viking furs over a modern raincoat, holding a crystal ball swirling with images, with wide-eyed wonder, rose pink accents, time rift wanderer style'
  }
})
