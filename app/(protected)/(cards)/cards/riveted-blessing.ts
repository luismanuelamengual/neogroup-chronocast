import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'riveted-blessing',
  type: 'attachment',
  subtype: 'charm',
  name: 'Riveted Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  keywords: ['thorns'],
  thorns: 4,
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Riveted Blessing: an enchanted blessing made of gilded marble, stuck in the sand, bursting toward the viewer, violet accents, steampunk steam era style'
  }
})
