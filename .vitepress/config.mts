import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "McMod Info Mirror",
  description: "为各平台的 Mod 信息缓存加速",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://avatars.githubusercontent.com/u/159989460',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API文档', link: 'https://mod.mcimirror.top/docs' }
    ],

    sidebar: [
      {
        text: 'MCIM',
        items: [
          { text: '简介', link: '/docs/index' }
        ]
      }
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023021309号-4</a> <br /> <a href="https://icp.gov.moe/?keyword=20244004" target="_blank">萌ICP备20244004号</a>',
      copyright: 'Copyright © 2024-present</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcmod-info-mirror' }
    ]
  }
})
