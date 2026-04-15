'use server'

import { Resend } from 'resend'
import { createFormSubmission } from '@/lib/queries'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormState = { success: boolean; error?: string } | null

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const message = formData.get('message') as string

    if (!email || !message) {
        return { success: false, error: 'Email and message are required' }
    }

    try {
        await Promise.all([
            createFormSubmission({ formType: 'contact', name, email, company, message }),
            resend.emails.send({
                from: 'Insaplan <support@insaplan.com>',
                to: 'support@insaplan.com',
                subject: `New contact form submission from ${name || email}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name || '—'}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || '—'}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <p style="white-space:pre-wrap">${message}</p>
                `,
            }),
        ])
        return { success: true }
    } catch {
        return { success: false, error: 'Something went wrong. Please try again.' }
    }
}
