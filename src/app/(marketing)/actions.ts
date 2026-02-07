'use server'

import { createFormSubmission } from '@/lib/queries'

export async function submitWaitlistForm(formData: FormData) {
    const email = formData.get('email') as string

    if (!email) return

    await createFormSubmission({
        formType: 'waitlist',
        email,
    })
}
