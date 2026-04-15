# 快速开始指南

> 5 分钟快速上手 Awesome Cursor Rules 中文版

## 目录

- [前置要求](#前置要求)
- [快速体验](#快速体验)
- [选择规则集](#选择规则集)
- [进阶配置](#进阶配置)
- [下一步](#下一步)

---

## 前置要求

| 工具 | 要求 | 下载 |
|------|------|------|
| Cursor AI 编辑器 | 最新版本 | [cursor.sh](https://cursor.sh/) |
| Git | 任意版本 | [git-scm.com](https://git-scm.com/) |

---

## 快速体验

### 第一步：获取规则集

```bash
# 克隆仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 进入目录
cd awesome-cursorrules-zh
```

### 第二步：选择并应用规则

**前端项目示例：**

```bash
# Next.js + TypeScript
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/

# Vue 3 + Composition API
cp rules/frontend/vue/composition-api/.cursorrules /你的项目路径/

# React Query
cp rules/frontend/react/react-query/.cursorrules /你的项目路径/
```

**后端项目示例：**

```bash
# Python FastAPI
cp rules/backend/python/fastapi-api-example/.cursorrules /你的项目路径/

# Node.js + ES Modules
cp rules/backend/nodejs/es-module-guide/.cursorrules /你的项目路径/

# Go 后端
cp rules/backend/go/backend-scalability/.cursorrules /你的项目路径/
```

### 第三步：在 Cursor 中使用

1. 用 Cursor 打开你的项目
2. 确认 `.cursorrules` 文件在项目根目录
3. 开始编码，享受 AI 智能辅助

---

## 选择规则集

### 按技术栈快速索引

| 技术栈 | 推荐规则 | 路径 |
|--------|----------|------|
| **Next.js** | nextjs-typescript | `rules/frontend/react/nextjs-typescript/` |
| **Vue 3** | composition-api | `rules/frontend/vue/composition-api/` |
| **React Native** | react-native-expo | `rules/mobile/react-native-expo/` |
| **Flutter** | flutter-app-expert | `rules/mobile/flutter/flutter-app-expert/` |
| **FastAPI** | fastapi-api-example | `rules/backend/python/fastapi-api-example/` |
| **Django** | django-best-practices | `rules/backend/python/django-best-practices/` |
| **NestJS** | nestjs-typescript | `rules/backend/nodejs/nestjs-typescript/` |
| **Go** | backend-scalability | `rules/backend/go/backend-scalability/` |

### 浏览全部规则集

```bash
# 查看所有分类
ls rules/

# 查看前端规则
ls rules/frontend/react/

# 查看后端规则
ls rules/backend/python/
```

---

## 进阶配置

### 合并多个规则集

```bash
# 前后端规则合并
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

### 目录级规则配置

```
my-project/
├── .cursorrules           # 通用规则
├── frontend/
│   └── .cursorrules       # 前端规则（优先）
└── backend/
    └── .cursorrules       # 后端规则（优先）
```

Cursor 会优先使用更深层级的规则文件。

### 自定义规则

在 `.cursorrules` 末尾添加项目特定规则：

```bash
# 追加自定义规则
cat >> .cursorrules << 'EOF'

## 项目自定义规则

- API 路由统一使用 /api/v1 前缀
- 所有组件必须有 PropTypes 或 TypeScript 类型定义
- 数据库模型必须包含 created_at 和 updated_at 字段
EOF
```

---

## 下一步

| 想要了解更多？ | 查看文档 |
|---------------|----------|
| 详细配置和最佳实践 | [最佳实践指南](./best-practices.md) |
| 安装和环境配置 | [安装指南](./installation-guide.md) |
| 遇到问题？ | [故障排除](./troubleshooting.md) |
| 参与贡献 | [贡献指南](../CONTRIBUTING.md) |

---

> 💡 **提示**：大多数情况下，只需复制一个 `.cursorrules` 文件到项目根目录即可开始使用！
