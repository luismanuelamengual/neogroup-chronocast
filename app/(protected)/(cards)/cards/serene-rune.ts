import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'serene-rune',
  type: 'attachment',
  name: 'Serene Rune',
  text: 'Attach to an ally of yours: it gains +2 attack and +4 health.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 2,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Serene Rune: an enchanted rune made of white bone and leather wraps, leaning against a ruined wall, framed by drifting embers, violet accents, mystic healer style'
  }
})
