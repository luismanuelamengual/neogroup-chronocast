import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ryns-mace',
  type: 'weapon',
  subtype: 'energy',
  name: "Ryn's Plasma Baton",
  text: 'When your hero attacks with it: a random Netrunner of yours gains Stealth.',
  flavor: 'It hums with every swing.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    const candidates = tribeAllies(ctx, ctx.owner, 'netrunner')

    if (candidates.length > 0) {
      grantKeyword(ctx, candidates[Math.floor(ctx.random() * candidates.length)], 'stealth')
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Ryn's Plasma Baton: a single riot baton with a humming rose-pink plasma core and copper grip, floating above a marble pedestal, seen from above, rose pink accents, neon cyberpunk future style"
  }
})
