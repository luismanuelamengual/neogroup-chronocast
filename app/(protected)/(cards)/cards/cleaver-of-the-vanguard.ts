import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cleaver-of-the-vanguard',
  type: 'weapon',
  subtype: 'axe',
  name: 'Cleaver of the Vanguard',
  text: 'When your hero attacks with it: your armor gains +1 durability.',
  flavor: 'First into the fray, first out of it with trophies.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'exotic',
  price: 3160,
  cost: 3,
  attack: 4,
  durability: 4,
  onAttack(ctx) {
    repairArmor(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Cleaver of the Vanguard: a single cleaver made of chrome with neon light strips, resting on a velvet cloth, swirling around the center, magenta accents, warrior style'
  }
})
