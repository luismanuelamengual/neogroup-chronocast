import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-renewal',
  type: 'ability',
  subtype: 'instinct',
  name: 'Respite of Renewal',
  text: 'Your hero heals 9, or 18 if it has less than half its health.',
  flavor: 'Rest now. The war will wait.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  onPlay(ctx) {
    const hero = ctx.engine.player(ctx.owner).hero

    healHero(ctx, hero.health * 2 < hero.maxHealth ? 18 : 9)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Respite of Renewal: a quiet campfire with a steaming kettle and bedroll, inside a cave of crystals, close-up filling the frame, ivory accents, mystic healer style'
  }
})
