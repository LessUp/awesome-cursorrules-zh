# 贡献指南

感谢你考虑为 awesome-cursorrules-zh 做贡献！

## 快速开始

### 1. Fork 仓库

点击右上角 Fork 按钮，将仓库复制到你的账户。

### 2. 克隆仓库

```bash
git clone https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
npm install
```

### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
```

---

## 贡献方式

### 添加新规则

1. 在 `rules/` 对应分类下创建目录
2. 添加 `.cursorrules` 文件
3. 添加 `README.md` 说明
4. 运行验证：`npm run validate`

```
rules/
└── frontend/
    └── your-rule/
        ├── .cursorrules
        └── README.md
```

### 改进现有规则

1. 找到对应规则文件
2. 进行改进
3. 确保通过验证
4. 提交 PR

### 翻译文档

- 中英文文档需同步更新
- 文件位置：`docs/zh/` 和 `docs/en/`
- 运行检查：`npm run validate:i18n`

---

## 规则文件规范

### 文件大小

- 最小：200 字节
- 推荐：500-2000 字节

### 内容结构

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
```

### 语言

- 规则文件：中文
- 文档：中英双语

---

## 开发流程

### 本地开发

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建静态站点
npm run check        # 运行所有检查
```

### 验证规则

```bash
npm run validate     # 验证规则文件
npm run lint         # Markdown 格式检查
npm run validate:i18n  # 国际化检查
```

---

## 提交规范

使用 [约定式提交](https://www.conventionalcommits.org/)：

```
feat: 添加 Next.js 14 规则
fix: 修复 React 规则中的类型定义
docs: 更新安装指南
translate: 翻译 API 参考文档
chore: 更新构建配置
```

---

## Pull Request 流程

1. **确保测试通过**：`npm run check`
2. **推送分支**：`git push origin feature/your-feature`
3. **创建 PR**：在 GitHub 上提交 Pull Request
4. **等待审核**：维护者会审核你的贡献
5. **合并**：审核通过后合并

---

## 行为准则

- 尊重所有贡献者
- 建设性的讨论和反馈
- 包容和友好的交流环境

---

## 获取帮助

- [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
- [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

感谢你的贡献！🎉
