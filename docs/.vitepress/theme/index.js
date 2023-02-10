// .vitepress/theme/index.js
import Layout from './layout.vue'
import DefaultTheme from 'vitepress/theme' //viteperss的主题

export default {
  ...DefaultTheme,
  Layout: Layout,

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}

//接口
// interface VitePressData {
//   site: Ref<SiteData>
//   page: Ref<PageData>
//   theme: Ref<any> // themeConfig from .vitepress/config.js
//   frontmatter: Ref<PageData['frontmatter']>
//   lang: Ref<string>
//   title: Ref<string>
//   description: Ref<string>
//   localePath: Ref<string>
// }