import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Group,
    Button,
    Menu,
    Burger,
    Drawer,
    Stack,
    Text,
    Anchor,
    Divider
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@tanstack/react-router';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Navigation.module.css';

const menuData = {
    product: [
        { label: 'Overview', link: '/product/overview' },
        { label: 'Features', link: '/product/features' }
    ],
    solutions: [
        { label: 'Sales', link: '/solutions/sales' },
        { label: 'Marketing', link: '/solutions/marketing' },
        { label: 'Start Ups', link: '/solutions/startups' },
        { label: 'Enterprise', link: '/solutions/enterprise' },
        { label: 'Not for Profit', link: '/solutions/nonprofit' }
    ],
    resources: [
        { label: 'Support', link: '/resources/support' },
        { label: 'Knowledge Base', link: '/resources/knowledge-base' }
    ],
    about: [
        { label: 'Contact Us', link: '/contact' },
        { label: 'Legal', link: '/legal' }
    ]
};

export const Navigation = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Box className={`${classes.navigation} ${scrolled ? classes.navigationScrolled : ''}`}>
                <Container size="xl">
                    <Group justify="space-between" h={70}>
                        {/* Logo */}
                        <Anchor component={Link} to="/" className={classes.logo}>
                            <Text size="xl" fw={700} className={classes.logoText}>
                                Insaplan
                            </Text>
                        </Anchor>

                        {/* Desktop Navigation */}
                        <Group gap="xs" visibleFrom="md">
                            <Menu trigger="hover" openDelay={100} closeDelay={200}>
                                <Menu.Target>
                                    <Button
                                        variant="subtle"
                                        className={classes.menuButton}
                                        rightSection={<IconChevronDown size={16} />}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        Product
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {menuData.product.map((item) => (
                                        <Menu.Item
                                            key={item.label}
                                            component={Link}
                                            to={item.link}
                                            className={classes.menuItem}
                                        >
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>

                            <Menu trigger="hover" openDelay={100} closeDelay={200}>
                                <Menu.Target>
                                    <Button
                                        variant="subtle"
                                        className={classes.menuButton}
                                        rightSection={<IconChevronDown size={16} />}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        Solutions
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {menuData.solutions.map((item) => (
                                        <Menu.Item
                                            key={item.label}
                                            component={Link}
                                            to={item.link}
                                            className={classes.menuItem}
                                        >
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>

                            <Menu trigger="hover" openDelay={100} closeDelay={200}>
                                <Menu.Target>
                                    <Button
                                        variant="subtle"
                                        className={classes.menuButton}
                                        rightSection={<IconChevronDown size={16} />}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        Resources
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {menuData.resources.map((item) => (
                                        <Menu.Item
                                            key={item.label}
                                            component={Link}
                                            to={item.link}
                                            className={classes.menuItem}
                                        >
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>

                            <Button
                                variant="subtle"
                                className={classes.menuButton}
                                component={Link}
                                to="/pricing"
                                style={{ color: '#FFFFFF' }}
                            >
                                Pricing
                            </Button>

                            <Menu trigger="hover" openDelay={100} closeDelay={200}>
                                <Menu.Target>
                                    <Button
                                        variant="subtle"
                                        className={classes.menuButton}
                                        rightSection={<IconChevronDown size={16} />}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        About
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    {menuData.about.map((item) => (
                                        <Menu.Item
                                            key={item.label}
                                            component={Link}
                                            to={item.link}
                                            className={classes.menuItem}
                                        >
                                            {item.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>
                        </Group>

                        {/* CTAs */}
                        <Group gap="sm" visibleFrom="md">
                            <Button variant="subtle" component={Link} to="/auth/signin" style={{ color: '#FFFFFF' }}>
                                Sign In
                            </Button>
                            <Button
                                variant="gradient"
                                gradient={{ from: 'deepblue.9', to: 'purple.6', deg: 45 }}
                                component={Link}
                                to="/auth/signup"
                            >
                                Start Free Trial
                            </Button>
                        </Group>

                        {/* Mobile Burger */}
                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" color="#FFFFFF" />
                    </Group>
                </Container>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                hiddenFrom="md"
                zIndex={1000}
            >
                <Stack gap="lg">
                    <Text size="xl" fw={700}>
                        Insaplan
                    </Text>
                    <Divider />

                    <Stack gap="sm">
                        <Text size="xs" tt="uppercase" fw={600} c="dimmed">
                            Product
                        </Text>
                        {menuData.product.map((item) => (
                            <Anchor
                                key={item.label}
                                component={Link}
                                to={item.link}
                                className={classes.mobileLink}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Anchor>
                        ))}
                    </Stack>

                    <Stack gap="sm">
                        <Text size="xs" tt="uppercase" fw={600} c="dimmed">
                            Solutions
                        </Text>
                        {menuData.solutions.map((item) => (
                            <Anchor
                                key={item.label}
                                component={Link}
                                to={item.link}
                                className={classes.mobileLink}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Anchor>
                        ))}
                    </Stack>

                    <Stack gap="sm">
                        <Text size="xs" tt="uppercase" fw={600} c="dimmed">
                            Resources
                        </Text>
                        {menuData.resources.map((item) => (
                            <Anchor
                                key={item.label}
                                component={Link}
                                to={item.link}
                                className={classes.mobileLink}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Anchor>
                        ))}
                    </Stack>

                    <Anchor component={Link} to="/pricing" className={classes.mobileLink} onClick={closeDrawer}>
                        Pricing
                    </Anchor>

                    <Stack gap="sm">
                        <Text size="xs" tt="uppercase" fw={600} c="dimmed">
                            About
                        </Text>
                        {menuData.about.map((item) => (
                            <Anchor
                                key={item.label}
                                component={Link}
                                to={item.link}
                                className={classes.mobileLink}
                                onClick={closeDrawer}
                            >
                                {item.label}
                            </Anchor>
                        ))}
                    </Stack>

                    <Divider my="md" />

                    <Stack gap="sm">
                        <Button
                            variant="subtle"
                            component={Link}
                            to="/auth/signin"
                            fullWidth
                            onClick={closeDrawer}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'deepblue.9', to: 'purple.6', deg: 45 }}
                            component={Link}
                            to="/auth/signup"
                            fullWidth
                            onClick={closeDrawer}
                        >
                            Start Free Trial
                        </Button>
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
};

export default Navigation;
