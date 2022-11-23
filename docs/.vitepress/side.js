export default {
  '/web/': [
    {
      text: 'Guide',
      collapsible: true,
      items: [{ text: 'MarkDown', link: '/web/demo' }],
    },
    {
      text: 'Javascript',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Index', link: '/guide3/' },
        { text: 'One', link: '/guide/one' },
      ],
    },
    {
      text: 'Vue',
      collapsible: true,
      collapsed: true,
      items: [{ text: 'Index', link: '/guide3/' }],
    },
    {
      text: 'React',
      collapsible: true,
      collapsed: true,
      items: [{ text: 'Index', link: '/guide3/' }],
    },
    {
      text: 'Svelte',
      collapsible: true,
      collapsed: true,
      items: [{ text: 'Index', link: '/guide3/' }],
    },
  ],
  '/linux/': [
    {
      text: 'Config',
      items: [
        { text: 'config', link: '/config/' },
        { text: 'config2', link: '/config/three' },
        { text: 'config3', link: '/config/four' },
      ],
    },
  ],
}
