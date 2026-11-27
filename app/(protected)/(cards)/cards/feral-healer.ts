import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'feral-healer',
  type: 'ally',
  name: 'Feral Healer',
  text: 'When it attacks: the ally it attacks becomes your Prey.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 3,
  health: 8,
  onAttack(ctx, target) {
    markPrey(ctx, target)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Feral Healer: a broad-shouldered middle-aged neanderthal woman with olive skin, auburn hair in twin buns and sharp cheekbones, dressed in a leopard-skin wrap with bone beads, grinding herbs in a stone bowl, with a serene smile, lime green accents, prehistoric jungle era style'
  }
})
