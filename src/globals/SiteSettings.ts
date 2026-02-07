import type { GlobalConfig } from 'payload'
import { isAdmin } from '../access'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    admin: {
        group: 'Configuration'
    },
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General',
                    fields: [
                        {
                            name: 'siteName',
                            type: 'text',
                            required: true,
                            defaultValue: 'Insaplan'
                        },
                        {
                            name: 'siteDescription',
                            type: 'textarea',
                            required: true
                        },
                        {
                            name: 'logo',
                            type: 'upload',
                            relationTo: 'media',
                            required: true
                        },
                        {
                            name: 'favicon',
                            type: 'upload',
                            relationTo: 'media',
                            required: true
                        }
                    ]
                },
                {
                    label: 'Social',
                    fields: [
                        {
                            name: 'socialLinks',
                            type: 'group',
                            fields: [
                                {
                                    name: 'twitter',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'https://twitter.com/insaplan'
                                    }
                                },
                                {
                                    name: 'linkedin',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'https://linkedin.com/company/insaplan'
                                    }
                                },
                                {
                                    name: 'github',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'https://github.com/insaplan'
                                    }
                                },
                                {
                                    name: 'facebook',
                                    type: 'text'
                                },
                                {
                                    name: 'instagram',
                                    type: 'text'
                                },
                                {
                                    name: 'youtube',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Analytics',
                    fields: [
                        {
                            name: 'analytics',
                            type: 'group',
                            fields: [
                                {
                                    name: 'googleAnalyticsId',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'G-XXXXXXXXXX',
                                        description: 'Google Analytics 4 Measurement ID'
                                    }
                                },
                                {
                                    name: 'googleTagManagerId',
                                    type: 'text',
                                    admin: {
                                        placeholder: 'GTM-XXXXXXX'
                                    }
                                },
                                {
                                    name: 'plausibleDomain',
                                    type: 'text',
                                    admin: {
                                        description: 'For privacy-friendly analytics'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact',
                    fields: [
                        {
                            name: 'contact',
                            type: 'group',
                            fields: [
                                {
                                    name: 'email',
                                    type: 'email',
                                    required: true
                                },
                                {
                                    name: 'supportEmail',
                                    type: 'email',
                                    required: true
                                },
                                {
                                    name: 'salesEmail',
                                    type: 'email'
                                },
                                {
                                    name: 'phone',
                                    type: 'text'
                                },
                                {
                                    name: 'address',
                                    type: 'textarea'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Maintenance',
                    fields: [
                        {
                            name: 'maintenance',
                            type: 'group',
                            fields: [
                                {
                                    name: 'enabled',
                                    type: 'checkbox',
                                    defaultValue: false,
                                    admin: {
                                        description: 'Enable maintenance mode'
                                    }
                                },
                                {
                                    name: 'message',
                                    type: 'textarea',
                                    admin: {
                                        condition: (data) => data.maintenance?.enabled === true,
                                        description: 'Message to display during maintenance'
                                    }
                                },
                                {
                                    name: 'expectedEndTime',
                                    type: 'date',
                                    admin: {
                                        condition: (data) => data.maintenance?.enabled === true,
                                        date: {
                                            pickerAppearance: 'dayAndTime'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
