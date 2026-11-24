import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-battle-cry',
  type: 'ability',
  name: 'Hallowed Battle Cry',
  text: 'An ally of yours gains +4 attack and +5 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Hallowed Battle Cry: a visible shockwave of sound blasting across a battlefield, over rooftops at night, centered and seen from slightly below, cobalt blue accents, mystic healer style'
  }
})
