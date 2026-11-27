import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'storm-called-cartographer',
  type: 'ally',
  name: 'Storm-Called Cartographer',
  text: 'When it dies: deal 2 lightning damage to the enemy hero and to a random enemy ally.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'lightning',
  price: 140,
  cost: 2,
  attack: 3,
  health: 6,
  onDeath(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2, 'lightning')
    damageRandomAlly(ctx, ctx.opponent, 2, 'lightning')
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Storm-Called Cartographer: a stocky elderly orc woman with silver hair in a sharp bob and a crooked broken nose, wearing a beaded headband, dressed in a long ferryman cloak with tide-worn hems, unrolling a living map of shifting lands, with a booming laugh, violet accents, mage style'
  }
})
