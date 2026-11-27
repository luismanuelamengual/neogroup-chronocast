import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bone-snare',
  type: 'attachment',
  subtype: 'curse',
  name: 'Bone Snare',
  text: "Attach to an enemy ally: it can't attack or use its ability.",
  flavor: 'The more it struggles, the tighter it gets.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  targets: ['enemyAlly'],
  disarms: true,
  silences: true,
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Bone Snare: a jagged trap made of rib bones clamped shut, black chains hanging from it, on dark earth, close-up filling the frame, bone white accents, dark end-of-time void style'
  }
})
