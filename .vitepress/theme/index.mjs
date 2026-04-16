import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义插槽
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册自定义全局组件或添加功能
  }
}
