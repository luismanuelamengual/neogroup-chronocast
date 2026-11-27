import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stealRandomFromHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'night-prowler-suit',
  type: 'armor',
  subtype: 'suit',
  name: 'Night Prowler Suit',
  text: "When your hero's attack hits the enemy hero: take a random card from the rival's hand.",
  flavor: 'Every pocket is an open door.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  armor: 1,
  durability: 3,
  modifyDamage(ctx, target, amount, source) {
    if (
      amount > 0 &&
      source?.attack &&
      source.attackerUid === null &&
      source.player === ctx.owner &&
      target.player === ctx.opponent &&
      target.slot === 'hero'
    ) {
      stealRandomFromHand(ctx)
    }

    return amount
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Night Prowler Suit: a sleek black stealth suit with glowing purple seams and many hidden pockets, hanging in a dark locker, close-up filling the frame, purple accents, neon cyberpunk future style'
  }
})
