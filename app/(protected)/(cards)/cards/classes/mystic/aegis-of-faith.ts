import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-of-faith',
  type: 'armor',
  name: 'Aegis of Faith',
  text: 'On play: your hero heals 10.',
  flavor: 'Faith is the strongest armor.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  armor: 30,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 10)
  },
  ai: { value: 6, tags: ['heal'] },
  art: {
    subject: 'an ornate white and gold breastplate with angel wings engraved, shining with holy light'
  }
})
