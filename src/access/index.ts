import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
    return user?.role === 'admin'
}

export const isAdminOrEditor: Access = ({ req: { user } }) => {
    return user?.role === 'admin' || user?.role === 'editor'
}

export const isAdminOrSelf: Access = ({ req: { user } }) => {
    if (user?.role === 'admin') return true

    return {
        id: {
            equals: user?.id
        }
    }
}

// Public content is always readable
export const publicRead: Access = () => true

// Only published content is readable by public
export const publishedOnly: Access = ({ req: { user } }) => {
    // Admins and editors can see drafts
    if (user?.role === 'admin' || user?.role === 'editor') {
        return true
    }

    // Public can only see published
    return {
        status: {
            equals: 'published'
        }
    }
}
