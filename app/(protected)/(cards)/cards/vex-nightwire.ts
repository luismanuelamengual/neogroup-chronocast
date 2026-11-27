import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isEnhanced, veilAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vex-nightwire',
  type: 'hero',
  name: 'Vex Nightwire',
  text: 'Ghost Protocol (3): your hero and your allies gain stealth (the rival can not attack them nor target them) until the end of this phase; attacking does not break it. Your Enhanced allies (with an implant) are Quick.',
  flavor: 'She hunts targets nobody else can find.',
  faction: 'neon',
  side: 'dawn',
  restriction: { heroes: ['vex-nightwire'] },
  rarity: 'uncommon',
  element: 'shadow',
  cost: 0,
  health: 63,
  ability: {
    name: 'Ghost Protocol',
    text: 'Your hero and your allies gain stealth (the rival can not attack them nor target them) until the end of this phase; attacking does not break it.',
    cost: 3,
    ai: { tags: ['buffAll'] },
    activate(ctx) {
      // Only until the end of this phase (like "until the start of your next turn"): 0 more phases.
      veilAllies(ctx, ctx.owner, 0, 0, true)
    }
  },
  auraKeywords(ctx, unit) {
    return isEnhanced(unit) ? ['quick'] : []
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cyberpunk bounty hunter girl with a neon green visor and a holographic crossbow crouching on a rainy rooftop'
  }
})
