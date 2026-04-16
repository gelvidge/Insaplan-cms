'use server'

import { createFormSubmission } from '@/lib/queries'

export type WaitlistFormState =
    | { status: 'idle' }
    | { status: 'success' }
    | { status: 'error'; message: string }

export async function submitWaitlistForm(
    _prevState: WaitlistFormState,
    formData: FormData,
): Promise<WaitlistFormState> {
    const email = (formData.get('email') as string | null)?.trim()

    if (!email) return { status: 'error', message: 'Please enter your email.' }

    try {
        await createFormSubmission({
            formType: 'waitlist',
            email,
        })

        return { status: 'success' }
    } catch {
        return { status: 'error', message: 'Something went wrong. Please try again.' }
    }
}
