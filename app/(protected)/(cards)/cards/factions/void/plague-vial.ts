import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plague-vial',
  type: 'item',
  name: 'Plague Vial',
  text: 'Poison every enemy ally (2).',
  flavor: 'Break it and walk away. Quickly.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    for (const ref of allyRefs(ctx, ctx.opponent)) {
      poison(ctx, ref, 2)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a cracked glass vial releasing a cloud of sickly green and purple plague smoke over a battlefield'
  }
})
