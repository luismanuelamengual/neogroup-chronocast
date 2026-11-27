import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'back-alley-ripper',
  type: 'ally',
  name: 'Back-Alley Ripper',
  text: 'When it attacks an ally that has an attachment: draw a card.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  tribe: 'cyborg',
  attack: 4,
  health: 8,
  onAttack(ctx, target) {
    if (unitAt(ctx, target)?.attachments?.length) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Back-Alley Ripper: a shady cyborg scavenger pulling implants out of a scrap heap, full body, acid green accents, neon cyberpunk future style'
  }
})
