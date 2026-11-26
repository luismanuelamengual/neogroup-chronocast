import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-deserter',
  type: 'ally',
  name: 'Hallowed Deserter',
  text: 'When it enters: your other allies gain +2 health.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  element: 'light',
  price: 180,
  cost: 4,
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 0, 2, true)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Hallowed Deserter: a barrel-chested middle-aged foxfolk man with auburn hair in an afro, a thin mustache and a burn scar on the jaw, dressed in a medieval tabard over a space suit liner, dragging a broken standard, with wide-eyed wonder, gold accents, mystic healer style'
  }
})
