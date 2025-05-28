# Create core documentation files
Write-Host "Creating core documentation..." -ForegroundColor Green

$rootDir = "awesome-cursorrules-zh"

# Create main README.md
$readmeContent = @"
# Awesome Cursor Rules 中文版 🇨🇳

> 专为中文开发者优化的 Cursor AI 编程规则集合

[![GitHub stars](https://img.shields.io/github/stars/your-username/awesome-cursorrules-zh?style=social)](https://github.com/your-username/awesome-cursorrules-zh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![中文文档](https://img.shields.io/badge/文档-中文-blue.svg)](./README.md)

## 🎯 项目简介

这是一个专门为中文开发者打造的 Cursor AI 编程规则集合，包含了主流技术栈的最佳实践和编码规范。所有内容都经过精心翻译和本地化优化，确保符合中文开发者的使用习惯。

## 🚀 快速开始

### 安装使用

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/awesome-cursorrules-zh.git
   cd awesome-cursorrules-zh
   ```

2. **选择规则集**
   ```bash
   # 复制所需的 .cursorrules 文件到你的项目根目录
   cp rules/frontend/react/nextjs-basic/.cursorrules ./
   ```

3. **在 Cursor 中使用**
   - 打开 Cursor AI 编辑器
   - 确保项目根目录包含 `.cursorrules` 文件
   - 开始编码，享受智能提示！

## 📚 技术栈覆盖

### 🎨 前端开发
- **React 生态**: React, Next.js, React Native
- **Vue 生态**: Vue 3, Nuxt.js, Composition API
- **TypeScript**: 类型安全编程
- **UI 库**: Chakra UI, Styled Components, Tailwind CSS

### ⚙️ 后端开发
- **Node.js**: Express, NestJS
- **Python**: FastAPI
- **C++**: 现代 C++ 编程规范
- **.NET**: ABP Framework

### 🔗 区块链
- **Solidity**: 智能合约开发 (Foundry)

### 🛠️ 通用工具
- **Git**: 约定式提交规范
- **代码规范**: 通用编程最佳实践

## 📖 使用指南

详细的使用指南请参考：
- [快速开始](./docs/getting-started.md)
- [安装指南](./docs/installation-guide.md)
- [最佳实践](./docs/best-practices.md)
- [故障排除](./docs/troubleshooting.md)

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](./CONTRIBUTING.md) 了解如何参与项目。

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE)。

## 🙏 致谢

感谢 [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) 原项目的启发。

---

⭐ 如果这个项目对你有帮助，请给我们一个 Star！
"@

Set-Content -Path "$rootDir/README.md" -Value $readmeContent -Encoding UTF8
Write-Host "Created README.md" -ForegroundColor Green

# Create CONTRIBUTING.md
$contributingContent = @"
# 贡献指南

感谢您对 Awesome Cursor Rules 中文版的关注！我们欢迎所有形式的贡献。

## 🤝 如何贡献

### 翻译新的规则集
1. Fork 本仓库
2. 创建新的分支: `git checkout -b translate/new-ruleset`
3. 在对应的技术栈目录下创建新文件夹
4. 翻译内容，保持格式一致
5. 提交 Pull Request

### 改进现有翻译
1. 在 Issues 中报告翻译问题
2. 提供改进建议
3. 提交 Pull Request

### 添加新功能
1. 先在 Issues 中讨论
2. 获得维护者同意后开始开发
3. 遵循项目代码规范

## 📝 翻译标准

- 保持 YAML front matter 完整
- 技术术语使用标准中文翻译
- 保留英文 API 名称和代码示例
- 确保描述准确适合中文开发者

## 🔍 代码审查

所有 Pull Request 都会经过代码审查，请确保：
- 翻译质量高
- 格式规范
- 测试通过

感谢您的贡献！
"@

Set-Content -Path "$rootDir/CONTRIBUTING.md" -Value $contributingContent -Encoding UTF8
Write-Host "Created CONTRIBUTING.md" -ForegroundColor Green

# Create LICENSE
$licenseContent = @"
MIT License

Copyright (c) 2024 Awesome Cursor Rules 中文版

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"@

Set-Content -Path "$rootDir/LICENSE" -Value $licenseContent -Encoding UTF8
Write-Host "Created LICENSE" -ForegroundColor Green

# Create .gitignore
$gitignoreContent = @"
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Temporary files
*.tmp
*.temp
"@

Set-Content -Path "$rootDir/.gitignore" -Value $gitignoreContent -Encoding UTF8
Write-Host "Created .gitignore" -ForegroundColor Green

Write-Host "All core documentation created successfully!" -ForegroundColor Green
