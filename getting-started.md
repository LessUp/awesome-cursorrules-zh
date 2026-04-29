# 快速开始指南

> 🚀 5 分钟上手 Awesome Cursor Rules 中文版

## 目录

- [前置要求](#前置要求)
- [三步快速开始](#三步快速开始)
- [选择规则集](#选择规则集)
- [进阶配置](#进阶配置)
- [下一步](#下一步)

---

## 前置要求

确保已安装以下工具：

| 工具 | 版本要求 | 下载链接 |
|------|----------|----------|
| Cursor AI 编辑器 | 最新版本 | [cursor.sh](https://cursor.sh/) |
| Git | 任意版本 | [git-scm.com](https://git-scm.com/) |

---

## 三步快速开始

### 第一步：获取规则集

```bash
# 克隆仓库到本地
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 进入目录
cd awesome-cursorrules-zh
```

### 第二步：选择并应用规则

根据你的技术栈选择合适的规则：

**🌐 前端项目**

```bash
# Next.js + TypeScript
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目路径/

# Vue 3 Composition API
cp rules/frontend/vue/composition-api/.cursorrules /你的项目路径/

# React Query
cp rules/frontend/react/react-query/.cursorrules /你的项目路径/
```

**⚙️ 后端项目**

```bash
# Python FastAPI
cp rules/backend/python/fastapi-api-example/.cursorrules /你的项目路径/

# Node.js + ES Modules
cp rules/backend/nodejs/es-module-guide/.cursorrules /你的项目路径/

# Go 后端
cp rules/backend/go/backend-scalability/.cursorrules /你的项目路径/
```

**📱 移动端项目**

```bash
# Flutter
cp rules/mobile/flutter/flutter-app-expert/.cursorrules /你的项目路径/

# React Native
cp rules/mobile/react-native-expo/.cursorrules /你的项目路径/
```

### 第三步：在 Cursor 中使用

1. 用 Cursor 打开你的项目
2. 确认 `.cursorrules` 文件位于项目**根目录**
3. 开始编码，享受 AI 智能辅助

> 💡 **提示**：首次使用建议重启 Cursor 确保规则生效

---

## 选择规则集

### 按技术栈快速索引

完整规则目录位于 `rules/` 目录下：

```
rules/
├── ai/                   # AI/ML 规则
├── backend/              # 后端开发规则
│   ├── go/
│   ├── java/
│   ├── nodejs/
│   ├── php/
│   └── python/
├── blockchain/           # 区块链规则
├── cloud/                # 云服务规则
├── data/                 # 数据工程规则
├── data-science/         # 数据科学规则
├── database/             # 数据库规则
├── devops/               # DevOps 规则
├── edge/                 # 边缘计算规则
├── frontend/             # 前端开发规则
│   ├── angular/
│   ├── react/
│   ├── svelte/
│   └── vue/
├── mobile/               # 移动开发规则
│   ├── android/
│   ├── flutter/
│   ├── ios/
│   └── react-native-expo/
├── security/             # 安全规则
└── systems/              # 系统编程规则
```

### 热门规则推荐

| 技术栈 | 推荐规则 | 适用场景 |
|--------|----------|----------|
| **Next.js** | `nextjs-typescript` | 全栈 React 应用 |
| **Vue 3** | `composition-api` | 现代 Vue 项目 |
| **React Native** | `react-native-expo` | 跨平台移动应用 |
| **Flutter** | `flutter-app-expert` | 原生移动应用 |
| **FastAPI** | `fastapi-api-example` | Python API 开发 |
| **Django** | `django-best-practices` | Python Web 应用 |
| **NestJS** | `nestjs-typescript` | Node.js 企业应用 |
| **Go** | `backend-scalability` | 高性能后端服务 |

---

## 进阶配置

### 合并多个规则集

对于前后端分离项目，可以合并多个规则：

```bash
# 创建合并后的规则文件
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules

# 添加分隔线
echo "" >> .cursorrules
echo "# ===== 后端规则 =====" >> .cursorrules
echo "" >> .cursorrules

# 追加后端规则
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

### 目录级规则配置

为不同模块设置不同规则：

```
my-project/
├── .cursorrules                 # 项目级通用规则
├── frontend/
│   └── .cursorrules             # 前端规则（Next.js）
├── backend/
│   └── .cursorrules             # 后端规则（FastAPI）
└── shared/
    └── .cursorrules             # 共享模块规则
```

> 📌 **规则优先级**：子目录规则会覆盖父目录规则

### 自定义规则

在 `.cursorrules` 末尾添加项目特定规则：

```bash
# 追加自定义规则
cat >> .cursorrules << 'EOF'

## 项目自定义规则

### 命名规范
- 组件文件：PascalCase (如 UserProfile.tsx)
- 工具函数：camelCase (如 formatDate.ts)
- 常量：UPPER_SNAKE_CASE (如 API_BASE_URL)

### API 规范
- 路由前缀：/api/v1
- 响应格式：{ success, data, error }

### 数据库规范
- 主键：id
- 时间戳：created_at, updated_at
- 软删除：deleted_at
EOF
```

---

## 下一步

根据你的需求继续学习：

| 想要... | 阅读 |
|---------|------|
| 深入学习配置技巧 | [最佳实践指南](./best-practices.md) |
| 了解详细安装步骤 | [安装指南](./installation-guide.md) |
| 解决使用问题 | [故障排除](./troubleshooting.md) |
| 查看规则语法 | [API 参考](./api-reference.md) |
| 参与项目贡献 | [贡献指南](../../CONTRIBUTING.md) |

---

## 快速命令参考

```bash
# 查看所有可用规则
ls rules/

# 检查规则文件内容
cat .cursorrules | head -30

# 验证文件编码（应为 UTF-8）
file .cursorrules

# 备份当前规则
cp .cursorrules .cursorrules.backup
```

---

<div align="center">

> 💡 **提示**：大多数情况下，复制一个 `.cursorrules` 文件到项目根目录即可开始使用！

**[⬆ 返回顶部](#快速开始指南)** | **[📚 返回文档首页](./README.md)**

</div>
