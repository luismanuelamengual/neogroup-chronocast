import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-stance',
  type: 'ability',
  name: 'Flickering Stance',
  text: 'Your armor gains +2 durability. Draw a card.',
  flavor: 'Here, there, nowhere.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    repairArmor(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['repair', 'draw'] },
  art: {
    subject:
      'Flickering Stance: a round shield and crossed spear planted firmly on stone, over burning grassland, close-up filling the frame, tangerine accents, mage style'
  }
})
