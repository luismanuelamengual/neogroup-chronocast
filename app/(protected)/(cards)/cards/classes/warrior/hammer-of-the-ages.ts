import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hammer-of-the-ages',
  type: 'weapon',
  name: 'Hammer of the Ages',
  text: 'On play: deal 6 damage to every enemy ally and your hero gains 10 armor.',
  flavor: 'Every era forged a piece of it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'mythic',
  price: 34000,
  cost: 7,
  attack: 22,
  durability: 4,
  keywords: ['cleave'],
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    gainArmor(ctx, ctx.owner, 10)
  },
  ai: { value: 10, tags: ['removal', 'defense'] },
  art: {
    subject:
      'a colossal war hammer made of stone, bronze, steel and glowing crystal from different eras, lightning around it'
  }
})
