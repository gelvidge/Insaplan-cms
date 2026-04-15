'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
    Container,
    Group,
    Button,
    Menu,
    Burger,
    Drawer,
    Stack,
    Text,
    Anchor,
    Divider,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './Navigation.module.css'


type NavChild = { label: string; url: string; description?: string }
type NavItem = {
    label: string
    type: 'custom' | 'page' | 'dropdown'
    url?: string
    children?: NavChild[]
}

const FALLBACK_ITEMS: NavItem[] = [
    {
        label: 'Product',
        type: 'dropdown',
        children: [
            { label: 'Overview', url: '/product/overview' },
            { label: 'Features', url: '/product/features' },
        ],
    },
    {
        label: 'Solutions',
        type: 'dropdown',
        children: [
            { label: 'Sales', url: '/solutions/sales' },
            { label: 'Marketing', url: '/solutions/marketing' },
            { label: 'Start Ups', url: '/solutions/startups' },
            { label: 'Enterprise', url: '/solutions/enterprise' },
            { label: 'Not for Profit', url: '/solutions/nonprofit' },
        ],
    },
    {
        label: 'Resources',
        type: 'dropdown',
        children: [
            { label: 'Blog', url: '/resources/blog' },
            { label: 'FAQs', url: '/resources/faqs' },
            { label: 'Knowledge Base', url: '/resources/knowledge-base' },
            { label: 'Support', url: '/resources/support' },
        ],
    },
    { label: 'Pricing', type: 'custom', url: '/pricing' },
    {
        label: 'About',
        type: 'dropdown',
        children: [
            { label: 'Contact Us', url: '/contact' },
            { label: 'Legal', url: '/legal' },
        ],
    },
]

interface NavigationProps {
    menuItems?: NavItem[]
    logoText?: string
    ctaLabel?: string
    ctaUrl?: string
}

export const Navigation = ({ menuItems, logoText = 'Insaplan', ctaLabel = 'Request Access', ctaUrl = '/contact' }: NavigationProps) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (y) => {
        setScrolled(y > 50)
    })

    const items: NavItem[] = menuItems?.length ? menuItems : FALLBACK_ITEMS

    return (
        <>
            <motion.div
                className={classes.navigation}
                animate={{
                    boxShadow: scrolled
                        ? '0 2px 24px rgba(0,0,0,0.28)'
                        : '0 0px 0px rgba(0,0,0,0)',
                    borderBottomColor: scrolled
                        ? 'rgba(255,255,255,0.06)'
                        : 'rgba(255,255,255,0)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <Container size={1440}>
                    <Group justify="space-between" h={70}>
                        <Anchor component={Link} href="/" className={classes.logo}>
                            <Text size="xl" fw={700} className={classes.logoText}>
                                {logoText}
                            </Text>
                        </Anchor>

                        <Group gap="xs" visibleFrom="md">
                            {items.map((item) =>
                                item.type === 'dropdown' && item.children?.length ? (
                                    <Menu key={item.label} trigger="hover" openDelay={100} closeDelay={200}>
                                        <Menu.Target>
                                            <Button
                                                variant="subtle"
                                                className={classes.menuButton}
                                                rightSection={<IconChevronDown size={16} />}
                                                style={{ color: '#FFFFFF' }}
                                            >
                                                {item.label}
                                            </Button>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            {item.children.map((child) => (
                                                <Menu.Item
                                                    key={child.label}
                                                    component={Link}
                                                    href={child.url}
                                                    className={classes.menuItem}
                                                >
                                                    {child.label}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Dropdown>
                                    </Menu>
                                ) : (
                                    <Button
                                        key={item.label}
                                        variant="subtle"
                                        className={classes.menuButton}
                                        component={Link}
                                        href={item.url || '/'}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            )}
                        </Group>

                        <Group gap="sm" visibleFrom="md">
                            <Button
                                variant="gradient"
                                gradient={{ from: 'deepblue.9', to: 'purple.6', deg: 45 }}
                                component={Link}
                                href={ctaUrl}
                            >
                                {ctaLabel}
                            </Button>
                        </Group>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" color="#FFFFFF" />
                    </Group>
                </Container>
            </motion.div>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                hiddenFrom="md"
                zIndex={1000}
            >
                <Stack gap="lg">
                    <Text size="xl" fw={700}>{logoText}</Text>
                    <Divider />
                    {items.map((item) =>
                        item.type === 'dropdown' && item.children?.length ? (
                            <Stack key={item.label} gap="sm">
                                <Text size="xs" tt="uppercase" fw={600} c="dimmed">{item.label}</Text>
                                {item.children.map((child) => (
                                    <Anchor
                                        key={child.label}
                                        component={Link}
                                        href={child.url}
                                        className={classes.mobileLink}
                                        onClick={closeDrawer}
                                    >
                                        {child.label}
                                    </Anchor>
                                ))}
                            </Stack>
                        ) : (
                            <Anchor
                                key={item.label}
                                component={Link}
                                href={item.url || '/'}
                                className={classes.mobileLink}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Anchor>
                        )
                    )}
                    <Divider my="md" />
                    <Button
                        variant="gradient"
                        gradient={{ from: 'deepblue.9', to: 'purple.6', deg: 45 }}
                        component={Link}
                        href={ctaUrl}
                        fullWidth
                        onClick={closeDrawer}
                    >
                        {ctaLabel}
                    </Button>
                </Stack>
            </Drawer>
        </>
    )
}

export default Navigation
