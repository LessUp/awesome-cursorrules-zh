<!-- From: /home/shane/dev/awesome-cursorrules-zh/AGENTS.md -->
# AGENTS.md - Awesome Cursor Rules 项目 AI 助手工作指南

欢迎来到 Awesome Cursor Rules 中文版项目！本项目是 [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 的中文本地化版本，为中文开发者提供精心整理的 Cursor AI 编程规则集合。

---

## 项目概述

### 基本信息

| 属性 | 详情 |
|------|------|
| **项目名称** | Awesome Cursor Rules (中文版) |
| **版本** | 2.1.0 |
| **许可证** | MIT |
| **仓库地址** | https://github.com/LessUp/awesome-cursorrules-zh |
| **官网** | https://awesome-cursorrules-zh.js.org/ |

### 项目定位

本项目是 **Cursor AI 编辑器** 的规则集合网站，提供：
- **132+** 个 `.cursorrules` 规则文件
- **32+** 个技术领域分类
- **190+** 个技术文档
- 完整的中英文双语支持
- 基于 VitePress 构建的静态站点

### 什么是 `.cursorrules`？

`.cursorrules` 是 [Cursor AI 编辑器](https://cursor.sh/) 的项目级配置文件，用于：
- 定义代码风格和命名规范
- 指定技术栈（框架、库、工具链）
- 设置 AI 代码生成行为
- 应用最佳实践和行业标准

---

## 技术栈

### 核心依赖

| 技术 | 版本 | 用途 |
|------|------|------|
| [Node.js](https://nodejs.org/) | >= 18.0.0 | 运行时 |
| [npm](https://npmjs.com/) | >= 9.0.0 | 包管理器 |
| [VitePress](https://vitepress.dev/) | ^1.6.4 | 静态站点生成器 |
| [Vue.js](https://vuejs.org/) | 3.x | 前端框架 |

### 开发依赖

- `markdownlint-cli2` - Markdown 格式检查
- `postcss` - CSS 后处理
- `autoprefixer` - CSS 浏览器前缀

---

## 目录结构

```
awesome-cursorrules-zh/
├── rules/                    # 规则文件核心目录
│   ├── ai/                   # AI/机器学习
│   ├── frontend/             # 前端开发
│   ├── backend/              # 后端开发
│   ├── mobile/               # 移动开发
│   ├── devops/               # DevOps
│   ├── cloud/                # 云服务
│   ├── security/             # 安全
│   ├── blockchain/           # 区块链
│   ├── iot/                  # 物联网
│   └── ...                   # 其他 24 个技术领域
├── zh/                       # 中文 VitePress 页面
├── en/                       # 英文 VitePress 页面
├── docs/                     # 文档源文件
│   ├── zh/                   # 中文文档
│   ├── en/                   # 英文文档
│   ├── setup/                # 环境设置指南
│   ├── tutorials/            # 教程
│   └── architecture/         # 架构文档
├── .vitepress/               # VitePress 配置
│   ├── config.mjs            # 站点配置
│   ├── theme/                # 自定义主题
│   └── dist/                 # 构建输出目录
├── specs/                    # 规范文档 (SDD)
│   ├── product/              # 产品需求
│   ├── rfc/                  # 技术设计
│   ├── api/                  # API 接口定义
│   ├── db/                   # 数据库规范
│   └── testing/              # 测试规范
├── scripts/                  # 工具脚本
│   ├── validate-rules.js     # 规则验证脚本
│   └── generate-stats.js     # 统计生成脚本
└── .github/                  # GitHub 配置
    ├── workflows/            # CI/CD 工作流
    └── ISSUE_TEMPLATE/       # Issue 模板
```

### 规则目录组织 (`/rules/`)

每个技术领域目录下包含具体的规则子目录，每个子目录包含：
- `.cursorrules` - 规则配置文件（必需）
- `README.md` - 规则说明（可选）

示例：
```
rules/frontend/react/nextjs-typescript/
├── .cursorrules              # Next.js + TypeScript 规则文件
└── README.md                 # 规则说明
```

---

## 构建和开发命令

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
# 启动 VitePress 开发服务器
npm run docs:dev
```

本地预览地址：http://localhost:5173

### 构建站点

```bash
# 生成静态站点
npm run docs:build

# 构建产物位于 .vitepress/dist/
```

### 预览构建

```bash
npm run docs:preview
```

### 代码检查

```bash
# 运行所有检查
npm run check

# 单独检查
npm run lint           # Markdown 格式检查
npm run validate       # 规则文件验证
```

### 生成统计

```bash
npm run stats          # 生成 stats.json
```

### CI 流程

```bash
npm run ci             # 运行 lint + validate + docs:build
```

---

## 代码风格和规范

### Spec-Driven Development (SDD)

本项目严格遵循**规范驱动开发**范式：

1. **先看规范，再写代码** - 任何变更必须基于 `/specs/` 中的规范文档
2. **先更新规范，再实现变更** - 新功能需先创建/更新规范
3. **100% 规范遵循** - 代码实现必须符合规格定义（包括变量命名、API 路径、数据类型等）
4. **禁止镀金** - 不添加规格之外的特性

### 规范目录说明

| 目录 | 用途 |
|------|------|
| `/specs/product/` | 产品需求文档 (PRD)、功能定义、验收标准 |
| `/specs/rfc/` | 技术设计方案、架构提案 |
| `/specs/api/` | API 接口定义 (OpenAPI、GraphQL schemas) |
| `/specs/db/` | 数据库schema 规范 |
| `/specs/testing/` | BDD 测试用例规范 (Gherkin .feature 文件) |

### 提交规范

使用**约定式提交 (Conventional Commits)**：

```
<类型>(<范围>): <描述>

[可选正文]

[可选页脚]
```

#### 提交类型

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

示例：
```bash
git commit -m "translate(backend/python): 完成 FastAPI 规则集翻译"
git commit -m "fix(docs): 修正快速开始指南中的路径错误"
```

### 翻译规范

#### 术语一致性

| 英文 | 中文翻译 | 说明 |
|------|----------|------|
| Component | 组件 | - |
| Hook | 钩子 | React 术语 |
| State | 状态 | - |
| Props | 属性 | 或保留 props |
| Middleware | 中间件 | - |
| Endpoint | 端点 | - |
| Repository | 仓库 | Git 语境 |
| Repository | 仓储 | DDD 语境 |

#### 保留英文的专有名词

- React, Vue, Angular, Svelte
- Next.js, Nuxt, NestJS
- TypeScript, JavaScript
- Docker, Kubernetes
- PostgreSQL, MongoDB
- FastAPI, Django

### Markdown 格式规范

- 使用 `.markdownlint.json` 配置
- 标题层级清晰（H1 -> H2 -> H3）
- 代码块标明语言类型
- 中英文之间加空格
- 标点符号使用中文

---

## 测试策略

### 本地测试

```bash
# 1. 规则验证
npm run validate

# 2. Markdown 检查
npm run lint

# 3. 构建测试
npm run docs:build

# 4. 查看统计
npm run stats
```

### 规则验证检查项

脚本 `scripts/validate-rules.js` 会检查：

| 检查项 | 要求 | 级别 |
|--------|------|------|
| 文件大小 | >= 200 字符 | warning |
| 文件大小 | <= 50,000 字符 | warning |
| 角色定义 | 包含 "you are", "role", "expert" 等 | warning |
| 代码规范 | 包含 coding style 相关内容 | info |
| 最佳实践 | 包含 best practice, should, must | info |
| 技术栈 | 明确提及技术栈 | info |
| 换行符 | 使用 Unix 风格 (LF) | info |
| 行尾空格 | 无多余空格 | info |
| 文件结构 | 有清晰的标题层级 | info |

### CI/CD 质量检查

GitHub Actions 工作流：

1. **quality-check.yml** - 提交和 PR 时运行
   - 项目结构验证
   - Markdown 格式检查
   - 规则文件深度验证
   - VitePress 构建测试

2. **deploy.yml** - 部署到 GitHub Pages
   - 触发条件：`master`/`main` 分支的文档/配置变更
   - Node.js 20 环境
   - 构建验证和产物检查

---

## 开发工作流

### 添加新规则

1. **选择分类**
   ```bash
   # 在合适的分类目录下创建子目录
   mkdir -p rules/<category>/<rule-name>/
   ```

2. **创建规则文件**
   ```bash
   touch rules/<category>/<rule-name>/.cursorrules
   ```

3. **验证规则**
   ```bash
   npm run validate
   ```

4. **本地预览**
   ```bash
   npm run docs:dev
   ```

### 贡献流程

```text
提出想法 → 更新/创建 Spec → 社区审核 → 实现代码 → 合并
```

详细步骤：

```bash
# 1. Fork 仓库
gh repo fork LessUp/awesome-cursorrules-zh

# 2. 克隆你的 Fork
git clone https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh

# 3. 创建分支
git checkout -b feat/your-feature

# 4. 进行修改
# 编辑相关文件，遵循 SDD 规范

# 5. 运行检查
npm run check

# 6. 提交更改
git add .
git commit -m "feat: 添加 xxx 规则"

# 7. 推送并创建 PR
git push origin feat/your-feature
gh pr create
```

---

## 安全注意事项

### 敏感信息处理

- ❌ **不要** 在 `.cursorrules` 文件中包含 API 密钥、密码或令牌
- ❌ **不要** 暴露内部系统架构或敏感配置
- ✅ **可以** 包含公开的最佳实践和编码规范

### AI 生成内容审核

- 审查 AI 生成的代码示例是否安全
- 确保示例代码无 SQL 注入、XSS 等常见漏洞
- 遵循安全编码规范

### 依赖管理

- 定期更新 `package.json` 中的依赖
- 使用 `npm audit` 检查安全漏洞
- Dependabot 已启用自动更新

---

## 常用参考

### 项目统计命令

```bash
# 规则数量
find rules -name '.cursorrules' -type f | wc -l

# 分类数量
ls -1 rules | wc -l

# Markdown 文档数量
find . -name '*.md' -not -path './node_modules/*' | wc -l

# 总行数
find . -name '.cursorrules' -exec cat {} \; | wc -l
```

### 本地开发快速检查清单

- [ ] `npm install` 安装依赖
- [ ] `npm run docs:dev` 本地预览正常
- [ ] `npm run validate` 规则验证通过
- [ ] `npm run lint` Markdown 检查通过
- [ ] `npm run docs:build` 构建成功
- [ ] 修改符合 SDD 规范
- [ ] 提交信息符合约定式提交

### 问题排查

| 问题 | 解决方案 |
|------|----------|
| `npm install` 失败 | 检查 Node.js 版本 >= 18.0.0 |
| 构建失败 | 检查 Markdown 语法，查看错误输出 |
| 规则验证失败 | 运行 `npm run validate` 查看详细报告 |
| 端口被占用 | VitePress 使用 5173 端口，检查并关闭占用进程 |

---

## 获取帮助

- **GitHub Issues**: https://github.com/LessUp/awesome-cursorrules-zh/issues
- **GitHub Discussions**: https://github.com/LessUp/awesome-cursorrules-zh/discussions
- **在线文档**: https://awesome-cursorrules-zh.js.org/

---

## 备注

本文件为 AI 助手工作指南，人类贡献者请同时参考：
- [README.md](./README.md) - 项目说明
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - 行为准则
