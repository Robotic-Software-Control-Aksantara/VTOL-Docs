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
      { text: 'Overview', link: '/overview' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Evaluation', link: '/evaluation' },
          { 
            text: 'Overview',
            link: '/overview',
            items: [
              { text: 'System Overview', link: '/overview/system' },
              { text: 'Design Overview', link: '/overview/design' }
            ]
          },
          { 
            text: 'System Docs',
            link: '/system',
            items: [
              { text: 'AHC', link: '/system/ahc' },
              { text: 'RSC', link: '/system/rsc', 
                items: [
                  { text: 'Fundamental', link: 'system/rsc/fundamental'}, 
                  { text: 'Software Design', link: 'system/rsc/software_design'},
                  { text: 'Software Architecture', link: 'system/rsc/software_architecture' },
                  { text: 'Software Behavior', link: 'system/rsc/software_behavior' },
                  { text: 'Getting Started', link: 'system/rsc/getting_started' },
                  { text: 'Setup', link: 'system/rsc/setup' },
                  { text: 'Usage', link: 'system/rsc/usage' },
                  { text: 'Troubleshooting', link: 'system/rsc/troubleshooting' },
                  { text: 'FaQ', link: 'system/rsc/faq' },
                  { text: 'Advanced Topics', link: 'system/rsc/advanced_topics' },
                ] },
              { text: 'Propulsion', link: '/system/rsc' },
            ]
          },
          { 
            text: 'Design Docs',
            link: '/design',
            items: [
              { text: 'AMD', link: '/design/amd' },
              { text: 'Manufacture', link: '/design/manuf' },
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
