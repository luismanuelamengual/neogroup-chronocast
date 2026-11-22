import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sunder',
  type: 'ability',
  name: 'Sunder',
  text: 'Destroy the enemy weapon.',
  flavor: 'Steel breaks. Pride breaks louder.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 60,
  cost: 2,
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject: 'a huge hammer smashing a sword into pieces on an anvil, shards of steel flying'
  }
})
