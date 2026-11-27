import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ossuary-knight',
  type: 'ally',
  name: 'Ossuary Knight',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'He was buried with his sword, and kept it.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  tribe: 'undead',
  attack: 3,
  health: 10,
  ability: {
    name: 'Bone Fury',
    text: 'It gains +4 attack this phase.',
    cost: 2,
    resource: 'energy',
    ai: { tags: ['buff'] },
    activate(ctx) {
      const unit = self(ctx)

      if (unit) {
        buffThisPhase(ctx, unit, 4)
      }
    }
  },
  ai: { value: 4, tags: ['ability', 'energy'] },
  art: {
    subject:
      'Ossuary Knight: a skeletal knight in rusted plate armor decorated with skulls raising a notched greatsword, full body, sickly green accents, dark end-of-time void style'
  }
})
