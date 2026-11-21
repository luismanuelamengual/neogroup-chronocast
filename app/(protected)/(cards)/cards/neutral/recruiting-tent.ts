import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'recruiting-tent',
  type: 'artifact',
  name: 'Recruiting Tent',
  text: 'Artifact. Each ally of yours that enters has +4 health.',
  flavor: 'Sign here, get a helmet, march.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 2,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a large military canvas tent with banners and a queue of recruits receiving helmets'
  }
})
