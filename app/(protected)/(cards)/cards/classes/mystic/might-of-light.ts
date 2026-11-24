import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-light',
  type: 'ability',
  name: 'Might of Light',
  text: 'Your Fae gain +2 attack and +3 health.',
  flavor: 'Even shadows step aside.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  onPlay(ctx) {
    buffTribe(ctx, ctx.owner, 'fae', 2, 3)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Might of Light: a huge glowing fist-shaped aura of raw power, over rooftops at night, bursting toward the viewer, gold accents, mystic healer style'
  }
})
