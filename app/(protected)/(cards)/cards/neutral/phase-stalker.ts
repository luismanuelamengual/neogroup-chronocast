import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phase-stalker',
  type: 'ally',
  name: 'Phase Stalker',
  text: '',
  flavor: 'It strikes from the moment between moments.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 22,
  health: 15,
  keywords: ['stealth', 'poison'],
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a sleek shadowy predator half-faded out of reality, with venom dripping from its fangs'
  }
})
