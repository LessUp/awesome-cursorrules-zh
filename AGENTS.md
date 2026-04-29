# AGENTS.md

## 项目定位

本仓库是面向中文开发者的 Cursor 规则库与双语站点，目标是维持一个可稳定归档、可持续验证、可低成本接手的最终状态。

## 权威源

- `rules/`：唯一规则资产源（132+ .cursorrules 文件）
- `zh/` 与 `en/`：唯一公开站点正文源
- `public/`：站点静态资源（logo、og-image）
- `docs/`：内部开发文档，不参与公开站点发布

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Node.js | >=22.0.0 | 运行时 |
| VitePress | ^1.6.4 | 静态站点生成 |
| markdownlint-cli2 | ^0.22.1 | Markdown 检查 |

## 常用命令

```bash
npm run docs:dev      # 开发服务器
npm run docs:build    # 构建站点
npm run check         # lint + validate
npm run ci            # check + build
```

## 开发边界

- 不把 `docs/` 当作公开正文源
- 不扩张 GitHub Actions
- 不在生成产物里引入时间戳漂移
- 对外文档优先中文，维护 `zh/` 与 `en/` 信息对齐

## 提交规范

使用约定式提交：`feat`/`fix`/`docs`/`chore`/`translate`

## 相关文档

- [README.md](./README.md) - 项目说明
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
