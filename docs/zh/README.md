# 文档首页

> 📚 欢迎来到 Awesome Cursor Rules 中文版官方文档

## 快速导航

| 文档 | 说明 | 阅读时间 |
|------|------|----------|
| [快速开始](./getting-started.md) | 5 分钟上手指南 | 5 min |
| [安装指南](./installation-guide.md) | 完整安装配置说明 | 10 min |
| [最佳实践](./best-practices.md) | 规则使用最佳实践 | 15 min |
| [故障排除](./troubleshooting.md) | 常见问题解决方案 | 10 min |
| [API 参考](./api-reference.md) | 规则文件格式参考 | 8 min |

---

## 什么是 Cursor Rules？

`.cursorrules` 是 [Cursor AI](https://cursor.sh/) 编辑器的项目级配置文件，用于定义：

- **编码规范** — 代码风格、命名约定、文件组织
- **技术栈** — 框架选择、库版本、工具链
- **最佳实践** — 架构模式、性能优化、安全策略
- **AI 行为** — 回复风格、代码生成偏好

> 💡 简单理解：它是给 AI 助手的"项目工作手册"

---

## 开始使用

### 三步上手

```bash
# 1. 克隆规则集仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. 选择适合你项目的规则
cd awesome-cursorrules-zh
ls rules/frontend/react/  # 查看前端规则

# 3. 复制到项目目录
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/
```

### 推荐规则速查

| 技术栈 | 推荐规则 | 路径 |
|--------|----------|------|
| Next.js + TypeScript | nextjs-typescript | `rules/frontend/react/nextjs-typescript/` |
| Vue 3 | composition-api | `rules/frontend/vue/composition-api/` |
| React Native | react-native-expo | `rules/mobile/react-native-expo/` |
| FastAPI | fastapi-api-example | `rules/backend/python/fastapi-api-example/` |
| Go 后端 | backend-scalability | `rules/backend/go/backend-scalability/` |

---

## 文档结构

```
docs/
├── zh/                          # 中文文档（当前）
│   ├── README.md               # 📍 文档首页
│   ├── getting-started.md      # 🚀 快速开始
│   ├── installation-guide.md   # ⚙️ 安装指南
│   ├── best-practices.md       # 💡 最佳实践
│   ├── troubleshooting.md      # 🔧 故障排除
│   └── api-reference.md        # 📖 API 参考
│
└── en/                          # English Documentation
    └── ...                     # 英文文档
```

---

## 语言切换

本文档提供中英文双语版本：

- 🇨🇳 [中文文档](./README.md)（当前）
- 🇺🇸 [English Documentation](../en/README.md)

---

## 获取帮助

### 自助排查

遇到问题？按此顺序排查：

1. 🔍 [故障排除指南](./troubleshooting.md) — 常见问题速查
2. ❓ 搜索 [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
3. 💬 发起 [GitHub Discussion](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

### 问题报告

发现文档错误或想改进内容？欢迎提交 Issue：

- 🐛 [报告问题](https://github.com/LessUp/awesome-cursorrules-zh/issues/new/choose)
- 📝 [文档改进](https://github.com/LessUp/awesome-cursorrules-zh/issues/new?template=documentation.md)

---

## 贡献

想要参与改进本文档？请阅读 [贡献指南](../../CONTRIBUTING.md)。

---

<div align="center">

**[⬆ 返回顶部](#文档首页)**

</div>
