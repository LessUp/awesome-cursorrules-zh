# VitePress Setup Details

This document explains the VitePress configuration for the awesome-cursorrules-zh project.

## Config File Location

Main config file: `.vitepress/config.mjs`

## Core Configuration

### 1. Site Basic Config

```javascript
export default defineConfig({
  title: 'Awesome Cursor Rules',
  description: 'Curated Cursor AI editor .cursorrules rules collection',
  lang: 'en-US',

  // Multi-language support
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en-US' }
  }
})
```

### 2. Navigation Config

**Top Navigation** (`themeConfig.nav`):
- Home link
- Rules category navigation
- Documentation links
- GitHub repo link

**Sidebar** (`themeConfig.sidebar`):
- Grouped by tech domain
- Supports expand/collapse
- Independent bilingual config

### 3. Search Config

Using VitePress built-in local search:

```javascript
themeConfig: {
  search: {
    provider: 'local'
  }
}
```

### 4. Build Config

```javascript
export default defineConfig({
  // Output directory
  outDir: '.vitepress/dist',

  // Cache directory
  cacheDir: '.vitepress/cache',

  // Static assets
  assetsDir: 'assets'
})
```

## Directory Structure Convention

```
.vitepress/
├── config.mjs        # Main config
├── theme/            # Custom theme
│   ├── index.js      # Theme entry
│   └── custom.css    # Custom styles
├── public/           # Static assets
│   └── images/       # Images
├── dist/             # Build output (gitignore)
└── cache/            # Cache (gitignore)
```

## Bilingual Config Strategy

### Directory Structure

```
docs/
├── en/               # English docs
├── zh/               # Chinese docs
└── ...

Root directory:
├── en/ -> docs/en/   # Symlink
└── zh/ -> docs/zh/   # Symlink
```

### Config Method

```javascript
locales: {
  root: {
    label: '简体中文',
    lang: 'zh-CN',
    themeConfig: {
      nav: [...chinese nav],
      sidebar: {...chinese sidebar}
    }
  },
  en: {
    label: 'English',
    lang: 'en-US',
    themeConfig: {
      nav: [...english nav],
      sidebar: {...english sidebar}
    }
  }
}
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run docs:dev` | Start dev server |
| `npm run docs:build` | Build static site |
| `npm run docs:preview` | Preview build result |

## Custom Theme Extension

Theme entry file `.vitepress/theme/index.js`:

```javascript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
  }
}
```

## Performance Optimization

1. **Image optimization**: Use WebP format, configure lazy loading
2. **Code splitting**: VitePress handles automatically
3. **Cache strategy**: Use `cacheDir` to speed up builds
4. **CDN deployment**: GitHub Pages auto CDN

## Related Documentation

- [VitePress Official Docs](https://vitepress.dev/)
- [Rules Organization](./rules-organization.md)
