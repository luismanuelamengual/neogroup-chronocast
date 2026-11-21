import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'vampire-fang',
  type: 'attachment',
  name: 'Vampire Fang',
  text: 'Attach to an ally of yours: it has +2 attack and lifesteal.',
  flavor: 'A trophy that is still hungry.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 520,
  cost: 3,
  targets: ['friendlyAlly'],
  attack: 2,
  keywords: ['lifesteal'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a long ivory vampire fang pendant on a silver chain, dripping with red light'
  }
})
