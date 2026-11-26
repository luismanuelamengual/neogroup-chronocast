import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'towering-boss',
  type: 'ally',
  name: 'Towering Boss',
  text: 'When it enters: your other Enforcers gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['guardian'],
  attack: 1,
  health: 7,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 1, 1, true)
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Towering Boss: a towering elderly android man with a smooth metal scalp and round spectacles, dressed in a samurai-styled carbon armor, sitting back with a cigar and a cane, with a sly grin, magenta accents, warrior style'
  }
})
