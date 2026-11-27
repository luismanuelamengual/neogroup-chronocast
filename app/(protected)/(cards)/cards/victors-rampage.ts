import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'victors-rampage',
  type: 'artifact',
  name: "Victor's Rampage",
  text: 'When an enemy ally dies: your hero heals 4. (6 uses)',
  flavor: 'Every fallen foe is a breath of life.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  charges: 6,
  onEnemyAllyDeath(ctx) {
    healHero(ctx, 4)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      "Victor's Rampage: a blood-red war trophy of crossed blades over a skull, glowing with stolen life force, on a dark altar, close-up filling the frame, crimson accents, dark end-of-time void style"
  }
})
