'use client'

import './index.scss'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { translateCard } from '@/app/i18n/cards'
import { useI18n } from '@/app/i18n/I18nProvider'
import { Translator } from '@/app/i18n/translate'

const TYPE_GLYPHS: Record<CardDefinition['type'], string> = {
  hero: '👑',
  ally: '⚔️',
  ability: '✨',
  weapon: '🗡️',
  armor: '🛡️',
  item: '🧪',
  location: '🏛️',
  trap: '🪤'
}

/** "Ally · Bronze", "Hero · Bronze Warrior", "Weapon · Warrior class", "Ability · Signature". */
function typeLine(card: CardDefinition, t: Translator): string {
  const type = t(`game.types.${card.type}`)
  const faction = t(`game.factions.${card.faction}`)

  if (card.type === 'hero') {
    return t('game.typeLine.hero', {
      type,
      faction,
      heroClass: card.heroClass ? t(`game.classes.${card.heroClass}`) : ''
    })
  }

  switch (card.restriction.kind) {
    case 'class':
      return t('game.typeLine.class', { type, heroClass: t(`game.classes.${card.restriction.heroClass}`) })
    case 'hero':
      return t('game.typeLine.signature', { type })
    default:
      return t('game.typeLine.faction', { type, faction })
  }
}

/** The keywords line of a card, e.g. "Guardian. Thorns 4." */
function keywordsLine(card: CardDefinition, t: Translator): string {
  return (card.keywords ?? [])
    .map((keyword) => `${t(`game.keywords.${keyword}`)}${keyword === 'thorns' ? ` ${card.thorns}` : ''}.`)
    .join(' ')
}

interface CardViewProps {
  card: CardDefinition
  /** URL of the illustration (default: the card's own, processed by `yarn art`; a placeholder while there is none). */
  art?: string
}

/**
 * A card, drawn from its definition: vivid frame in the color of its faction,
 * cost, rarity gem, illustration, name, type line, rules text and stats.
 * Its texts in the player's language when the card has a translation
 * (app/i18n/cards), in English otherwise.
 */
export default function CardView({ card: original, art }: CardViewProps) {
  const { t, locale } = useI18n()
  const ownArt = useCardArt(original.id)
  const card = translateCard(original, locale)
  const keywords = keywordsLine(card, t)
  const speed = card.speed ?? card.ability?.speed
  const image = art ?? ownArt

  return (
    <article className={`card-view faction-${card.faction} rarity-${card.rarity} type-${card.type}`}>
      <div className="card-view__art">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={card.name} loading="lazy" />
        ) : (
          <span className="card-view__placeholder" title={card.art.subject}>
            {TYPE_GLYPHS[card.type]}
          </span>
        )}
      </div>

      {card.type !== 'hero' && <span className="card-view__cost">{card.cost}</span>}
      <span className="card-view__gem" title={t(`game.rarities.${card.rarity}`)} />
      {speed && speed !== 'normal' && <span className="card-view__speed">{t(`game.speeds.${speed}`)}</span>}

      <h3 className="card-view__name">{card.name}</h3>
      <p className="card-view__type">{typeLine(card, t)}</p>

      <div className="card-view__text">
        {keywords && <p className="card-view__keywords">{keywords}</p>}
        {card.text && !card.ability && <p>{card.text}</p>}
        {card.ability && (
          <p className="card-view__ability">
            <strong>
              {card.ability.name} ({card.ability.cost}):
            </strong>{' '}
            {card.ability.text}
          </p>
        )}
        {card.flavor && <p className="card-view__flavor">{card.flavor}</p>}
      </div>

      <div className="card-view__stats">
        {card.attack != null && <span className="card-view__stat card-view__stat--attack">{card.attack}</span>}
        {card.armor != null && <span className="card-view__stat card-view__stat--armor">{card.armor}</span>}
        <span className="card-view__spacer" />
        {card.durability != null && (
          <span className="card-view__stat card-view__stat--durability">{card.durability}</span>
        )}
        {card.health != null && <span className="card-view__stat card-view__stat--health">{card.health}</span>}
      </div>
    </article>
  )
}
