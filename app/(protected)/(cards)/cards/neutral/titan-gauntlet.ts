import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'titan-gauntlet',
  type: 'attachment',
  name: 'Titan Gauntlet',
  text: 'Attach to an ally of yours: it has +8 attack, +8 health and cleave.',
  flavor: 'Forged for a hand three times your size. It fits anyway.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 4500,
  cost: 5,
  targets: ['friendlyAlly'],
  attack: 8,
  health: 8,
  keywords: ['cleave'],
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a colossal golden gauntlet crackling with energy, a fist smashing the ground into shockwaves'
  }
})
