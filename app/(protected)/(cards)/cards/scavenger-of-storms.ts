import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-storms',
  type: 'ally',
  name: 'Scavenger of Storms',
  text: 'When it enters: deal 4 lightning damage to a random enemy ally.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
  price: 55,
  cost: 3,
  keywords: ['ranged'],
  attack: 3,
  health: 6,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Scavenger of Storms: a hunched middle-aged foxfolk woman with blue-black hair cropped short and sharp cheekbones, wearing a wide-brimmed hat, dressed in a pirate greatcoat with clock-face buttons, carrying a sack bursting with salvaged relics, with a confident smirk, crimson accents, mage style'
  }
})
