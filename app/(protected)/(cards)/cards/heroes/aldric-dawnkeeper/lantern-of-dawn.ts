import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-dawn',
  type: 'weapon',
  name: 'Lantern of Dawn',
  text: 'At the start of each phase, your hero heals 2.',
  flavor: 'It has never gone out.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 5,
  durability: 4,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'an ornate silver lantern with a tiny sun burning inside it, hanging from a staff'
  }
})
