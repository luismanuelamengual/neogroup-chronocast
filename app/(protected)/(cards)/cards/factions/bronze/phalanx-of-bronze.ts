import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phalanx-of-bronze',
  type: 'ally',
  name: 'Phalanx of Bronze',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'legionnaire',
  attack: 6,
  health: 9,
  ai: { value: 4 },
  art: {
    subject:
      'Phalanx of Bronze: a broad-shouldered elderly woman with freckled fair skin, salt-and-pepper hair cropped short and sharp cheekbones, dressed in light skirmisher leathers with bronze bracers, locking a tall round shield, with wide-eyed wonder, turquoise accents, ancient bronze-age empire style'
  }
})
