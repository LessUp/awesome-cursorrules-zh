# 贡献指南

感谢你对 Awesome Cursor Rules 中文版的关注！本项目欢迎所有形式的贡献。

## 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
- [翻译规范](#翻译规范)
- [提交规范](#提交规范)
- [审核流程](#审核流程)

---

## 行为准则

参与本项目即表示你同意遵守我们的 [行为准则](./CODE_OF_CONDUCT.md)。

核心原则：
- 尊重所有贡献者
- 接受建设性批评
- 关注对社区最有利的事情

---

## 如何贡献

### 报告问题

发现翻译错误或内容过时？请提交 Issue：

1. 搜索 [现有 Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) 确保问题未被报告
2. 使用问题模板创建新 Issue
3. 提供清晰的描述和复现步骤

### 改进内容

```bash
# 1. Fork 仓库
gh repo fork LessUp/awesome-cursorrules-zh

# 2. 克隆你的 Fork
git clone https://github.com/你的用户名/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh

# 3. 创建分支
git checkout -b fix/your-improvement

# 4. 进行修改
# 编辑相关文件

# 5. 提交更改
git add .
git commit -m "fix: 修复翻译错误"

# 6. 推送到 Fork
git push origin fix/your-improvement

# 7. 创建 Pull Request
gh pr create
```

### 同步上游更新

```bash
# 添加上游仓库
git remote add upstream https://github.com/LessUp/awesome-cursorrules-zh.git

# 获取最新更新
git fetch upstream

# 合并到本地
git checkout main
git merge upstream/main
```

---

## 翻译规范

### 术语一致性

| 英文 | 中文翻译 | 说明 |
|------|----------|------|
| Component | 组件 | |
| Hook | 钩子 | React 术语 |
| State | 状态 | |
| Props | 属性 | 或保留 props |
| Middleware | 中间件 | |
| Endpoint | 端点 | |
| Repository | 仓库 | Git 语境 |
| Repository | 仓储 | DDD 语境 |
| Schema | 模式 | 数据库语境 |
| Schema | 架构 | GraphQL 语境 |

**专有名词保留英文：**
- React, Vue, Angular, Svelte
- Next.js, Nuxt, NestJS
- TypeScript, JavaScript
- Docker, Kubernetes
- PostgreSQL, MongoDB
- FastAPI, Django

### 翻译质量标准

| 维度 | 要求 | 权重 |
|------|------|------|
| 准确性 | 术语翻译准确，技术概念无误 | 40% |
| 流畅性 | 中文表达自然，符合技术文档习惯 | 30% |
| 完整性 | 内容完整，无遗漏 | 20% |
| 规范性 | 格式正确，术语使用规范 | 10% |

### 翻译检查清单

- [ ] 专有名词保留英文
- [ ] 技术术语翻译一致
- [ ] 代码示例未被修改
- [ ] Markdown 格式正确
- [ ] 链接有效可访问
- [ ] 无语法和拼写错误

---

## 提交规范

使用约定式提交格式：

```
<类型>(<范围>): <描述>

[可选正文]

[可选页脚]
```

### 提交类型

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | feat: 添加 Go 后端规则集 |
| `fix` | Bug 修复 | fix: 修正 FastAPI 规则中的错误 |
| `docs` | 文档更新 | docs: 更新安装指南 |
| `translate` | 翻译更新 | translate: 完成 React 规则集翻译 |
| `refactor` | 重构 | refactor: 重组目录结构 |
| `style` | 格式调整 | style: 统一缩进格式 |
| `test` | 测试相关 | test: 添加验证脚本 |
| `chore` | 杂项 | chore: 更新 CI 配置 |

### 提交示例

```bash
# 新增翻译
git commit -m "translate(backend/python): 完成 FastAPI 规则集翻译"

# 修复问题
git commit -m "fix(docs): 修正快速开始指南中的路径错误"

# 更新文档
git commit -m "docs: 更新贡献指南中的提交规范"
```

---

## 审核流程

### Pull Request 流程

```
提交 PR → 自动检查 → 人工审核 → 合并
    │         │           │        │
    │         │           │        └── 完成贡献
    │         │           └── 代码审查
    │         └── CI/CD 检查
    └── 创建 PR
```

### 审核标准

| 检查项 | 要求 |
|--------|------|
| CI 检查 | 全部通过 |
| 代码质量 | 无明显问题 |
| 翻译质量 | 符合翻译规范 |
| 提交信息 | 符合提交规范 |
| 文档完整 | 必要的文档已更新 |

### 审核时间

- 小型修复：1-3 天
- 中型变更：3-7 天
- 大型变更：7-14 天

---

## 贡献者认可

### 贡献等级

| 等级 | 条件 | 标识 |
|------|------|------|
| 🥉 翻译贡献者 | 完成 1-3 个规则集 | 列入贡献者名单 |
| 🥈 活跃贡献者 | 完成 4-10 个规则集 | 突出显示 |
| 🥇 核心贡献者 | 完成 10+ 规则集或重要功能 | 置顶展示 |
| ⭐ 维护者 | 长期参与项目管理 | 协作权限 |

### 贡献统计

我们会在项目中记录和展示：
- 翻译的规则集数量
- 提交的 PR 数量
- 参与的领域

---

## 获取帮助

- **问题讨论**：[GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)
- **问题报告**：[GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- **邮件联系**：通过 GitHub 个人主页

---

**感谢你的贡献！** 🙏

每一个翻译、每一次修正，都让中文开发者社区受益。
