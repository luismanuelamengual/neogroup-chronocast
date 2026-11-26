import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'swift-pterodon',
  type: 'ally',
  name: 'Swift Pterodon',
  text: '',
  flavor: 'The sky belonged to it first.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 5,
  health: 10,
  ai: { value: 4 },
  art: {
    subject:
      'Swift Pterodon: a pterodon with a moss-green hide with yellow stripes and tribal paint, rearing up, cobalt blue accents, prehistoric jungle era style'
  }
})
