import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firewall-implant',
  type: 'attachment',
  subtype: 'implant',
  name: 'Firewall Implant',
  text: 'Attach to an ally of yours: it gains +2 health, and the damage it takes from anything but attacks is halved.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  health: 2,
  targets: ['friendlyAlly'],
  modifyDamage(ctx, target, amount, source) {
    return isHost(ctx, target) && !source?.attack ? Math.floor(amount / 2) : amount
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Firewall Implant: a translucent hexagonal energy shield projected from a temple implant, deflecting sparks, orange accents, neon cyberpunk future style'
  }
})
