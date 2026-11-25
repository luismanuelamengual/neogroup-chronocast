import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-statics-blowgun',
  type: 'weapon',
  name: "Queen Static's Blowgun",
  text: 'When it is equipped: deal 4 lightning damage to a random enemy ally.',
  faction: 'neon',
  restriction: { heroes: ['queen-static'] },
  rarity: 'epic',
  element: 'lightning',
  price: 1720,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Queen Static's Blowgun: a single blowgun made of blue steel with silver runes, crackling with forked lightning, on a worn wooden table, dramatic backlight, saffron yellow accents, neon cyberpunk future style"
  }
})
