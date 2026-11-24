import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'relentless-hitman',
  type: 'ally',
  name: 'Relentless Hitman',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  keywords: ['guardian'],
  attack: 3,
  health: 11,
  ai: { value: 3 },
  art: {
    subject:
      'Relentless Hitman: a wiry adult woman with pale skin, electric teal hair in long braids and a beaded chin piercing, dressed in a long armored trench coat, holding a silenced pistol, with a confident smirk, violet accents, warrior style'
  }
})
