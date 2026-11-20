import { Resend } from 'resend'

// Lazily constructed: the Resend SDK throws at construction time when given an
// empty API key, so building it eagerly would crash every environment without
// RESEND_API_KEY as soon as this module is imported.
let resend: Resend | null = null

function getResendClient(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }

  return resend
}

interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL ?? 'ChronoCast <noreply@chronocast.app>'

  // Without an API key (local dev) there is no way to deliver the email: log it
  // instead, so the verification / reset link can still be opened by hand.
  if (!process.env.RESEND_API_KEY) {
    // eslint-disable-next-line no-console
    console.warn(`[email] RESEND_API_KEY not set — skipping email "${subject}" to ${to}\n${html}`)

    return
  }

  await getResendClient().emails.send({ from, to, subject, html })
}

/** Wraps a call-to-action email body in the ChronoCast look (white card on cream + vivid button). */
export function renderActionEmail({
  title,
  intro,
  actionLabel,
  actionUrl,
  footer
}: {
  title: string
  intro: string
  actionLabel: string
  actionUrl: string
  footer: string
}): string {
  return `
    <div style="background:#fff8ee; padding:24px 12px;">
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background:#ffffff; color:#2b2350; padding:32px; border:2px solid #d9d0ff; border-radius:20px;">
        <h2 style="margin-top:0;color:#2b2350;letter-spacing:0.5px;">${title}</h2>
        <p style="line-height:1.5;">${intro}</p>
        <a href="${actionUrl}" style="display:inline-block;padding:14px 28px;background:#ff5a8a;color:#ffffff;border:2px solid #2b2350;border-radius:14px;text-decoration:none;font-weight:bold;letter-spacing:0.5px;">
          ${actionLabel}
        </a>
        <p style="margin-top:24px;color:#6b6590;font-size:13px;">${footer}</p>
      </div>
    </div>
  `
}
