import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'precise-clockmaker',
  type: 'ally',
  name: 'Precise Clockmaker',
  text: 'When it enters: you gain 1 Chronos this phase.',
  flavor: 'She is never late. She does not allow it.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 690,
  cost: 5,
  tribe: 'inventor',
  attack: 6,
  health: 12,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['ramp'] },
  art: {
    subject:
      'Precise Clockmaker: a barrel-chested middle-aged man with tan skin, sandy hair in a tall mohawk, a forked beard and an eyepatch, wearing a magnifying loupe over one eye, dressed in a padded flight jacket, clutching a rolled scroll, mid-swing, with grim determination, cobalt blue accents, steampunk steam era style'
  }
})
