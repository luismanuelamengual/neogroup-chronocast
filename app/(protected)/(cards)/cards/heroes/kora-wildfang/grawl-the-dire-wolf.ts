import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grawl-the-dire-wolf',
  type: 'ally',
  name: 'Grawl, the Dire Wolf',
  text: 'When it attacks: your hero heals 3.',
  flavor: 'He was the runt of the pack. Then he ate the pack.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 16,
  health: 26,
  keywords: ['quick'],
  onAttack(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'a huge black dire wolf with glowing amber eyes snarling beside Kora in the jungle'
  }
})
