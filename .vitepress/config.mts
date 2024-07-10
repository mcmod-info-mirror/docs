import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "McMod Info Mirror",
  description: "为各平台的 Mod 信息缓存加速",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API文档', link: '/docs/index' }
    ],

    sidebar: [
      {
        text: 'Default',
        items: [
          { text: '总览', link: '/docs/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcmod-info-mirror' }
    ]
  }
})
