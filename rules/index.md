---
editLink: false
---

# 规则分类浏览

<script setup>
import { ref } from 'vue'

const categories = ref([
  { name: '前端开发', icon: '🌐', desc: 'React, Vue, Angular, Svelte 等', path: './frontend' },
  { name: '后端开发', icon: '⚙️', desc: 'Node.js, Python, Go, Java 等', path: './backend' },
  { name: '移动开发', icon: '📱', desc: 'Flutter, React Native, Swift 等', path: './mobile' },
  { name: 'AI/数据', icon: '🤖', desc: 'PyTorch, TensorFlow, LLM 等', path: './ai' },
  { name: 'DevOps', icon: '☁️', desc: 'Docker, Kubernetes, Terraform 等', path: './devops' },
  { name: '区块链', icon: '🔗', desc: 'Solidity, Web3 等', path: './blockchain' },
  { name: '安全', icon: '🔐', desc: '安全编码规范', path: './security' },
])
</script>

<div class="category-grid">
  <a v-for="cat in categories" :key="cat.name" :href="cat.path" class="category-card">
    <div class="category-icon">{{ cat.icon }}</div>
    <div class="category-content">
      <h3>{{ cat.name }}</h3>
      <p>{{ cat.desc }}</p>
    </div>
  </a>
</div>

## 使用方法

1. 选择适合你项目的分类
2. 浏览规则列表，找到合适的 `.cursorrules` 文件
3. 复制到项目根目录
4. 在 Cursor AI 中开始使用

> 💡 所有规则文件位于 GitHub 仓库的 `rules/` 目录下，可直接下载使用。
