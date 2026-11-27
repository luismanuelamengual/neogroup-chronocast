import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oomas-spirit-snare',
  type: 'trap',
  name: "Ooma's Spirit Snare",
  text: 'When an enemy ally attacks: cancel the attack, it becomes your Prey and summon a Sabertooth Cub.',
  faction: 'primal',
  restriction: { heroes: ['ooma-bonewhisper'] },
  rarity: 'legendary',
  price: 2200,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    markPrey(ctx, event.unit)
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 5, tags: ['trap', 'prey'] },
  art: {
    subject:
      "Ooma's Spirit Snare: a ring of carved bones and glowing spirit threads tightening around a charging beast, an old shaman's hand raised, bone white and lime green accents, prehistoric jungle era style"
  }
})
