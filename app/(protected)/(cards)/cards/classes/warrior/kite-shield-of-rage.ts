import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'kite-shield-of-rage',
  type: 'armor',
  name: 'Kite Shield of Rage',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Kite Shield of Rage: a single shield made of dark yew wood and brass fittings, leaning against a ruined wall, dramatic backlight, gold accents, warrior style'
  }
})
