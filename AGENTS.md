# AGENTS.md

## 项目定位

Awesome Cursor Rules 中文版 - Cursor AI 编辑器规则集合。提供 **132+** 个 `.cursorrules` 规则文件，覆盖 **32+** 个技术领域。

## 权威源

| 目录 | 用途 |
|------|------|
| `rules/` | 规则资产源（.cursorrules 文件） |
| `zh/` | 中文站点页面 |
| `en/` | 英文站点页面 |
| `docs/zh/` `docs/en/` | 文档源文件（zh/en 为符号链接） |
| `public/` | 站点静态资源 |

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Node.js | >=20.0.0 | 运行时 |
| VitePress | ^1.6.4 | 静态站点生成 |
| markdownlint-cli2 | ^0.22.1 | Markdown 检查 |

## 常用命令

```bash
npm run dev        # 开发服务器
npm run build      # 构建站点
npm run check      # lint + validate
npm run ci         # check + build
```

## 开发边界

- 不扩张 GitHub Actions
- 对外文档优先中文
- `docs/` 仅存放文档源文件，不参与公开站点发布（通过符号链接引用）

## 提交规范

使用约定式提交：`feat`/`fix`/`docs`/`chore`/`translate`

## 相关文档

- [CLAUDE.md](./CLAUDE.md) - Claude Code 项目配置
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
