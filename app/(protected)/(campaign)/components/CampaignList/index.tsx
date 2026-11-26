'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { STAGES_PER_CAMPAIGN } from '@/app/(protected)/(campaign)/data/difficulty'
import { CampaignSummary } from '@/app/(protected)/(campaign)/models/CampaignDto'
import { storyKey } from '@/app/(protected)/(campaign)/utils/storyKey'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

/**
 * The campaigns (/campaign): one per hero, with the player's progress and the
 * exclusive card each one gives. The ones of heroes the player does not own go
 * last, blurred and with a padlock, like the locked cards of the shop.
 */
export default function CampaignList({ campaigns }: { campaigns: CampaignSummary[] }) {
  useMusic('campaign')
  const t = useT()
  const cardName = useCardName()
  const sorted = [...campaigns].sort((a, b) => Number(b.owned) - Number(a.owned))

  return (
    <div className="campaign-list">
      <header>
        <GameButton color="secondary" size="small" href="/play">
          ← {t('campaign.back')}
        </GameButton>
        <h1>{t('campaign.title')}</h1>
      </header>
      <p className="campaign-list__text">{t('campaign.text')}</p>
      <ul>
        {sorted.map((campaign) => {
          const hero = getCard(campaign.heroId)

          return (
            <li
              key={campaign.heroId}
              className={classNames(`faction-${hero.faction}`, {
                locked: !campaign.owned,
                completed: campaign.completed
              })}
            >
              <div className="campaign-list__hero">
                <div className="campaign-list__veil" aria-hidden={!campaign.owned}>
                  <CardView card={hero} />
                </div>
                {!campaign.owned && (
                  <span className="campaign-list__lock">
                    <span aria-hidden="true">🔒</span>
                  </span>
                )}
              </div>
              <div className="campaign-list__info">
                <h2>{t(storyKey(campaign.heroId, 'title'))}</h2>
                <strong>{cardName(hero)}</strong>
                <p className="campaign-list__veil" aria-hidden={!campaign.owned}>
                  {t(storyKey(campaign.heroId, 'intro'))}
                </p>
                <div className="campaign-list__progress campaign-list__veil" aria-label={t('campaign.map')}>
                  {Array.from({ length: STAGES_PER_CAMPAIGN }, (_, index) => (
                    <span key={index} className={classNames({ won: index < campaign.stage })} />
                  ))}
                  <b>
                    {campaign.completed
                      ? `✓ ${t('campaign.completed')}`
                      : t('campaign.progress', { won: campaign.stage, total: STAGES_PER_CAMPAIGN })}
                  </b>
                </div>
                <div className="campaign-list__reward campaign-list__veil" aria-hidden={!campaign.owned}>
                  <span>
                    🎁 {t('campaign.exclusive')}: <b>{cardName(campaign.rewardCardId)}</b>
                  </span>
                </div>
                {campaign.owned ? (
                  <GameButton color="primary" href={`/campaign/${campaign.heroId}`}>
                    {campaign.completed
                      ? t('campaign.replay')
                      : campaign.stage > 0
                        ? t('campaign.continue')
                        : t('campaign.play')}
                  </GameButton>
                ) : (
                  <div className="campaign-list__locked">
                    <span>🔒 {t('campaign.locked')}</span>
                    <GameButton color="secondary" size="small" href="/shop?tab=cards">
                      {t('campaign.toShop')}
                    </GameButton>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
