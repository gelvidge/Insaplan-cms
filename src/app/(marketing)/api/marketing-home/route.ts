import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

export async function GET() {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({ slug: 'marketing-home' as any })
    return NextResponse.json(data)
}

