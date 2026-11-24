import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'neon-thug',
  type: 'ally',
  name: 'Neon Thug',
  text: '',
  flavor: 'Rent is due. So are your teeth.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  attack: 4,
  health: 10,
  ai: { value: 3 },
  art: {
    subject:
      'Neon Thug: a petite middle-aged android man with a smooth metal scalp, a forked beard and a tattooed neck, dressed in a sharp black suit with neon tie, cracking brass knuckles, with a booming laugh, scarlet accents, neon cyberpunk future style'
  }
})
