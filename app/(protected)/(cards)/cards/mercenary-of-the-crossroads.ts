import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-the-crossroads',
  type: 'ally',
  name: 'Mercenary of the Crossroads',
  text: 'When it enters: the enemy weapon loses 1 durability.',
  flavor: 'Loyal to whoever pays, in whatever century.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  tribe: 'drifter',
  attack: 6,
  health: 11,
  onEnter(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
  },
  ai: { value: 5, tags: ['antiGear'] },
  art: {
    subject:
      'Mercenary of the Crossroads: a lanky middle-aged goblin man with sandy hair slicked back, a full beard and sharp cheekbones, wearing a wide-brimmed hat, dressed in a 1920s pinstripe suit with a tattered cape, resting a notched greatsword on the shoulder, with wide-eyed wonder, saffron yellow accents, time rift wanderer style'
  }
})
