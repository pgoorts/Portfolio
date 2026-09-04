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
    description: 'Patrik Goorts, computer vision engineer in Belgium. Classical and learned vision, real-time GPU processing, and deployment on phones, headsets, and in the field.',
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
        title: 'Computer vision, from definition to deployment',
        text: "I'm **Patrik Goorts**. I build computer vision systems that run in the real world: on phones, on headsets, and on GPUs in the back of a stadium.<br /><br />That has meant reconstructing people in 3D for holographic calls, interpolating viewpoints between sixteen cameras at a soccer match, and pushing a 4K camera pipeline through an Android phone at 30 fps without a single memory copy. Classical algorithms where they're the right tool, trained networks where they aren't, and CUDA when it has to be fast.<br /><br />I take problems end to end: define, research, prototype, and deploy",
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
