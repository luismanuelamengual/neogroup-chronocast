import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact, destroyTrap } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'great-purge',
  type: 'ability',
  name: 'Great Purge',
  text: 'Destroy every enemy artifact and face-down trap.',
  flavor: 'Clean slate. Clean board.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 4,
  onPlay(ctx) {
    while (destroyArtifact(ctx, ctx.opponent)) {
      // until none is left
    }

    while (destroyTrap(ctx, ctx.opponent)) {
      // until none is left
    }
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject: 'a blinding storm of white flames sweeping across an enemy camp, burning away totems and traps'
  }
})
