module.exports = {
    title: 'Documentation modules HCSE',
    description: 'Documentation visant à décrire les fonctionnalités des différents modules HSCE.',
    lang: 'fr-FR',
    themeConfig: {
        sidebar: {
            '/modules/': getModulesSidebar(),
            '/': getModulesSidebar()
        }
    },
}

function getModulesSidebar() {
    return [
      {
        text: 'Modules',
        children: [
          { text: 'Jeux concours', link: '/modules/jeux-concours' },
          { text: 'Remboursements', link: '/modules/configuration' },
          { text: 'Subventions', link: '/modules/assets' },
          { text: 'Justificatifs', link: '/modules/markdown' },
          { text: 'Lemonway', link: '/modules/using-vue' },
          { text: 'Echèques', link: '/modules/deploy' }
        ]
      },
    ]
  }
