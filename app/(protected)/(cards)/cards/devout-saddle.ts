import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'devout-saddle',
  type: 'attachment',
  name: 'Devout Saddle',
  text: 'Attach to an ally of yours: it gains +1 attack and +3 health.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'epic',
  price: 1560,
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
