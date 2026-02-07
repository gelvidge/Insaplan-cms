'use server'

import { createFormSubmission } from '@/lib/queries'

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
        await createFormSubmission({
            formType: 'contact',
            name,
            email,
            company,
            message,
        })
        return { success: true }
    } catch {
        return { success: false, error: 'Something went wrong. Please try again.' }
    }
}
