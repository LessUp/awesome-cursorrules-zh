# 使用规则教程

本教程详细介绍如何使用 awesome-cursorrules-zh 中的规则文件。

## 什么是 .cursorrules？

`.cursorrules` 是 Cursor AI 编辑器的规则文件，用于定义 AI 助手的行为和编码规范。通过规则文件，您可以：

- 定义编码风格和最佳实践
- 指定技术栈和框架规范
- 设置项目特定的约定
- 提高 AI 辅助编程的质量

## 规则文件结构

### 标准格式

```markdown
# [技术名称] .cursorrules 提示文件

你是 [技术领域] 方面的专家。

## 核心原则

- 原则1：简洁明了
- 原则2：模块化设计
- 原则3：安全优先

## 技术栈

- 技术A
- 技术B

## 最佳实践

1. 具体实践建议
2. 代码示例

## 关键约定

1. 编码约定
2. 命名规范
```

## 使用步骤

### 1. 选择合适的规则

根据您的项目技术栈选择对应的规则：

| 项目类型 | 推荐规则目录 |
|----------|--------------|
| React 前端 | `rules/frontend/react/` |
| Vue 前端 | `rules/frontend/vue/` |
| Python 后端 | `rules/backend/python/` |
| Node.js 后端 | `rules/backend/nodejs/` |
| 移动应用 | `rules/mobile/` |
| DevOps | `rules/devops/` |

### 2. 获取规则文件

**方法一：浏览网站**

1. 访问 [awesome-cursorrules-zh.js.org](https://awesome-cursorrules-zh.js.org/)
2. 找到适合的规则
3. 复制内容到您的项目

**方法二：Git 克隆**

```bash
git clone https://github.com/LessUp/awesome-cursorrules-zh.git
# 复制需要的规则文件
```

**方法三：直接下载**

```bash
# 下载单个规则
curl -o .cursorrules https://raw.githubusercontent.com/LessUp/awesome-cursorrules-zh/main/rules/frontend/react/nextjs-typescript/.cursorrules
```

### 3. 放置规则文件

将 `.cursorrules` 文件放在项目根目录：

```
your-project/
├── .cursorrules          # 规则文件
├── src/
├── package.json
└── ...
```

### 4. 验证生效

1. 用 Cursor 打开项目
2. 使用 AI Chat 或代码生成功能
3. 观察 AI 是否遵循规则中的规范

## 高级用法

### 组合多个规则

创建组合规则文件：

```markdown
# 全栈开发规则

## 前端规则（Next.js + React）

你是 Next.js 和 React 开发方面的专家。

## 后端规则（Node.js + Express）

你是 Node.js 和 Express 开发方面的专家。

## 全栈约定

- 前后端使用 TypeScript
- API 使用 RESTful 设计
- 使用统一的错误处理
```

### 自定义规则

在基础规则上添加项目特定配置：

```markdown
# 基于标准规则的自定义配置

你是 Next.js 专家。（基础规则）

## 项目特定配置

- 使用 pnpm 而非 npm
- 使用 src/app 目录结构
- 使用 @/ 路径别名
- 启用 App Router
- 使用 Tailwind CSS
```

### 团队协作

在团队项目中：

1. 将 `.cursorrules` 加入版本控制
2. 团队成员使用统一规则
3. 定期评审和更新规则

## 常见问题

### Q: 规则文件不生效？

**A: 检查以下几点：**
- 文件是否在项目根目录
- 文件名是否正确 (`.cursorrules`，不是 `.cursorrules.txt`)
- Cursor 是否重新加载了项目

### Q: 如何验证规则生效？

**A: 在 AI Chat 中提问：**
```
请告诉我当前项目的编码规范
```
AI 应该会根据 `.cursorrules` 内容回答。

### Q: 规则文件太大怎么办？

**A: 精简规则内容：**
- 只保留核心原则
- 移除重复内容
- 使用链接引用详细文档

## 最佳实践

1. **保持简洁**：规则文件控制在 1-2KB
2. **定期更新**：随项目演进更新规则
3. **团队共识**：确保团队成员理解规则
4. **版本控制**：将规则纳入 Git 管理
5. **测试验证**：验证规则是否达到预期效果

## 相关资源

- [贡献指南](./contributing.md) - 添加新规则
- [翻译指南](./translating.md) - 帮助翻译
- [最佳实践](../../zh/best-practices.md) - 更多建议
