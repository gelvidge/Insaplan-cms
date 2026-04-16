import type { CollectionAfterChangeHook } from 'payload'
import { Resend } from 'resend'

const formTypeLabels: Record<string, string> = {
    contact: 'Contact',
    demo: 'Demo Request',
    waitlist: 'Waitlist',
    newsletter: 'Newsletter',
    support: 'Support'
}

export const notifyFormSubmission: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
    if (operation !== 'create') return doc

    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL

    if (!apiKey || !notifyEmail) {
        req.payload.logger.warn(
            'RESEND_API_KEY or NOTIFY_EMAIL not configured — skipping form submission notification'
        )
        return doc
    }

    const resend = new Resend(apiKey)
    const label = formTypeLabels[doc.formType] ?? doc.formType

    const rows = [
        doc.name && `<tr><th>Name</th><td>${doc.name}</td></tr>`,
        `<tr><th>Email</th><td>${doc.email}</td></tr>`,
        doc.company && `<tr><th>Company</th><td>${doc.company}</td></tr>`,
        doc.phone && `<tr><th>Phone</th><td>${doc.phone}</td></tr>`,
        doc.message && `<tr><th>Message</th><td style="white-space:pre-wrap">${doc.message}</td></tr>`,
        doc.source && `<tr><th>Source</th><td>${doc.source}</td></tr>`
    ]
        .filter(Boolean)
        .join('\n')

    const html = `
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
  <tbody>
    <tr><th colspan="2" style="text-align:left;padding-bottom:8px">New ${label} submission</th></tr>
    ${rows}
  </tbody>
</table>`

    try {
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL ?? 'noreply@insaplan.com',
            to: notifyEmail,
            subject: `New ${label} submission from ${doc.name ?? doc.email}`,
            html
        })
        req.payload.logger.info(`Notification sent for form submission ${doc.id}`)
    } catch (error) {
        req.payload.logger.error(
            `Failed to send form submission notification: ${error instanceof Error ? error.message : String(error)}`
        )
    }

    return doc
}
