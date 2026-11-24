'use client'

import './index.scss'
import classNames from 'classnames'
import { RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { ELEMENT_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { Element } from '@/app/(protected)/(engine)/models/Element'
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
  trap: '🪤',
  attachment: '🔗',
  artifact: '🏺'
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

  const tribe = card.tribe ? ` · ${t(`game.tribes.${card.tribe}`)}` : ''

  switch (card.restriction.kind) {
    case 'class':
      return t('game.typeLine.class', { type, heroClass: t(`game.classes.${card.restriction.heroClass}`) }) + tribe
    case 'hero':
      return t('game.typeLine.signature', { type }) + tribe
    default:
      return t('game.typeLine.faction', { type, faction }) + tribe
  }
}

/** The names of some elements, with their icons: "🔥 Fire, ❄️ Ice". */
function elementList(elements: Element[], t: Translator): string {
  return elements.map((element) => `${ELEMENT_ICONS[element]} ${t(`game.elements.${element}`)}`).join(', ')
}

/** The keywords line of a card, e.g. "🔥 Fire. Guardian. Thorns 4. Resists: ❄️ Ice." */
function keywordsLine(card: CardDefinition, t: Translator): string {
  // Abilities and the rest say it in their text; allies and weapons attack with it.
  const attacks = card.type === 'ally' || card.type === 'weapon'
  const element = card.element && attacks ? [`${elementList([card.element], t)}.`] : []
  const keywords = (card.keywords ?? []).map(
    (keyword) => `${t(`game.keywords.${keyword}`)}${keyword === 'thorns' ? ` ${card.thorns}` : ''}.`
  )
  const resist = card.resist?.length ? [`${t('game.resists', { elements: elementList(card.resist, t) })}.`] : []
  const weak = card.weak?.length ? [`${t('game.weakTo', { elements: elementList(card.weak, t) })}.`] : []

  return [...element, ...keywords, ...resist, ...weak].join(' ')
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
/** Font sizes (px, at zoom 1) of the rules box and the name: they start at the largest and shrink until the text fits. */
const TEXT_SIZE = { max: 12, min: 6.5 }
const NAME_SIZE = { max: 17, min: 10 }
const SIZE_STEP = 0.5
/** Below this size (px) the flavor text is dropped to give the rules more room. */
const FLAVOR_MIN_SIZE = 11
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * Shrinks the letters of an element of fixed size until its content fits:
 * every card has its areas in the same place and of the same size, and a long
 * text is set smaller instead of growing its box.
 */
function useFitText(ref: RefObject<HTMLElement | null>, size: { max: number; min: number }, key: string) {
  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const fit = () => {
      const flavor = element.querySelector<HTMLElement>('.card-view__flavor')

      const shrink = () => {
        let current = size.max

        element.style.fontSize = `${current}px`

        while (
          current > size.min &&
          (element.scrollHeight > element.clientHeight + 1 || element.scrollWidth > element.clientWidth + 1)
        ) {
          current -= SIZE_STEP
          element.style.fontSize = `${current}px`
        }

        return current
      }

      if (flavor) {
        flavor.style.display = ''
      }

      // The flavor text is the first to go when the rules need the room.
      if (shrink() < FLAVOR_MIN_SIZE && flavor) {
        flavor.style.display = 'none'
        shrink()
      }
    }

    fit()
    // The display font may arrive later and take more room.
    document.fonts?.ready.then(fit)
  }, [ref, size, key])
}

export default function CardView({ card: original, art }: CardViewProps) {
  const { t, locale } = useI18n()
  const ownArt = useCardArt(original.id)
  const card = translateCard(original, locale)
  const keywords = keywordsLine(card, t)
  const speed = card.speed ?? card.ability?.speed
  const image = art ?? ownArt
  // Abilities, items, locations and traps have no stats: without the row, the text keeps clear of the bottom edge.
  const hasStats = card.attack != null || card.armor != null || card.durability != null || card.health != null
  // Armors and weapons spell out what their two numbers mean.
  const gearRule =
    card.type === 'armor'
      ? t('game.gearRules.armor', { reduction: card.armor ?? 0, durability: card.durability ?? 1 })
      : card.type === 'weapon'
        ? t('game.gearRules.weapon', { durability: card.durability ?? 1 })
        : null
  // An ally with an ability has more to say: no flavor text.
  const allyAbility = !!card.ability && card.type !== 'hero'
  const textRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useFitText(textRef, TEXT_SIZE, `${locale}:${card.id}`)
  useFitText(nameRef, NAME_SIZE, `${locale}:${card.id}`)

  return (
    <article
      className={classNames('card-view', `faction-${card.faction}`, `rarity-${card.rarity}`, `type-${card.type}`, {
        'full-art': !!image,
        'with-stats': hasStats
      })}
    >
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

      <h3 className="card-view__name" ref={nameRef}>
        {card.name}
      </h3>
      <p className="card-view__type">{typeLine(card, t)}</p>

      <div className="card-view__text" ref={textRef}>
        {keywords && <p className="card-view__keywords">{keywords}</p>}
        {/* A hero's text repeats its ability; an ally's text is apart from it. */}
        {gearRule && <p className="card-view__rule">{gearRule}</p>}
        {card.text && (!card.ability || card.type !== 'hero') && <p>{card.text}</p>}
        {card.ability && (
          <p className="card-view__ability">
            <strong>
              {card.ability.name} ({card.type === 'hero' || card.ability.resource === 'energy' ? '⚡' : ''}
              {card.ability.cost}):
            </strong>{' '}
            {card.ability.text}
          </p>
        )}
        {card.flavor && !allyAbility && <p className="card-view__flavor">{card.flavor}</p>}
      </div>

      {hasStats && (
        <div className="card-view__stats">
          {card.attack != null && <span className="card-view__stat card-view__stat--attack">{card.attack}</span>}
          {card.armor != null && <span className="card-view__stat card-view__stat--armor">{card.armor}</span>}
          <span className="card-view__spacer" />
          {card.durability != null && (
            <span className="card-view__stat card-view__stat--durability">{card.durability}</span>
          )}
          {card.health != null && <span className="card-view__stat card-view__stat--health">{card.health}</span>}
        </div>
      )}
    </article>
  )
}
