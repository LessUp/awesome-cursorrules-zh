# API 参考

> 📖 `.cursorrules` 文件格式规范与参考

## 目录

- [文件格式](#文件格式)
- [规则结构](#规则结构)
- [常用指令](#常用指令)
- [模板变量](#模板变量)
- [示例规则库](#示例规则库)
- [最佳实践](#最佳实践)

---

## 文件格式

### 基本规范

| 属性 | 要求 |
|------|------|
| 文件名 | `.cursorrules`（点前缀） |
| 编码 | UTF-8 |
| 格式 | Markdown 纯文本 |
| 位置 | 项目根目录或子目录 |
| 大小 | 建议 < 50KB |

### 文件位置

```
project/
├── .cursorrules              # 项目级规则（推荐）
├── src/
│   └── .cursorrules          # 模块级规则（可选）
└── docs/
    └── .cursorrules          # 文档级规则（可选）
```

> 💡 **优先级**：子目录规则 > 父目录规则

---

## 规则结构

### 推荐结构模板

```markdown
# 项目名称编程规范

## 概述
项目简述、技术栈说明、核心原则

## 编码规范
- 命名规则
- 代码风格
- 文件组织

## 框架规范
- 特定框架的规则
- 组件/模块规范

## 最佳实践
- 推荐做法
- 避免的陷阱
```

### 标准章节

| 章节 | 说明 | 可选性 |
|------|------|--------|
| 概述 | 项目背景和设计原则 | 推荐 |
| 编码规范 | 通用编程规范 | 必需 |
| 框架规范 | 框架特定规则 | 按技术栈 |
| 最佳实践 | 推荐做法 | 推荐 |
| 安全规范 | 安全相关要求 | 可选 |

---

## 常用指令

### 编码风格指令

```markdown
## 编码风格

- 使用 2 个空格缩进
- 最大行长度 100 字符
- 使用单引号而非双引号
- 语句末尾分号可选
```

### 命名规范指令

```markdown
## 命名规范

### 变量命名
- 使用 camelCase (如: userName)
- 布尔值使用 is/has 前缀 (如: isActive)
- 常量使用 UPPER_SNAKE_CASE (如: MAX_COUNT)

### 函数命名
- 动词开头 (如: getUserData)
- 异步函数使用 async 前缀或 Promise 后缀
- 事件处理使用 handle 前缀 (如: handleClick)

### 文件命名
- 组件: PascalCase (如: UserProfile.tsx)
- 工具函数: camelCase (如: formatDate.ts)
- 配置文件: kebab-case (如: api-config.ts)
```

### 代码组织指令

```markdown
## 代码组织

### 文件结构
- 组件放在 components/ 目录
- 工具函数放在 utils/ 目录
- 类型定义放在 types/ 目录

### 导入顺序
1. 第三方库
2. 项目内部模块
3. 相对路径导入
4. 样式文件

### 导出规范
- 默认导出仅用于主组件
- 命名导出用于工具函数
- 索引文件统一导出
```

### 错误处理指令

```markdown
## 错误处理

- 使用 try/catch 处理异步操作
- 错误日志使用统一的 logger
- 不向用户暴露内部错误详情
- 关键操作添加重试机制
```

### TypeScript 指令

```markdown
## TypeScript 规范

- 所有函数必须声明返回类型
- 不使用 any 类型
- 接口使用 I 前缀 (如: IUser)
- 类型使用 T 前缀 (如: TUserData)
- 枚举使用 E 前缀 (如: EStatus)
```

### React 特定指令

```markdown
## React 规范

### 组件规范
- 使用函数组件而非类组件
- Props 使用 interface 定义
- 使用 React.FC 或明确返回类型
- 组件逻辑抽离到自定义 hooks

### Hooks 规范
- 只在函数组件顶层调用 hooks
- 自定义 hooks 以 use 开头
- 依赖数组完整准确

### 状态管理
- 优先使用 React Context
- 复杂状态使用 useReducer
- 避免过度使用 useEffect
```

---

## 模板变量

### 常用模式变量

| 变量模式 | 说明 | 示例 |
|----------|------|------|
| `{ComponentName}` | 组件名占位 | Button, UserCard |
| `{hookName}` | Hook 名占位 | useAuth, useForm |
| `{feature}` | 功能模块名 | auth, dashboard |
| `{TYPE}` | 类型名占位 | User, ApiResponse |

### 条件指令模板

```markdown
## 条件规则

### 组件开发
- 如果组件接收超过 5 个 props，考虑拆分或组合
- 如果函数超过 20 行，考虑拆分
- 如果文件超过 300 行，考虑拆分模块

### 性能优化
- 列表渲染必须添加 key 属性
- 大数据组件使用虚拟滚动
- 频繁更新使用 useMemo/useCallback
```

---

## 示例规则库

### 通用规范示例

```markdown
# 通用编程规范

## 核心原则
- 代码清晰优于巧妙
- 可读性优先于简洁
- 一致性优先于个人偏好

## 编码规范
- 使用有意义的命名
- 函数单一职责
- 避免深层嵌套

## 注释规范
- 复杂逻辑必须注释
- 公共 API 必须文档化
- 注释解释为什么，而非做什么
```

### React + TypeScript 示例

```markdown
# React + TypeScript 规范

## 组件开发
- Props 接口以组件名 + Props 命名
- 使用解构接收 props
- 默认参数在解构中设置

## 类型定义
interface IButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

## 样式规范
- 使用 CSS Modules 或 styled-components
- 类名使用 BEM 命名法
- 避免内联样式
```

### API 开发示例

```markdown
# API 开发规范

## 路由规范
- RESTful 设计
- 使用名词而非动词
- 版本前缀: /api/v1

## 响应格式
{
  "success": boolean,
  "data": any,
  "error": {
    "code": string,
    "message": string
  }
}

## 错误处理
- HTTP 状态码正确
- 错误信息友好
- 日志记录详细
```

---

## 最佳实践

### 规则编写原则

1. **具体明确**
   - ❌ "使用好的命名"
   - ✅ "组件使用 PascalCase"

2. **简洁有力**
   - ❌ 长篇大论的解释
   - ✅ 简短清晰的指令

3. **可验证性**
   - ❌ "性能要好"
   - ✅ "组件渲染时间 < 100ms"

4. **优先级清晰**
   - 重要规则放在前面
   - 使用标题层级区分优先级

### 规则测试方法

```bash
# 1. 验证语法
# 检查 Markdown 格式
cat .cursorrules | head -50

# 2. 验证编码
file .cursorrules

# 3. 功能测试
# 在 Cursor 中创建测试文件
# 输入代码观察 AI 建议
```

### 规则优化清单

- [ ] 规则数量 < 50 条
- [ ] 每条规则 < 200 字
- [ ] 使用统一的术语
- [ ] 避免相互矛盾的规则
- [ ] 包含代码示例
- [ ] 按主题分组

---

## 高级特性

### 条件规则

根据项目特点添加条件：

```markdown
## 条件规则

### 如果是新功能开发
- 编写单元测试
- 更新文档
- 添加类型定义

### 如果是 Bug 修复
- 添加回归测试
- 记录修复原因
- 检查相关功能
```

### 分层规则

```markdown
## 架构层规范

### 数据层
- Repository 模式
- 统一数据接口

### 业务层
- Service 封装业务逻辑
- 事务管理

### 表现层
- Controller 处理请求
- 数据验证
```

---

<div align="center">

**[⬆ 返回顶部](#api-参考)** | **[📚 返回文档首页](./README.md)**

</div>
