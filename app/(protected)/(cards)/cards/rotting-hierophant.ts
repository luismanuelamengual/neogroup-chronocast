import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rotting-hierophant',
  type: 'ally',
  name: 'Rotting Hierophant',
  text: 'When it dies: summon a Risen Skeleton.',
  flavor: 'He preaches the gospel of decay.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'cultist',
  keywords: ['poison'],
  attack: 5,
  health: 5,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'risen-skeleton')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Rotting Hierophant: a willowy elderly pale ghoul-like man with salt-and-pepper hair in short curls, a forked beard and a golden nose ring, dressed in a violet cowl with eye embroidery, raising a rotted staff, with a serene smile, crimson accents, dark end-of-time void style'
  }
})
