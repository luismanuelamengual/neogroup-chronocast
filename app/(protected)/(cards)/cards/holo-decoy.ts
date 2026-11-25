import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'holo-decoy',
  type: 'ally',
  token: true,
  name: 'Holo Decoy',
  text: '',
  flavor: 'Shoot it. It does not mind.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  weak: ['lightning'],
  cost: 1,
  tribe: 'cyborg',
  keywords: ['guardian'],
  attack: 0,
  health: 6,
  ai: { value: 1 },
  art: {
    subject: 'a flickering cyan hologram of a soldier, neon cyberpunk future style'
  }
})
