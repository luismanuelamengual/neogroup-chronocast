import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'leech-of-runes',
  type: 'attachment',
  subtype: 'curse',
  name: 'Leech of Runes',
  text: 'Attach to an enemy ally: each time it takes damage, your hero heals 2.',
  flavor: 'It feeds on magic, one rune at a time.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    if (amount > 0 && isHost(ctx, target)) {
      healHero(ctx, 2)
    }

    return amount
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Leech of Runes: an enchanted leech made of copper with green patina, on a pile of old coins, framed by drifting embers, gold accents, dark end-of-time void style'
  }
})
