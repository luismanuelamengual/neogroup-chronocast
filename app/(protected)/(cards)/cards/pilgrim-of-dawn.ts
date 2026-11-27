import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cleanse, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-dawn',
  type: 'ally',
  name: 'Pilgrim of Dawn',
  text: 'When it enters: your hero loses its poison and burn and heals 4.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  attack: 3,
  health: 7,
  onEnter(ctx) {
    cleanse(ctx, { player: ctx.owner, slot: 'hero' })
    healHero(ctx, 4)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Pilgrim of Dawn: a willowy middle-aged orc man with jet black hair in short curls and an eyepatch, wearing a bowler hat, dressed in a poncho woven with hourglass patterns, holding prayer beads and a staff, with a haunted stare, lime green accents, time rift wanderer style'
  }
})
