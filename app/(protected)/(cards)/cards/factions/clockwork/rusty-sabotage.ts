import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rusty-sabotage',
  type: 'ability',
  name: 'Rusty Sabotage',
  text: 'Destroy the enemy weapon. Fast.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Rusty Sabotage: a sword and a shield cracking and rusting apart, over burning grassland, close-up filling the frame, turquoise accents, steampunk steam era style'
  }
})
