import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'taurons-halberd',
  type: 'weapon',
  subtype: 'spear',
  name: "Tauron's Halberd",
  text: 'When your hero attacks with it: a random ally of yours gains +2 attack this phase.',
  flavor: 'Forged in the heart of the labyrinth.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    const unit = randomAlly(ctx, ctx.owner)

    if (unit) {
      buffThisPhase(ctx, unit, 2)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Tauron's Halberd: a single halberd made of polished bronze with engraved spirals, resting on a velvet cloth, centered and seen from slightly below, gold accents, ancient bronze-age empire style"
  }
})
