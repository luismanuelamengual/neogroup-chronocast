import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-light',
  type: 'ability',
  name: 'Might of Light',
  text: 'Your Fae gain +2 attack and +3 health.',
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
    subject: 'Might of Light: a warrior surrounded by a surging aura of power, mystic healer style'
  }
})
