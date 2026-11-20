import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-world-serpent',
  type: 'ally',
  name: 'The World Serpent',
  text: 'On enter: deal 8 damage to every enemy ally.',
  flavor: 'Its tail is in the past. Its head, in the future.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'exotic',
  price: 14000,
  cost: 8,
  attack: 30,
  health: 72,
  keywords: ['unique', 'poison'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 8)
  },
  ai: { value: 10, tags: ['removal'] },
  art: {
    subject: 'a gigantic green serpent coiled around an entire prehistoric mountain, its head rising above the clouds'
  }
})
