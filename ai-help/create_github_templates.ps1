# Create GitHub templates and workflow files
Write-Host "Creating GitHub templates and workflows..." -ForegroundColor Green

$rootDir = "awesome-cursorrules-zh"

# Create .github directory structure
New-Item -ItemType Directory -Path "$rootDir/.github" -Force | Out-Null
New-Item -ItemType Directory -Path "$rootDir/.github/ISSUE_TEMPLATE" -Force | Out-Null
New-Item -ItemType Directory -Path "$rootDir/.github/workflows" -Force | Out-Null

# Create Pull Request template
$prTemplate = @"
## 📋 变更描述

请简要描述此 PR 的变更内容：

- [ ] 新增翻译
- [ ] 修复翻译错误
- [ ] 改进文档
- [ ] 添加新功能
- [ ] 其他: ___________

## 🔍 变更详情

### 新增/修改的文件
-

### 翻译质量检查
- [ ] 保持了 YAML front matter 格式
- [ ] 技术术语翻译准确
- [ ] 保留了英文 API 名称和代码示例
- [ ] 描述适合中文开发者理解

## 🧪 测试

- [ ] 已在本地测试 .cursorrules 文件
- [ ] 验证了文件格式正确性
- [ ] 检查了链接有效性

## 📚 相关 Issue

关闭 #(issue 编号)

## 📝 额外说明

(如有需要，请添加额外的说明信息)
"@

Set-Content -Path "$rootDir/.github/pull_request_template.md" -Value $prTemplate -Encoding UTF8
Write-Host "Created PR template" -ForegroundColor Green

# Create Bug Report Issue template
$bugTemplate = @"
---
name: 🐛 Bug 报告
about: 报告项目中的问题
title: '[BUG] '
labels: 'bug'
assignees: ''
---

## 🐛 问题描述

简要描述遇到的问题。

## 🔄 复现步骤

1. 进入 '...'
2. 点击 '....'
3. 滚动到 '....'
4. 看到错误

## 🎯 期望行为

描述您期望发生的行为。

## 📱 环境信息

- OS: [例如 Windows 11]
- Cursor 版本: [例如 0.40.0]
- 浏览器: [例如 Chrome 120]

## 📎 附加信息

添加任何其他有关问题的上下文信息。
"@

Set-Content -Path "$rootDir/.github/ISSUE_TEMPLATE/bug_report.md" -Value $bugTemplate -Encoding UTF8
Write-Host "Created bug report template" -ForegroundColor Green

# Create Feature Request template
$featureTemplate = @"
---
name: ✨ 功能请求
about: 建议新功能或改进
title: '[FEATURE] '
labels: 'enhancement'
assignees: ''
---

## 🎯 功能描述

简要描述您希望添加的功能。

## 💡 动机

解释为什么需要这个功能，它解决了什么问题？

## 📋 详细设计

详细描述功能的实现方式。

## 🔄 替代方案

描述您考虑过的其他解决方案。

## 📎 附加信息

添加任何其他相关信息、截图等。
"@

Set-Content -Path "$rootDir/.github/ISSUE_TEMPLATE/feature_request.md" -Value $featureTemplate -Encoding UTF8
Write-Host "Created feature request template" -ForegroundColor Green

# Create Translation Request template
$translationTemplate = @"
---
name: 🌐 翻译请求
about: 请求翻译新的规则集
title: '[TRANSLATION] '
labels: 'translation'
assignees: ''
---

## 📚 规则集信息

**规则集名称**:
**技术栈**:
**原始链接**:

## 🎯 优先级

- [ ] 高优先级 (主流技术栈)
- [ ] 中优先级 (常用技术栈)
- [ ] 低优先级 (小众技术栈)

## 📝 翻译说明

**预计文件数量**:
**复杂程度**:
**特殊要求**:

## 🤝 贡献意愿

- [ ] 我愿意参与翻译这个规则集
- [ ] 我只是提出建议，希望其他人翻译
"@

Set-Content -Path "$rootDir/.github/ISSUE_TEMPLATE/translation_request.md" -Value $translationTemplate -Encoding UTF8
Write-Host "Created translation request template" -ForegroundColor Green

Write-Host "All GitHub templates created successfully!" -ForegroundColor Green
