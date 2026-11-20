import { CampaignStage } from '@/app/(protected)/(campaign)/models/Campaign'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { Translator } from '@/app/i18n/translate'

/** The adverse situations of a battle, one line each (empty: an even duel). */
export function describeSetup(
  stage: CampaignStage,
  t: Translator,
  name: (id: string) => string = (id) => getCard(id).name
): string[] {
  const cpu = stage.cpuSetup
  const lines: string[] = []

  if (cpu.allies?.length) {
    lines.push(t('campaign.setup.allies', { cards: cpu.allies.map(name).join(', ') }))
  }

  if (cpu.chronosCapacity) {
    lines.push(t('campaign.setup.chronos', { count: cpu.chronosCapacity }))
  }

  if (cpu.extraHealth) {
    lines.push(t('campaign.setup.extraHealth', { count: cpu.extraHealth }))
  }

  if (cpu.location) {
    lines.push(t('campaign.setup.location', { card: name(cpu.location) }))
  }

  if (cpu.weapon) {
    lines.push(t('campaign.setup.weapon', { card: name(cpu.weapon) }))
  }

  if (cpu.armor) {
    lines.push(t('campaign.setup.armor', { card: name(cpu.armor) }))
  }

  if (stage.playerSetup.handSize) {
    lines.push(t('campaign.setup.handSize', { count: stage.playerSetup.handSize }))
  }

  return lines
}
