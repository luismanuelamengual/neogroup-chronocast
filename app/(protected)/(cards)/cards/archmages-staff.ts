import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isSpell, seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'archmages-staff',
  type: 'weapon',
  subtype: 'staff',
  name: "Archmage's Staff",
  text: 'Spell power +2. When it is equipped: draw the first spell of your deck.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  attack: 3,
  durability: 4,
  spellPower: 2,
  onPlay(ctx) {
    seek(ctx, ctx.owner, isSpell)
  },
  ai: { value: 4, tags: ['spellPower'] },
  art: {
    subject:
      "Archmage's Staff: a tall staff of white wood crowned with a floating sapphire crystal, orbiting runes of light, in a tower library, centered, cobalt blue accents, medieval magic order style"
  }
})
