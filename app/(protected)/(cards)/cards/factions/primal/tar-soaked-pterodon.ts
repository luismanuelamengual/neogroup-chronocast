import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-soaked-pterodon',
  type: 'ally',
  name: 'Tar-Soaked Pterodon',
  text: 'When another Saurian of yours enters: your hero heals 2. When it attacks: your hero heals 3.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  element: 'acid',
  weak: ['ice'],
  price: 1880,
  cost: 4,
  tribe: 'saurian',
  attack: 5,
  health: 10,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'saurian')) {
      healHero(ctx, 2)
    }
  },
  onAttack(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'a dinosaur, the tar-soaked pterodon, roaring, prehistoric jungle era style'
  }
})
