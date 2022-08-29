import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Protocol Labs',
    description: 'Take home assessment for Protocol Labs',

    themeConfig: {
        // Type is `DefaultTheme.Config`
        logo: 'https://avatars.githubusercontent.com/u/8771617?s=200&v=4',
        nav: [
        { text: 'Index', link: '/index' },
        ],
        sidebar: [
            {
                text: 'Index', link: '/index',
                items: [
                    { text: 'About Me', link: '/about-me' },
                    { text: 'Site Down', link: '/site-down' },
                    { text: 'Fail Fast', link: '/fail-fast'}
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vesahc/pl-assessment' },
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
        ],    
    }
})