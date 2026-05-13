# 规则模板指南

本指南帮助你创建高质量的 `.cursorrules` 规则文件。

## 基础模板

```markdown
# [技术名称] .cursorrules 提示文件

你是 [技术领域] 方面的专家。

## 核心原则

- 原则1：简要说明
- 原则2：简要说明
- 原则3：简要说明

## 技术栈

- 框架/语言版本
- 主要依赖
- 工具链

## 最佳实践

1. **实践标题**
   详细说明

2. **实践标题**
   详细说明

## 关键约定

- 约定1
- 约定2

## 代码示例

\`\`\`语言
// 示例代码
\`\`\`
```

---

## 进阶模板

### 包含项目结构

```markdown
## 项目结构

\`\`\`
project/
├── src/
│   ├── components/    # 组件目录
│   ├── hooks/         # 自定义 Hooks
│   └── utils/         # 工具函数
├── tests/             # 测试文件
└── package.json
\`\`\`
```

### 包含命名规范

```markdown
## 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `UserProfile.tsx` |
| Hook | camelCase + use前缀 | `useAuth.ts` |
| 工具 | camelCase | `formatDate.ts` |
| 常量 | UPPER_SNAKE | `API_BASE_URL` |
```

### 包含错误处理

```markdown
## 错误处理

- 使用 try-catch 包裹异步操作
- 统一错误日志格式
- 用户友好的错误提示
```

---

## 完整示例

### React + TypeScript 规则

```markdown
# React TypeScript .cursorrules 提示文件

你是 React 和 TypeScript 方面的专家，专注于编写高质量、可维护的代码。

## 核心原则

- 优先使用函数组件和 Hooks
- 严格类型检查，避免 any
- 组件职责单一，易于测试
- 遵循 React 最佳实践

## 技术栈

- React 18+
- TypeScript 5+
- Vite 构建工具
- Tailwind CSS

## 组件规范

### 文件命名

- 组件文件：`PascalCase.tsx`
- 样式文件：`PascalCase.module.css`
- 测试文件：`PascalCase.test.tsx`

### 组件结构

\`\`\`tsx
import { FC } from 'react'

interface Props {
  title: string
  onClick?: () => void
}

export const Component: FC<Props> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}
\`\`\`

## Hooks 规范

- 自定义 Hook 以 `use` 开头
- 返回值使用数组或对象解构
- 处理清理副作用

\`\`\`tsx
function useCustomHook() {
  useEffect(() => {
    // setup
    return () => {
      // cleanup
    }
  }, [])
}
\`\`\`

## 状态管理

- 局部状态：useState
- 复杂状态：useReducer
- 全局状态：Context + useReducer 或 Zustand

## 性能优化

- 使用 React.memo 避免不必要渲染
- 使用 useMemo/useCallback 缓存计算结果
- 代码分割：React.lazy + Suspense

## 代码示例

\`\`\`tsx
// 推荐：类型安全的组件
interface UserCardProps {
  user: {
    id: string
    name: string
    email: string
  }
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 rounded-lg shadow">
      <h3 className="font-bold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}
\`\`\`

## 禁止事项

- ❌ 使用 any 类型
- ❌ 直接操作 DOM
- ❌ 在渲染中产生副作用
- ❌ 过深的组件嵌套（>3层）
```

---

## 规则编写技巧

### 1. 明确角色定位

```markdown
# 好的例子
你是 React 性能优化专家，擅长识别渲染瓶颈和优化策略。

# 不好的例子
你是专家。
```

### 2. 具体的指导原则

```markdown
# 好的例子
- 使用 `interface` 定义 props，而非 `type`
- 事件处理函数使用 `handle` 前缀

# 不好的例子
- 遵循最佳实践
- 写高质量代码
```

### 3. 包含代码示例

代码示例能让 AI 更准确理解你的期望。

### 4. 指定禁止事项

```markdown
## 避免的模式

- 不要使用内联样式
- 避免在 useEffect 中直接修改 state
```

### 5. 保持更新

随着技术发展，定期更新规则内容。

---

## 验证规则

创建规则后，建议：

1. **语法检查** - 确保 Markdown 格式正确
2. **实际测试** - 在真实项目中验证效果
3. **迭代优化** - 根据使用反馈调整

---

## 提交规则

如果你创建了有用的规则，欢迎贡献：

1. Fork [仓库](https://github.com/LessUp/awesome-cursorrules-zh)
2. 在对应分类目录创建规则
3. 提交 Pull Request

详细步骤见 [贡献指南](/zh/contributing)。
