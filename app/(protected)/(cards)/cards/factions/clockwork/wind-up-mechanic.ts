import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wind-up-mechanic',
  type: 'ally',
  name: 'Wind-Up Mechanic',
  text: '',
  flavor: 'Turn the key and step back.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'inventor',
  keywords: ['thorns'],
  thorns: 4,
  attack: 6,
  health: 8,
  ai: { value: 4 },
  art: {
    subject:
      'Wind-Up Mechanic: a plump adult dwarf woman with golden skin, snow-white hair in an afro and a scar across one eye, wearing brass goggles over the eyes, dressed in a waistcoat with a pocket watch chain, swinging a huge wrench, with a sly grin, crimson accents, steampunk steam era style'
  }
})
