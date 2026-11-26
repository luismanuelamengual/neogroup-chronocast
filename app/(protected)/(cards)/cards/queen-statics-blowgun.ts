import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-statics-blowgun',
  type: 'weapon',
  subtype: 'energy',
  name: "Queen Static's Arc Pistol",
  text: 'When it is equipped: deal 4 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { heroes: ['queen-static'] },
  rarity: 'epic',
  element: 'lightning',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Queen Static's Arc Pistol: an ornate chrome energy pistol with arcing blue lightning between twin prongs, held on a velvet throne cushion, close-up filling the frame, electric blue accents, neon cyberpunk future style"
  }
})
