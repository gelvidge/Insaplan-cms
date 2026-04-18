import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box, Container, Title, Stack, List, ListItem, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import SolutionHero from '@/components/marketing/SolutionHero'
import CTASection from '@/components/marketing/CTASection'
import SolutionChallenges from '@/components/marketing/SolutionChallenges'
import UseCases from '@/components/marketing/UseCases'
import Background from '@/components/marketing/Background'
import { fetchSolutionBySlug } from '@/lib/queries'
import classes from './page.module.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const solution = await fetchSolutionBySlug(slug).catch(() => null)
    if (!solution) return { title: 'Solution Not Found' }
    const title = (solution.seo as any)?.metaTitle || solution.heroHeadline || ''
    const description = (solution.seo as any)?.metaDescription || solution.heroBody || ''
    const keywords = (solution.seo as any)?.keywords || undefined
    const canonical = (solution.seo as any)?.canonicalUrl || `https://insaplan.com/solutions/${slug}`
    const noIndex = (solution.seo as any)?.noIndex ?? false
    return {
        title,
        description,
        ...(keywords && { keywords }),
        ...(noIndex && { robots: { index: false, follow: false } }),
        alternates: { canonical },
        openGraph: { title, description, url: canonical },
    }
}

export default async function SolutionPage({ params }: Props) {
    const { slug } = await params

    const solution = await fetchSolutionBySlug(slug).catch(() => null)
    if (!solution) notFound()

    const challenges = solution.challenges ?? []
    const useCases = solution.useCases ?? []
    const keyFeatures = solution.keyFeatures ?? []


    return (
        <div className={classes.page}>
            <Background />
            <div className={classes.content}>
                <SolutionHero
                    headline={solution.heroHeadline}
                    headlineAccent={solution.heroHeadlineAccent}
                    body={solution.heroBody}
                    steps={solution.heroSteps}
                />

                <SolutionChallenges challenges={challenges} />

                <UseCases useCases={useCases} />

                {keyFeatures.length > 0 && (
                    <Box py={80}>
                        <Container size="xl">
                            <Stack gap="xl">
                                <Stack gap="md" align="center" ta="center">
                                    <Title order={2} c="gray.0">Key Features</Title>
                                </Stack>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    icon={
                                        <ThemeIcon color="green.5" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }
                                >
                                    {keyFeatures.map((f: any, i: number) => (
                                        <ListItem key={i} c="gray.3">{f.title}</ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </Container>
                    </Box>
                )}

                <CTASection />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return []
}

export const dynamicParams = true
