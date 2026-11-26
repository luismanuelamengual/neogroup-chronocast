import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-rust',
  type: 'attachment',
  subtype: 'curse',
  name: 'Flickering Rust',
  text: 'Attach to an enemy ally: each time it attacks, it takes 3 acid damage.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  element: 'acid',
  price: 360,
  cost: 2,
  targets: ['enemyAlly'],
  onHostAttack(ctx, host) {
    damageAlly(ctx, host, 3)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Flickering Rust: an enchanted rust made of carved obsidian, dripping bubbling green acid, on cracked stone tiles, bursting toward the viewer, indigo accents, mage style'
  }
})
