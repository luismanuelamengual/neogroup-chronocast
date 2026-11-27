import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vexs-neural-crown',
  type: 'attachment',
  subtype: 'implant',
  name: "Vex's Neural Crown",
  text: 'Attach to an ally of yours: it gains +2 attack and Stealth. Each time it attacks, your other Enhanced allies gain +1 attack this phase.',
  faction: 'neon',
  restriction: { heroes: ['vex-nightwire'] },
  rarity: 'legendary',
  price: 2200,
  cost: 3,
  keywords: ['stealth'],
  attack: 2,
  targets: ['friendlyAlly'],
  onHostAttack(ctx, host) {
    for (const unit of enhancedAllies(ctx, ctx.owner)) {
      if (unit.uid !== host.uid) {
        buffThisPhase(ctx, unit, 1)
      }
    }
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      "Vex's Neural Crown: a thin circlet of black chrome with glowing cyan neural filaments, resting on a holographic pedestal, cyan and magenta accents, neon cyberpunk future style"
  }
})
