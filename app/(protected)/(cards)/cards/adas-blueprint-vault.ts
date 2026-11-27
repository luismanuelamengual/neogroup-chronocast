import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { recharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'adas-blueprint-vault',
  type: 'artifact',
  name: "Ada's Blueprint Vault",
  text: 'At the start of each phase: your artifacts with uses gain 1 use.',
  faction: 'clockwork',
  restriction: { heroes: ['ada-copperwick'] },
  rarity: 'legendary',
  price: 2200,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    recharge(ctx, 'all', 1)
  },
  ai: { value: 6 },
  art: {
    subject:
      "Ada's Blueprint Vault: a copper vault door swung open revealing rolled blueprints and glowing schematics, steampunk clockwork era style"
  }
})
