import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-fortune-teller',
  type: 'ally',
  name: 'Armored Fortune Teller',
  text: 'After it takes damage: your hero heals 2.',
  flavor: 'She read the future and bought armor.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  keywords: ['charge'],
  attack: 1,
  health: 5,
  onDamaged(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Armored Fortune Teller: a towering young elf woman with tan skin, honey blond hair in a tall mohawk and heterochromatic eyes, wearing a bowler hat, dressed in desert robes with an aviator scarf, holding a crystal ball swirling with images, with a booming laugh, teal accents, warrior style'
  }
})
