---
editLink: false
---

# 规则分类浏览

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([
  { name: '前端开发', icon: '🌐', desc: 'React, Vue, Angular, Svelte', path: './frontend', count: 30 },
  { name: '后端开发', icon: '⚙️', desc: 'Node.js, Python, Go, Java', path: './backend', count: 25 },
  { name: '移动开发', icon: '📱', desc: 'Flutter, React Native', path: './mobile', count: 15 },
  { name: 'AI/数据', icon: '🤖', desc: 'PyTorch, TensorFlow', path: './ai', count: 24 },
])
</script>

<div class="category-grid">
  <a v-for="cat in categories" :key="cat.name" :href="cat.path" class="category-card">
    <div class="category-icon">{{ cat.icon }}</div>
    <div class="category-content">
      <h3>{{ cat.name }}</h3>
      <p>{{ cat.desc }}</p>
      <span class="custom-badge badge-new">{{ cat.count }} 规则</span>
    </div>
  </a>
</div>

## 所有分类

| 分类 | 路径 | 规则数量 |
|------|------|----------|
| 前端 | `rules/frontend/` | 30+ |
| 后端 | `rules/backend/` | 25+ |
| 移动端 | `rules/mobile/` | 15+ |
| AI/ML | `rules/ai/` | 10+ |
| 数据科学 | `rules/data-science/` | 8+ |
| DevOps | `rules/devops/` | 8+ |
| 区块链 | `rules/blockchain/` | 6+ |
| 安全 | `rules/security/` | 5+ |

> 💡 提示: 所有规则文件位于项目仓库的 `rules/` 目录下

<script>
// 自动扫描规则目录生成列表
</script>
