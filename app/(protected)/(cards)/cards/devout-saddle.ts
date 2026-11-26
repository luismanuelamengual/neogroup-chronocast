import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'devout-saddle',
  type: 'attachment',
  subtype: 'mount',
  name: 'Devout Saddle',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 1,
  health: 3,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Devout Saddle: an enchanted saddle made of dark yew wood and brass fittings, in a beam of light from above, centered and seen from slightly below, ivory accents, mystic healer style'
  }
})
