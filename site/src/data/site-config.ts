import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/banner.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://patrikgoorts.com',
    avatar: {
        src: avatar,
        alt: 'Patrik Goorts'
    },
    title: 'Patrik Goorts',
    subtitle: 'Computer vision problem solver',
    description: 'Portfolio of Patrik Goorts, computer vision problem solver (classical and machine learning), ad parallel processing developer.',
    image: {
        src: '../assets/images/banner.png',
        alt: 'Banner'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/patrikgoorts/'
        }
    ],
    hero: {
        title: 'Hi There!',
        text: "I'm **Patrik Goorts**, a computer vision engineer, solving problems from definition to deployment.",
        image: {
            src: hero,
            alt: 'Banner'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe',
        text: 'Not active',
        form: {
            action: '#'
        }
    },
    postsPerPage: 20,
    projectsPerPage: 20
};

export default siteConfig;
