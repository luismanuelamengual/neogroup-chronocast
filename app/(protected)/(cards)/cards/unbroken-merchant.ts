import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-merchant',
  type: 'ally',
  name: 'Unbroken Merchant',
  text: 'When it attacks: it gains +1 attack.',
  flavor: 'Robbed nine times. Still open for business.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['cleave'],
  attack: 4,
  health: 4,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Unbroken Merchant: a wiry middle-aged catfolk man with platinum blond hair in short curls, a braided beard and a monocle, wearing a deep hood, dressed in a monk robe with a futuristic utility belt, balancing a scale heaped with glowing trinkets, with grim determination, scarlet accents, warrior style'
  }
})
