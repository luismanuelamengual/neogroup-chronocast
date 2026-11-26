import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'warpick-of-rage',
  type: 'weapon',
  subtype: 'mace',
  name: 'Warpick of Rage',
  text: '',
  flavor: 'It punches through armor and patience alike.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  durability: 3,
  ai: { value: 3 },
  art: {
    subject:
      'Warpick of Rage: a single warpick made of chrome with neon light strips, half buried in snow, framed by drifting embers, emerald accents, warrior style'
  }
})
