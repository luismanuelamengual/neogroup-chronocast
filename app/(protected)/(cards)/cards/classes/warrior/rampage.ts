import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rampage',
  type: 'ability',
  name: 'Rampage',
  text: 'Deal 10 damage to every enemy ally and your hero gains 10 armor. Slow.',
  flavor: 'He did not stop until the field was empty.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 10)
    gainArmor(ctx, ctx.owner, 10)
  },
  ai: { value: 6, tags: ['removal', 'defense'] },
  art: {
    subject: 'a furious giant warrior smashing through a line of enemies, debris flying'
  }
})
