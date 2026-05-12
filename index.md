---
layout: home
hero:
  name: Awesome Cursor Rules
  text: 选择语言并自动进入内容站点
  tagline: 首次访问会根据浏览器语言自动跳转到中文或英文站点。你也可以在下方手动选择语言入口。
  actions:
    - theme: brand
      text: 进入中文站点
      link: /zh/
    - theme: alt
      text: Enter English Site
      link: /en/
---

<script setup>
import { onMounted } from 'vue';
import { useData } from 'vitepress';

const { site } = useData();

function withBase(path) {
  const base = site.value.base || '/';
  if (base === '/') {
    return path;
  }
  return `${base.replace(/\/$/, '')}${path}`;
}

function isRootEntry(pathname) {
  const base = site.value.base || '/';
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;

  return normalizedPath === baseWithSlash || pathname === `${baseWithSlash}index.html`;
}

onMounted(() => {
  const pathname = location.pathname || '/';
  if (!isRootEntry(pathname)) {
    return;
  }

  const zhPath = withBase('/zh/');
  const enPath = withBase('/en/');
  const saved = localStorage.getItem('preferred-locale');

  if (saved === 'zh') {
    location.replace(zhPath);
    return;
  }

  if (saved === 'en') {
    location.replace(enPath);
    return;
  }

  const lang = (navigator.language || '').toLowerCase();
  const target = lang.startsWith('zh') ? 'zh' : 'en';
  localStorage.setItem('preferred-locale', target);
  location.replace(target === 'zh' ? zhPath : enPath);
});
</script>

<div class="lang-fallback">

## 手动语言入口 / Manual language selection

如果你在企业网络、严格隐私模式或禁用脚本环境中访问，本页不会自动跳转。请手动进入对应站点。

<div class="lang-fallback-grid">
  <div class="lang-card">
    <h3>🇨🇳 中文站点</h3>
    <p>适合中文开发者，包含完整规则地图、快速上手指南、规则编写模板与常见问题解答。</p>
    <a class="lang-button primary" :href="withBase('/zh/')">进入中文站点</a>
  </div>
  <div class="lang-card">
    <h3>🇺🇸 English site</h3>
    <p>Includes full bilingual docs, curated rule navigation, practical usage patterns, and contribution workflow.</p>
    <a class="lang-button" :href="withBase('/en/')">Enter English Site</a>
  </div>
</div>

</div>
