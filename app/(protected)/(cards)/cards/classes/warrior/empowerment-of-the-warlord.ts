import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-warlord',
  type: 'ability',
  name: 'Empowerment of the Warlord',
  text: 'An ally of yours gains +2 attack and +2 health.',
  flavor: 'His shout is worth a hundred swords.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 2, 2)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Empowerment of the Warlord: a floating gem overflowing with radiant energy, in a dark forest clearing, diagonal dynamic composition, cobalt blue accents, warrior style'
  }
})
