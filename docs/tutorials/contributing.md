# 贡献指南

感谢您对 awesome-cursorrules-zh 项目的关注！本文档介绍如何为项目做出贡献。

## 贡献方式

| 方式 | 说明 |
|------|------|
| 添加新规则 | 贡献新的 .cursorrules 文件 |
| 改进现有规则 | 优化规则内容 |
| 翻译 | 添加或改进翻译 |
| 文档改进 | 完善文档内容 |
| Bug 修复 | 修复项目问题 |

## 开发环境设置

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git

# 2. 进入目录
cd awesome-cursorrules-zh

# 3. 安装依赖
npm install

# 4. 创建功能分支
git checkout -b feature/your-feature-name
```

## 添加新规则

### 步骤 1：确定位置

在 `rules/` 目录下找到合适的技术领域：

```
rules/
├── frontend/     # 前端规则
├── backend/      # 后端规则
├── mobile/       # 移动规则
└── ...           # 其他领域
```

### 步骤 2：创建规则文件

```bash
# 创建规则目录
mkdir -p rules/frontend/svelte/sveltekit

# 创建规则文件
touch rules/frontend/svelte/sveltekit/.cursorrules
```

### 步骤 3：编写规则

使用标准模板：

```markdown
# SvelteKit .cursorrules 提示文件

你是 SvelteKit 和 Svelte 5 开发方面的专家。

## 核心原则

- 使用 Svelte 5 Runes 语法
- 服务端渲染优先
- 类型安全优先

## 技术栈

- Svelte 5
- SvelteKit
- TypeScript
- Tailwind CSS

## 最佳实践

1. 使用 `+page.svelte` 和 `+page.ts` 分离
2. 使用 server functions 处理数据
3. 使用 `$state` 和 `$derived` 管理状态

## 关键约定

1. 组件文件使用 PascalCase
2. 路由文件使用 kebab-case
3. 类型定义放在 `$lib/types`
```

### 步骤 4：创建文档

创建 `README.md`：

```markdown
# SvelteKit 规则

适用于 SvelteKit 项目的 Cursor AI 规则。

## 适用场景

- SvelteKit 全栈应用
- Svelte 5 项目
- TypeScript 项目

## 使用方法

复制 `.cursorrules` 文件到项目根目录。
```

### 步骤 5：验证

```bash
# 运行验证
npm run validate

# 运行 lint
npm run lint
```

## 提交规范

使用约定式提交：

```
feat: 添加 SvelteKit 规则

- 添加 rules/frontend/svelte/sveltekit/.cursorrules
- 添加对应的 README.md 文档
```

### 提交类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能/新规则 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `refactor` | 代码重构 |
| `translate` | 翻译更新 |

## Pull Request 流程

1. **创建分支**：从 `main` 创建功能分支
2. **提交更改**：遵循提交规范
3. **运行检查**：`npm run check`
4. **推送分支**：推送到您的 fork
5. **创建 PR**：填写 PR 模板

### PR 检查项

- [ ] 代码通过 `npm run check`
- [ ] 遵循项目规范
- [ ] 添加必要文档
- [ ] 提交信息规范

## 代码规范

### 规则文件规范

- 必须包含角色定义
- 必须包含核心原则
- 推荐包含最佳实践
- 文件大小 >= 200 字节

### 文档规范

- 使用 Markdown 格式
- 遵循 markdownlint 规则
- 中英文双语支持

## 获取帮助

- [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

## 相关文档

- [翻译指南](./translating.md)
- [使用规则](./using-rules.md)
- [架构文档](../architecture/README.md)
