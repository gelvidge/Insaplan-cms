'use server'

import { Resend } from 'resend'
import { createFormSubmission } from '@/lib/queries'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormState = { success: boolean; error?: string } | null

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const formType = (formData.get('formType') as string) || 'contact'
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const message = formData.get('message') as string

    if (!email) {
        return { success: false, error: 'Email is required' }
    }

    if (formType !== 'demo' && !message) {
        return { success: false, error: 'Message is required' }
    }

    try {
        await createFormSubmission({
            formType: formType === 'demo' ? 'demo' : 'contact',
            name,
            email,
            company,
            message,
        })
    } catch (err) {
        console.error('Failed to save form submission:', err)
        return { success: false, error: 'Something went wrong. Please try again.' }
    }

    // Notification is handled by the Payload form submission hook,
    // so avoid sending a duplicate email from the action.
    return { success: true }
}
