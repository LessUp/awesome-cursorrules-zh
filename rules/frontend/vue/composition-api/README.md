# Vue 3 Composition API 规则集

> Vue 3、Composition API、TypeScript 开发最佳实践

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 |
| API | Composition API |
| 语言 | TypeScript |
| 构建 | Vite |
| 样式 | Tailwind CSS |

## 核心规则

### 组件设计

```typescript
// 使用 <script setup> 语法
<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title: string
}

const props = defineProps<Props>()
const count = ref(0)
</script>
```

### 项目结构

```
src/
├── components/    # 可复用组件
├── composables/   # 组合式函数
├── views/         # 页面视图
├── stores/        # 状态管理
└── types/         # TypeScript 类型
```

### 最佳实践

- 使用组合式函数封装逻辑
- 响应式数据使用 `ref` 和 `reactive`
- 计算属性使用 `computed`
- 组件通信使用 `provide/inject`

## 应用场景

- 单页应用 (SPA)
- 管理后台
- 数据可视化
- 表单密集型应用

## 使用方法

```bash
cp rules/frontend/vue/composition-api/.cursorrules /你的项目/
```

## 相关规则

- [Nuxt 3](./nuxt3/)
- [React TypeScript](../react/react-typescript/)
