import { NextRequest } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@insaplan.com'
    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET

    if (!apiKey || !notifyEmail) {
        return Response.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Verify webhook secret if configured
    if (webhookSecret) {
        const signature = request.headers.get('svix-signature')
        if (!signature || signature !== webhookSecret) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 })
        }
    }

    let body: unknown
    try {
        body = await request.json()
    } catch {
        return Response.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const event = body as { type?: string; data?: { email_id?: string } }

    if (event.type !== 'email.received' || !event.data?.email_id) {
        // Acknowledge other event types without acting
        return Response.json({ received: true })
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.receiving.forward({
        emailId: event.data.email_id,
        to: [notifyEmail],
        from: fromEmail
    })

    if (error) {
        console.error('Failed to forward email:', error)
        return Response.json({ error: 'Failed to forward email' }, { status: 500 })
    }

    return Response.json({ forwarded: true })
}
