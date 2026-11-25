import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pickaxe-of-lost-time',
  type: 'weapon',
  name: 'Pickaxe of Lost Time',
  text: 'When it is equipped: your hero heals 6.',
  flavor: 'It mines the hours nobody uses.',
  faction: 'neutral',
  restriction: {},
  rarity: 'mythic',
  element: 'time',
  price: 31000,
  cost: 4,
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 7 },
  art: {
    subject:
      'Pickaxe of Lost Time: a single pickaxe made of rough stone and sinew, surrounded by floating clock hands and glowing sand, on a workbench with tools, bursting toward the viewer, scarlet accents, time rift wanderer style'
  }
})
