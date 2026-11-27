import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kades-cleaver',
  type: 'weapon',
  subtype: 'energy',
  name: "Kade's Plasma Cleaver",
  text: 'When your hero attacks with it: your Enforcers gain +1 attack this phase.',
  flavor: 'Order, one cut at a time.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'enforcer')) {
      buffThisPhase(ctx, unit, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Kade's Plasma Cleaver: a single heavy cleaver with a glowing plasma edge made of ivory and jade, in a beam of light from above, diagonal dynamic composition, amber accents, neon cyberpunk future style"
  }
})
