import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wanderers-camp',
  type: 'location',
  name: "Wanderer's Camp",
  text: 'At the start of each phase, your hero heals 3.',
  flavor: 'A warm fire, whatever the century.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'a cozy campfire with tents from different eras under a starry sky with a rift'
  }
})
