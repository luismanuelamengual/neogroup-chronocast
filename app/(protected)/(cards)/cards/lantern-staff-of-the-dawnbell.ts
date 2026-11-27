import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-the-dawnbell',
  type: 'weapon',
  subtype: 'staff',
  name: 'Lantern Staff of the Dawnbell',
  text: 'When it is equipped: your Magi gain Lifesteal.',
  flavor: 'It lights the path to morning.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  keywords: ['lifesteal'],
  attack: 4,
  durability: 3,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'magus')) {
      grantKeyword(ctx, unit, 'lifesteal')
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Lantern Staff of the Dawnbell: a single staff made of copper with green patina, on a pile of old coins, dramatic backlight, rose pink accents, mystic healer style'
  }
})
