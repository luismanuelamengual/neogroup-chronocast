import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly, draw, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stardust-drill',
  type: 'ally',
  name: 'Stardust Drill',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'It drills the sky for sparkles.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 4,
  tribe: 'automaton',
  attack: 3,
  health: 12,
  ability: {
    name: 'Extract',
    text: 'It takes 2 damage and you draw a card.',
    cost: 1,
    resource: 'energy',
    ai: { tags: ['draw'] },
    activate(ctx) {
      const unit = self(ctx)

      if (unit) {
        damageAlly(ctx, unit, 2, null)
      }

      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'draw'] },
  art: {
    subject:
      'Stardust Drill: a squat brass drilling machine on spider legs boring into a glittering meteorite, sparks of stardust, full body, gold accents, steampunk steam era style'
  }
})
