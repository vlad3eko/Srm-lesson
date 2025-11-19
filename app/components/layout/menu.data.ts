export interface IMenuItem {
    name: String,
    url: String,
    icon: String
}

export const MENU_DATA: IMenuItem[] = [
    {
        name: 'Home',
        url: '/',
        icon: 'radix-icons:dashboard',
    },
    {
        name: 'Products',
        url: '/products',
        icon: 'ep:goods',
    },
    {
        name: 'Payments',
        url: '/payments',
        icon: 'ph:contactless-payment',
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'fluent:receipt-20-regular',
    },
    {
        name: 'Customers',
        url: '/customers',
        icon: 'mingcute:group-line',
    },
    {
        name: 'Feedback',
        url: '/feedback',
        icon: 'fluent:person-feedback-48-regular',
    },
    {
        name: 'Settings',
        url: '/settings',
        icon: 'radix-icons:gear',
    },
    {
        name: 'Questions',
        url: '/questions',
        icon: 'radix-icons:question-mark',
    },
]
