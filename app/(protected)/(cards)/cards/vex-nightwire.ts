import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isEnhanced, veilAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vex-nightwire',
  type: 'hero',
  name: 'Vex Nightwire',
  text: 'Ghost Protocol (4): your allies gain stealth and +2 attack until the end of the next phase (attacking does not break that stealth). Your Enhanced allies (with an implant) are Quick.',
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
    text: 'Your allies gain stealth and +2 attack until the end of the next phase (attacking does not break that stealth).',
    cost: 4,
    ai: { tags: ['buffAll'] },
    activate(ctx) {
      veilAllies(ctx, ctx.owner, 2)
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
