import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'heros-laurel',
  type: 'attachment',
  subtype: 'charm',
  name: "Hero's Laurel",
  text: "Attach to an ally of yours: it gains +3 attack and +3 health, and the rival can't attach cards to it.",
  flavor: 'A legend begins when the crowd starts chanting.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 4,
  attack: 3,
  health: 3,
  targets: ['friendlyAlly'],
  wardsAttachments: true,
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      "Hero's Laurel: a golden laurel wreath glowing with a soft holy light, floating above a marble pedestal, close-up filling the frame, white accents, ancient bronze-age empire style"
  }
})
