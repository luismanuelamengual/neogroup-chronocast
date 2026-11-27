import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-knight-of-the-void',
  type: 'ally',
  name: 'Bone Knight of the Void',
  text: 'When it dies: if your discard pile has 8 or more cards, summon a Risen Skeleton.',
  flavor: 'Sworn to a kingdom that no longer exists.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 50,
  cost: 2,
  tribe: 'undead',
  keywords: ['retaliate'],
  attack: 2,
  health: 9,
  onDeath(ctx) {
    if (discardSize(ctx, ctx.owner) >= 8) {
      summonCard(ctx, ctx.owner, 'risen-skeleton')
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Bone Knight of the Void: a knight with mummified bandages and rusted chains, baring its teeth, gold accents, dark end-of-time void style'
  }
})
