import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-dawnbell',
  type: 'ability',
  name: 'Empowerment of the Dawnbell',
  text: 'An ally of yours gains +4 attack and +5 health.',
  flavor: 'The bell rings and strength returns.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Empowerment of the Dawnbell: a floating gem overflowing with radiant energy, over a stormy battlefield, framed by drifting embers, violet accents, mystic healer style'
  }
})
