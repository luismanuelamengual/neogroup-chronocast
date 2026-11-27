import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'doomsayer-of-rot',
  type: 'ally',
  name: 'Doomsayer of Rot',
  text: 'When it dies: the rival discards a random card.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'cultist',
  attack: 3,
  health: 6,
  onDeath(ctx) {
    discardRandom(ctx, ctx.opponent)
  },
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject:
      'Doomsayer of Rot: a muscular middle-aged woman with pale skin, ash brown hair in long braids and a jeweled brow piercing, wearing a deep hood, dressed in chains and a sackcloth tabard, ringing a cracked bell, with calm focus, ivory accents, dark end-of-time void style'
  }
})
