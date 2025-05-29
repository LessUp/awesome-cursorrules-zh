# 快速开始指南 🚀

欢迎使用 Awesome Cursor Rules 中文版！本指南将帮助您快速上手。

## 📋 前置要求

- [Cursor AI 编辑器](https://cursor.sh/) (推荐最新版本)
- Git (用于克隆仓库)
- 基本的命令行操作知识

## 🎯 5分钟快速体验

### 1. 克隆仓库
```bash
git clone https://github.com/your-username/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
```

### 2. 选择适合的规则集
根据您的技术栈选择对应的规则集：

#### React 项目
```bash
# Next.js + TypeScript
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# React + Chakra UI
cp rules/frontend/react/chakra-ui/.cursorrules ./
```

#### Vue 项目
```bash
# Vue 3 + Composition API
cp rules/frontend/vue/composition-api/.cursorrules ./

# Nuxt 3
cp rules/frontend/vue/nuxt3/.cursorrules ./
```

#### 后端项目
```bash
# Python FastAPI
cp rules/backend/python/fastapi/.cursorrules ./

# Node.js + Express
cp rules/backend/nodejs/express-mongodb/.cursorrules ./
```

### 3. 在 Cursor 中使用
1. 用 Cursor 打开您的项目
2. 确保项目根目录有 `.cursorrules` 文件
3. 开始编码，享受智能提示！

## 📚 详细使用说明

### 选择合适的规则集

我们的规则集按技术栈分类：

```
rules/
├── frontend/           # 前端技术栈
│   ├── react/         # React 生态系统
│   ├── vue/           # Vue 生态系统
│   ├── typescript/    # TypeScript 专项
│   └── mobile/        # 移动端开发
├── backend/           # 后端技术栈
│   ├── nodejs/        # Node.js 生态
│   ├── python/        # Python 生态
│   └── dotnet/        # .NET 生态
├── blockchain/        # 区块链开发
├── systems/          # 系统编程
├── cms/              # 内容管理系统
└── general/          # 通用规则
```

### 自定义规则

您可以基于我们的规则集创建自定义版本：

1. **复制基础规则**
   ```bash
   cp rules/frontend/react/nextjs-basic/.cursorrules ./.cursorrules
   ```

2. **编辑规则文件**
   ```bash
   # 使用您喜欢的编辑器
   code .cursorrules
   ```

3. **添加项目特定规则**
   ```yaml
   # 在文件末尾添加
   - 项目特定的编码规范
   - 团队约定的命名规则
   - 自定义的最佳实践
   ```

### 多技术栈项目

对于使用多种技术的项目，您可以：

1. **合并多个规则集**
   ```bash
   # 创建自定义规则文件
   cat rules/frontend/react/nextjs-basic/.cursorrules > .cursorrules
   echo "" >> .cursorrules
   cat rules/backend/nodejs/express-mongodb/.cursorrules >> .cursorrules
   ```

2. **使用目录特定规则**
   ```
   project/
   ├── .cursorrules              # 通用规则
   ├── frontend/
   │   └── .cursorrules          # 前端特定规则
   └── backend/
       └── .cursorrules          # 后端特定规则
   ```

## 🔧 高级配置

### Cursor 设置优化

1. **启用规则文件**
   - 打开 Cursor 设置
   - 确保 "Use .cursorrules" 选项已启用

2. **调整 AI 行为**
   - 根据需要调整 AI 的创造性级别
   - 设置合适的上下文窗口大小

### 团队协作

1. **统一规则**
   ```bash
   # 将规则文件加入版本控制
   git add .cursorrules
   git commit -m "添加团队编码规则"
   ```

2. **规则文档化**
   ```markdown
   # 在 README.md 中说明
   ## 开发规范
   本项目使用 Cursor AI 编程规则，请确保：
   1. 安装 Cursor 编辑器
   2. 项目根目录包含 .cursorrules 文件
   3. 遵循规则中的编码规范
   ```

## 🐛 常见问题

### Q: 规则不生效怎么办？
A: 检查以下几点：
- 确保 `.cursorrules` 文件在项目根目录
- 重启 Cursor 编辑器
- 检查文件格式是否正确

### Q: 如何知道规则是否在工作？
A: 观察 AI 的代码建议是否符合规则要求，比如：
- 命名规范是否一致
- 代码结构是否符合最佳实践
- 错误处理是否完善

### Q: 可以同时使用多个规则文件吗？
A: Cursor 会按目录层级查找规则文件，子目录的规则会覆盖父目录的规则。

## 📖 下一步

- 查看 [最佳实践](./best-practices.md)
- 了解 [贡献指南](../CONTRIBUTING.md)
- 浏览 [项目路线图](./roadmap.md)
- 参与 [社区讨论](https://github.com/your-username/awesome-cursorrules-zh/discussions)

---

🎉 **开始您的 AI 编程之旅吧！** 如有问题，欢迎提交 [Issue](https://github.com/your-username/awesome-cursorrules-zh/issues)。
