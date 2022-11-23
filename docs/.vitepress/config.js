import sidebar from './side.js'

export default {
  base: '/blog/',
  title: 'Blog',
  description: 'A VitePress site',
  lastUpdated: true,
  themeConfig: {
    logo: '/24564508.png',
    outline: 2,
    siteTitle: 'Blog',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '导航',
        link: '/web/demo',
        activeMatch: '/web/',
      },
      {
        text: 'other',
        items: [{ text: 'Linux', link: '/linux/', activeMatch: '/linux/' }],
      },
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Createwj/blog' }],
    footer: {
      message: 'MIT Licensed | Copyright © 2022-present xincheng',
      copyright: '',
    },
    editLink: {
      pattern: 'https://github.com/Createwj/blog/tree/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    algolia: {
      appId: 'your id',
      apiKey: 'your API key',
      indexName: 'xincheng',
    },
  },
}
