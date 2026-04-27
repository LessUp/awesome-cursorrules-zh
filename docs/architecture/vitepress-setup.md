# VitePress 配置详解

本文档详细说明 awesome-cursorrules-zh 项目的 VitePress 配置。

## 配置文件位置

主配置文件：`.vitepress/config.mjs`

## 核心配置项

### 1. 站点基础配置

```javascript
export default defineConfig({
  title: 'Awesome Cursor Rules 中文版',
  description: '精选 Cursor AI 编辑器 .cursorrules 规则集合',
  lang: 'zh-CN',
  
  // 多语言支持
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en-US' }
  }
})
```

### 2. 导航配置

**顶部导航** (`themeConfig.nav`):
- 首页链接
- 规则分类导航
- 文档链接
- GitHub 仓库链接

**侧边栏** (`themeConfig.sidebar`):
- 按技术领域分组
- 支持展开/折叠
- 双语独立配置

### 3. 搜索配置

使用 VitePress 内置本地搜索：

```javascript
themeConfig: {
  search: {
    provider: 'local'
  }
}
```

### 4. 构建配置

```javascript
export default defineConfig({
  // 输出目录
  outDir: '.vitepress/dist',
  
  // 缓存目录
  cacheDir: '.vitepress/cache',
  
  // 静态资源
  assetsDir: 'assets'
})
```

## 目录结构约定

```
.vitepress/
├── config.mjs        # 主配置
├── theme/            # 自定义主题
│   ├── index.js      # 主题入口
│   └── custom.css    # 自定义样式
├── public/           # 静态资源
│   └── images/       # 图片
├── dist/             # 构建输出 (gitignore)
└── cache/            # 缓存 (gitignore)
```

## 双语配置策略

### 目录结构

```
docs/
├── en/               # 英文文档
├── zh/               # 中文文档
└── ...

根目录:
├── en/ -> docs/en/   # 符号链接
└── zh/ -> docs/zh/   # 符号链接
```

### 配置方式

```javascript
locales: {
  root: {
    label: '简体中文',
    lang: 'zh-CN',
    themeConfig: {
      nav: [...中文导航],
      sidebar: {...中文侧边栏}
    }
  },
  en: {
    label: 'English',
    lang: 'en-US',
    themeConfig: {
      nav: [...英文导航],
      sidebar: {...英文侧边栏}
    }
  }
}
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 启动开发服务器 |
| `npm run docs:build` | 构建静态站点 |
| `npm run docs:preview` | 预览构建结果 |

## 自定义主题扩展

主题入口文件 `.vitepress/theme/index.js`:

```javascript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
  }
}
```

## 性能优化

1. **图片优化**: 使用 WebP 格式，配置懒加载
2. **代码分割**: VitePress 自动处理
3. **缓存策略**: 利用 `cacheDir` 加速构建
4. **CDN 部署**: GitHub Pages 自动 CDN

## 相关文档

- [VitePress 官方文档](https://vitepress.dev/)
- [规则组织规范](./rules-organization.md)
