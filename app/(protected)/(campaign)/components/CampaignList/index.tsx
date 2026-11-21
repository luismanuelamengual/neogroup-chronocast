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

/** The campaigns (/campaign): one per hero, with the player's progress and the exclusive card each one gives. */
export default function CampaignList({ campaigns }: { campaigns: CampaignSummary[] }) {
  useMusic('campaign')
  const t = useT()
  const cardName = useCardName()

  return (
    <div className="campaign-list">
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('campaign.back')}
        </GameButton>
        <h1>{t('campaign.title')}</h1>
      </header>
      <p className="campaign-list__text">{t('campaign.text')}</p>
      <ul>
        {campaigns.map((campaign) => {
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
                <CardView card={hero} />
              </div>
              <div className="campaign-list__info">
                <h2>{t(storyKey(campaign.heroId, 'title'))}</h2>
                <strong>{cardName(hero)}</strong>
                <p>{t(storyKey(campaign.heroId, 'intro'))}</p>
                <div className="campaign-list__progress" aria-label={t('campaign.map')}>
                  {Array.from({ length: STAGES_PER_CAMPAIGN }, (_, index) => (
                    <span key={index} className={classNames({ won: index < campaign.stage })} />
                  ))}
                  <b>
                    {campaign.completed
                      ? `✓ ${t('campaign.completed')}`
                      : t('campaign.progress', { won: campaign.stage, total: STAGES_PER_CAMPAIGN })}
                  </b>
                </div>
                <div className="campaign-list__reward">
                  <span>
                    🎁 {t('campaign.exclusive')}: <b>{cardName(campaign.rewardCardId)}</b>
                  </span>
                </div>
                {campaign.owned ? (
                  <GameButton color={campaign.stage > 0 ? 'cyan' : 'gold'} href={`/campaign/${campaign.heroId}`}>
                    {campaign.completed
                      ? t('campaign.replay')
                      : campaign.stage > 0
                        ? t('campaign.continue')
                        : t('campaign.play')}
                  </GameButton>
                ) : (
                  <span className="campaign-list__locked">🔒 {t('campaign.locked')}</span>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
