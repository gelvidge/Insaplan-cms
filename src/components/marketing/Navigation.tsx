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
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (y) => {
        setScrolled(y > 50)
    })

    const items: NavItem[] = (menuItems as NavItem[]) ?? []

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
                                                    href={child.url || '/'}
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
                    <Logo height={40} />
                    <Divider />
                    {items.map((item) =>
                        item.type === 'dropdown' && item.children?.length ? (
                            <Stack key={item.label} gap="sm">
                                <Text size="xs" tt="uppercase" fw={600} c="dimmed">{item.label}</Text>
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
                </Stack>
            </Drawer>
        </>
    )
}

export default Navigation
