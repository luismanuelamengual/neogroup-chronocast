import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'adrenal-pump',
  type: 'attachment',
  subtype: 'implant',
  name: 'Adrenal Pump',
  text: 'Attach to an ally of yours: it gains +2 attack. When it dies, your hero gains 2 energy.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 2,
  targets: ['friendlyAlly'],
  onHostDeath(ctx) {
    gainEnergy(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Adrenal Pump: a chrome heart-shaped pump with glowing green vials plugged into it, on a clinic tray, lime accents, neon cyberpunk future style'
  }
})
