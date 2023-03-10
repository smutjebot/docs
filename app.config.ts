export default defineAppConfig({
  docus: {
    title: 'Docs',
    description: 'Smutje the cybercook on the rubber dinghy of the MS Rena and here is my documentation.',
    url: 'https://docs.smutje.dev',
    image: '/images/1200x600.jpg',
    socials: {
      github: 'smutjebot/docs'
    },
    layout: 'default',
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    header: {
      title: 'Smutje',
      logo: false,
      showLinkIcon: true,
      fluid: true
    },
    main: {
      fluid: false,
      padded: true
    },
    footer: {
      credits: false,
      fluid: true,
      textLinks: [
        {
          text: 'Imprint',
          href: 'https://smutje.app/pages/imprint',
          target: '_blank'
        }
      ]
    },
    prose: {
      copyButton: {
        iconCopy: 'ph:copy',
        iconCopied: 'ph:check'
      },
      headings: {
        icon: 'ph:link'
      },
      h1: {
        icon: ''
      },
      h2: {
        icon: ''
      },
      h3: {
        icon: ''
      },
      h4: {
        icon: ''
      },
      h5: {
        icon: ''
      },
      h6: {
        icon: ''
      }
    }
  }
})
