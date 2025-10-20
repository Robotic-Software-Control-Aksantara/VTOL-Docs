import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alkras Docs",
  description: "This is Altigen Krasnala (Vertical Take-OFf Landing Team of Aksantara ITB) technical documentation platform. This is integrated site that provide technical documentation for manufacture to robotics software control.",
  base: '/VTOL-Docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Evaluation', link: '/evaluation' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Evaluation', link: '/evaluation' },
          { 
            text: 'Overview',
            items: [
              { text: 'All', link: '/overview' },
              { text: 'System Overview', link: '/overview/system' },
              { text: 'Design Overview', link: '/overview/design' }
            ]
          },
          { 
            text: 'System Docs',
            items: [
              { text: 'AHC', link: '/ahc' },
              { text: 'RSC', link: '/rsc' },
            ]
          },
          { 
            text: 'Design Docs',
            items: [
              { text: 'AMD', link: '/amd' },
              { text: 'Manufacture', link: '/manuf' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Robotic-Software-Control-Aksantara/' }
    ]
  }
})
