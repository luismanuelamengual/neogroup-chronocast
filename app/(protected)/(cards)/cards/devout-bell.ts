import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-bell',
  type: 'weapon',
  subtype: 'orb',
  name: 'Devout Bell',
  text: 'When it is equipped: freeze the enemy ally with the most attack.',
  flavor: 'Each toll is a vow kept.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  element: 'sonic',
  price: 360,
  cost: 2,
  attack: 3,
  durability: 3,
  onPlay(ctx) {
    const [strongest] = alliesOf(ctx, ctx.opponent).sort(
      (one, other) => ctx.engine.attackOf(other) - ctx.engine.attackOf(one)
    )

    if (strongest) {
      freezeAlly(ctx, strongest)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Devout Bell: a single bell made of blue steel with silver runes, surrounded by rippling sound waves, floating above a marble pedestal, swirling around the center, scarlet accents, mystic healer style'
  }
})
