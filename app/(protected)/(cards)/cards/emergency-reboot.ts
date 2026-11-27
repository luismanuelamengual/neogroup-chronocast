import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, heal, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'emergency-reboot',
  type: 'ability',
  subtype: 'program',
  name: 'Emergency Reboot',
  text: 'An ally of yours that has an attachment heals 8 and gains Stealth. Fast.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit?.attachments?.length) {
      heal(ctx, ctx.targets[0], 8)
      grantKeyword(ctx, unit, 'stealth')
    }
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Emergency Reboot: a cyborg slumped against a wall as a power symbol glows on its chest, sparks around, green accents, neon cyberpunk future style'
  }
})
