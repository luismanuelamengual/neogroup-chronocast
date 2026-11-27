import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-bard',
  type: 'ally',
  name: 'Patient Bard',
  text: 'When it enters: draw the first attachment of your deck.',
  flavor: 'He waits for the perfect moment to sing.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  keywords: ['ranged'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    seekType(ctx, ctx.owner, 'attachment')
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Patient Bard: a barrel-chested young goblin woman with platinum blond hair in a high ponytail and bushy eyebrows, wearing a feathered cap, dressed in viking furs over a modern raincoat, playing a strange lute, with a sly grin, indigo accents, hunter style'
  }
})
