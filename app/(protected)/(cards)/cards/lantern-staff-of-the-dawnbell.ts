import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-the-dawnbell',
  type: 'weapon',
  name: 'Lantern Staff of the Dawnbell',
  text: 'When it is equipped: your hero heals 6.',
  flavor: 'It lights the path to morning.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  keywords: ['lifesteal'],
  attack: 4,
  durability: 3,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Lantern Staff of the Dawnbell: a single staff made of copper with green patina, on a pile of old coins, dramatic backlight, rose pink accents, mystic healer style'
  }
})
