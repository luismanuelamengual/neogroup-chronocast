import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-deserter',
  type: 'ally',
  name: 'Blessed Deserter',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  keywords: ['lifesteal'],
  attack: 3,
  health: 7,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Blessed Deserter: a willowy elderly woman with light brown skin, salt-and-pepper hair slicked back and an eyepatch, wearing a tricorn hat, dressed in a sailor uniform with bronze greaves, dragging a broken standard, with a booming laugh, magenta accents, mystic healer style'
  }
})
