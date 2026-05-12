# 常见问题

## 关于 .cursorrules

### 什么是 .cursorrules 文件？

`.cursorrules` 是 Cursor AI 编辑器使用的配置文件，用于定义特定项目的编码规范、最佳实践和技术约束。它帮助 AI 助手更好地理解你的项目上下文，生成更符合项目风格的代码。

### .cursorrules 文件应该放在哪里？

将 `.cursorrules` 文件放在项目根目录。Cursor 会自动读取并应用其中的规则。

```
your-project/
├── .cursorrules    ← 放在这里
├── src/
├── package.json
└── ...
```

### 如何选择合适的规则？

1. **识别技术栈** - 确定项目使用的主要框架和语言
2. **浏览规则库** - 在 [规则库](/zh/rules/) 中找到对应分类
3. **组合规则** - 可以组合多个规则，如 React + TypeScript + Tailwind

### 可以同时使用多个规则吗？

可以。你可以将多个 `.cursorrules` 文件的内容合并到一个文件中。建议按以下顺序组织：

```markdown
# 项目规则

## 技术栈
- React 18 + TypeScript
- Tailwind CSS
- Vite

## 代码规范
[从 react-typescript.cursorrules 复制]

## 样式规范
[从 tailwind.cursorrules 复制]
```

---

## 使用问题

### 规则不生效怎么办？

**检查清单：**

1. ✅ 文件名是否正确（`.cursorrules`，注意前面的点）
2. ✅ 文件是否在项目根目录
3. ✅ 文件编码是否为 UTF-8
4. ✅ 重启 Cursor 编辑器

### 如何验证规则是否被加载？

在 Cursor 中：
1. 打开命令面板（`Cmd/Ctrl + Shift + P`）
2. 输入 "Cursor: Show Rules"
3. 查看当前加载的规则内容

### 规则太长会影响性能吗？

不会明显影响。Cursor 对规则文件进行了优化处理。但建议：
- 保持规则简洁，避免冗余
- 使用清晰的章节划分
- 单个规则文件建议不超过 500 行

---

## 贡献问题

### 如何贡献新规则？

参见 [贡献指南](/zh/contributing)。

### 如何报告规则问题？

在 [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) 中提交问题，包括：

1. 规则名称和路径
2. 问题描述
3. 预期行为
4. 实际行为

### 如何更新现有规则？

1. Fork 仓库
2. 修改对应规则文件
3. 提交 Pull Request
4. 等待审核合并

---

## 技术问题

### 支持哪些编程语言？

目前支持 30+ 种技术栈，包括：

| 分类 | 技术 |
|------|------|
| 前端 | React, Vue, Angular, Svelte, Next.js, Nuxt |
| 后端 | Node.js, Python, Go, Java, PHP, Rust |
| 移动 | Flutter, React Native, SwiftUI, Kotlin |
| DevOps | Docker, Kubernetes, Terraform |
| 数据 | PostgreSQL, MongoDB, Redis |

[查看全部规则](/zh/rules/)

### 规则文件格式是什么？

使用 Markdown 格式，结构如下：

```markdown
# [技术名称] .cursorrules 提示文件

你是 [技术领域] 方面的专家。

## 核心原则
- 原则1
- 原则2

## 技术栈
- 技术1
- 技术2

## 最佳实践
1. 实践1
2. 实践2

## 关键约定
- 约定1
- 约定2
```

### 与 .cursorignore 有什么区别？

| 文件 | 用途 |
|------|------|
| `.cursorrules` | 定义 AI 编码规则和约束 |
| `.cursorignore` | 指定 AI 应忽略的文件/目录 |

---

## 其他问题

### 这个项目与 awesome-cursorrules 有什么关系？

本项目是 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 的中文版本，提供：
- 中文翻译和注释
- 额外的规则文件
- 中文文档支持

### 如何获取更新？

- **Watch** [GitHub 仓库](https://github.com/LessUp/awesome-cursorrules-zh)
- 关注 [Release Notes](https://github.com/LessUp/awesome-cursorrules-zh/releases)

### 有社区支持吗？

- [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)
- [Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)

---

还有问题？[提交 Issue](https://github.com/LessUp/awesome-cursorrules-zh/issues/new) 或 [参与讨论](https://github.com/LessUp/awesome-cursorrules-zh/discussions)。
