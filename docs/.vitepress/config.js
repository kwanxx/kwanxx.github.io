/*
 下载： npm install
 构建： npm run build
 运行： npm run dev
 */

export default {
  base: '/', // 仓库名
  build: {
    chunkSizeWarningLimit: 1500, // 调整包的大小
    outDir: 'docs/.vitepress/dist',   //构建产物输出目录
 
  },
  title: 'Kwan \' s Blog',

  description: '日志记录',

  lang: 'zh-CN',

  lastUpdated: true,

  themeConfig: {

    siteTitle: 'Kwan \' s Blog',

    lastUpdatedText: '更新时间',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '日志', link: '/blog/' },
      { text: '归档', link: '/archive/' },
    ],
    footer: {
      message: 'Powered By VitePress',
      copyright: 'Copyright © 2025-Kwan'
    },
    sidebar: {
      '/blog/': [
        {
          text: '日志记录',
          items: [
            { text: '目录', link: '/blog/' },
            { text: '英语', link: '/blog/English/' },
            { text: '数学', link: '/blog/Math/' },
            { text: '小程序', link: '/blog/smallapp/' },
            { text: 'Node', link: '/blog/Node/' },
            { text: 'SpringBoot', link: '/blog/SpringBoot/' },
            { text: 'Python', link: '/blog/Python/' },
            { text: 'Golang', link: '/blog/Golang/' },
            { text: 'Linux', link: '/blog/Linux/' },
            { text: 'llm', link: '/blog/llm/' },
            { text: 'Android', link: '/blog/Android/' },
            { text: 'IDEA', link: '/blog/IDEA/' },
            { text: 'Javascript', link: '/blog/Javascript/' },
            { text: 'Git', link: '/blog/Git/' },
            { text: 'others', link: '/blog/others/' },
          ]
        }
      ],
    }
  },
  markdown: {
    math:true,
    attrs: false,
    html: false,
  },

}
