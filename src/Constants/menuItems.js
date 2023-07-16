export const menuItems = [
    {
        title: 'Home',
        url: '/home',
    },
    {
        title: 'About Us',
        url: '/about',
    },
    {
        title: 'Services',
        url: '/services',
        subMenu: [
            {
                title: 'Web Developement',
                subMenu: [
                    {
                        title: 'Frontend',
                        url: 'frontend',
                    },
                    {
                        title: 'Backend',
                        url: 'backend',
                    }
                ]
            },
            {
                title: 'App Development',
                url: 'appDevelopment',
            },
            {
                title: 'SEO',
                url: 'seo',
            }
        ]
    },
    {
        title: 'Contact Us',
        url: '/contact',
    }
]