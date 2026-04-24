'use client'

import { useState, useEffect } from 'react'
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
import Logo from './Logo'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'
import classes from './Navigation.module.css'


type NavChild = { label: string; url: string; description?: string | null; id?: string | null }
type NavItem = {
    label: string
    type: 'custom' | 'page' | 'dropdown'
    url?: string | null
    children?: NavChild[] | null
    openInNewTab?: boolean | null
    [key: string]: unknown
}


interface NavigationProps {
    menuItems?: NavItem[] | null
}

export const Navigation = ({ menuItems }: NavigationProps) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const scrollEl = document.getElementById('scroll-root')
        const onScroll = () => setScrolled((scrollEl?.scrollTop ?? window.scrollY) > 50)
        const target = scrollEl ?? window
        target.addEventListener('scroll', onScroll, { passive: true })
        return () => target.removeEventListener('scroll', onScroll)
    }, [])

    const items: NavItem[] = (menuItems as NavItem[]) ?? []

    return (
        <>
            <div
                className={`${classes.navigation} ${scrolled ? classes.navigationScrolled : ''}`}
            >
                <Container size={1440}>
                    <Group justify="space-between" h={70}>
                        <Link href="/" className={classes.logo}>
                            <Logo height={40} />
                        </Link>

                        <Group gap="xs" visibleFrom="md">
                            {items.map((item) =>
                                item.type === 'dropdown' && item.children?.length ? (
                                    <Menu key={item.label} trigger="hover" openDelay={100} closeDelay={200}>
                                        <Menu.Target>
                                            <Button
                                                variant="subtle"
                                                className={classes.menuButton}
                                                rightSection={<IconChevronDown size={16} />}
                                                style={{ color: 'white' }}
                                            >
                                                {item.label}
                                            </Button>
                                        </Menu.Target>
                                        <Menu.Dropdown style={{ background: 'white', borderColor: 'var(--mantine-color-gray-2)' }}>
                                            {item.children.map((child) => (
                                                <Menu.Item
                                                    key={child.label}
                                                    component={Link}
                                                    href={child.url || '/'}
                                                    className={classes.menuItem}
                                                    style={{ color: 'var(--mantine-color-gray-9)' }}
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
                                        style={{ color: 'white' }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            )}
                            <Button
                                component={Link}
                                href="/request-demo"
                                variant="white"
                                color="blue"
                                className={classes.ctaButton}
                            >
                                Request Demo
                            </Button>
                        </Group>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" color="white" />
                    </Group>
                </Container>
            </div>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                hiddenFrom="md"
                zIndex={1000}
                styles={{ content: { backgroundColor: 'var(--mantine-color-blue-7)' }, header: { backgroundColor: 'var(--mantine-color-blue-7)' } }}
            >
                <Stack gap="lg">
                    <Logo height={40} />
                    <Divider />
                    {items.map((item) =>
                        item.type === 'dropdown' && item.children?.length ? (
                            <Stack key={item.label} gap="sm">
                                <Text size="xs" tt="uppercase" fw={600} c="white">{item.label}</Text>
                                {item.children.map((child) => (
                                    <Anchor
                                        key={child.label}
                                        component={Link}
                                        href={child.url || '/'}
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
                    <Button
                        component={Link}
                        href="/request-demo"
                        variant="outline"
                        color="white"
                        className={classes.mobileCtaButton}
                        onClick={closeDrawer}
                    >
                        Request Demo
                    </Button>
                </Stack>
            </Drawer>
        </>
    )
}

export default Navigation
