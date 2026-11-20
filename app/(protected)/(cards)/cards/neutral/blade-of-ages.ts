import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'blade-of-ages',
  type: 'weapon',
  name: 'Blade of Ages',
  text: '',
  flavor: 'It drinks the years of those it cuts.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 14,
  durability: 4,
  keywords: ['lifesteal'],
  ai: { value: 5 },
  art: {
    subject: 'a magnificent greatsword with a blade made of layered metals from different eras, glowing red runes'
  }
})
