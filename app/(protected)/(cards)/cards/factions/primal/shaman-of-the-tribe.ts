import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shaman-of-the-tribe',
  type: 'ally',
  name: 'Tribe Shaman',
  text: 'At the end of each phase, your hero heals 2.',
  flavor: 'Her songs are older than words.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 4,
  health: 14,
  onPhaseEnd(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'an old tribal shaman with a feathered headdress shaking a bone rattle beside a campfire'
  }
})
