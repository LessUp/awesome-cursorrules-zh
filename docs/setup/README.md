# Setup Guides

环境设置和安装指南，帮助您快速开始使用 awesome-cursorrules-zh 项目。

## 可用指南

| 指南 | 中文 | English |
|------|------|---------|
| 快速开始 | [中文](../../zh/getting-started.md) | [English](../../en/getting-started.md) |
| 安装指南 | [中文](../../zh/installation-guide.md) | [English](../../en/installation-guide.md) |
| Node.js 环境 | [详情](./nodejs-setup.md) | - |
| 编辑器配置 | [详情](./editor-setup.md) | - |

## 系统要求

| 要求 | 版本 |
|------|------|
| Node.js | >= 18.0.0 |
| npm | >= 9.0.0 |
| Git | 任意版本 |

## 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. 进入目录
cd awesome-cursorrules-zh

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run docs:dev
```

## 使用规则文件

### 方法一：直接复制

```bash
# 复制规则文件到您的项目根目录
cp rules/frontend/react/nextjs-typescript/.cursorrules /your/project/
```

### 方法二：使用 Cursor 编辑器

1. 打开 Cursor 编辑器
2. 打开您的项目
3. 在项目根目录创建 `.cursorrules` 文件
4. 从本站选择合适的规则内容粘贴

### 方法三：命令行下载

```bash
# 下载单个规则
curl -o .cursorrules https://raw.githubusercontent.com/LessUp/awesome-cursorrules-zh/main/rules/frontend/react/nextjs-typescript/.cursorrules
```

## 验证安装

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 运行项目检查
npm run check

# 启动本地预览
npm run docs:preview
```

## 下一步

- [使用教程](../tutorials/using-rules.md) - 了解如何有效使用规则
- [贡献指南](../tutorials/contributing.md) - 参与项目贡献
- [最佳实践](../../zh/best-practices.md) - 推荐的开发实践
