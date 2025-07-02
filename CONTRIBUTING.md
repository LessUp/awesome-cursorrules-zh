# 贡献指南

感谢您对 Awesome Cursor Rules 中文版的关注！我们欢迎所有形式的贡献。本项目采用标准化的翻译工作流程，确保高质量的翻译成果。

## 🚀 快速开始

### 新贡献者指南
1. **了解项目结构**：查看 [README.md](README.md) 了解项目概况
2. **熟悉翻译标准**：阅读本文档的翻译标准部分
3. **选择翻译目标**：从高优先级规则集中选择一个开始
4. **使用工具集**：利用 ai-help 工具集提高效率
5. **遵循工作流程**：按照标准化流程进行翻译

### 环境准备
- Git 版本控制工具
- PowerShell（用于运行自动化脚本）
- 文本编辑器（推荐 VS Code 或 Cursor）
- 基本的 Markdown 知识

## 🔄 标准化翻译工作流程

我们建立了完整的6阶段翻译工作流程，确保翻译质量和效率：

### 阶段1：翻译准备
- 选择目标规则集（参考优先级列表）
- 检查原始文件完整性
- 准备翻译环境和工具
- 规划目录结构

### 阶段2：翻译执行
- **第一遍翻译**：使用 AI 辅助进行整体翻译
- **第二遍优化**：改进中文表达的自然性
- **第三遍校对**：完善细节和格式

### 阶段3：自检验证
- 术语一致性检查
- 结构完整性检查
- 内容准确性检查
- 语言质量检查

### 阶段4：质量审核
- 专业性审核
- 语言审核
- 格式审核
- 最终确认

### 阶段5：发布部署
- 发布前检查
- Git 提交和推送
- 进度更新

### 阶段6：质量跟踪
- 持续监控和改进



## 🤝 贡献方式

### 翻译新的规则集
1. **Fork 本仓库**
2. **创建翻译分支**：`git checkout -b translate/规则集名称`
3. **选择目标规则集**：从优先级列表中选择
4. **执行翻译流程**：
   - 复制原始规则集到对应的中文目录
   - 按照翻译标准进行内容翻译
   - 进行质量自检和验证
   - 提交翻译成果
5. **提交 Pull Request**

### 改进现有翻译
1. **报告问题**：在 Issues 中详细描述翻译问题
2. **提供改进建议**：包含具体的修改建议
3. **提交 Pull Request**：遵循标准工作流程

### 参与项目管理
1. **流程完善**：改进翻译工作流程
2. **文档维护**：更新项目文档
3. **社区建设**：参与项目讨论和推广

## 📝 翻译质量标准

### 内容准确性
- **术语一致性**：保持技术术语翻译的一致性和准确性
- **技术准确性**：确保技术概念翻译准确无误
- **代码完整性**：保留所有代码示例和注释
- **链接有效性**：验证外部链接可访问或进行本地化

### 语言质量
- **中文表达**：自然流畅，符合中文技术文档习惯
- **术语规范**：专有名词正确保留英文（如 React、Vue、Docker）
- **语法正确**：中文标点符号使用规范
- **可读性强**：适合目标读者群体

### 格式完整性
- **Markdown 规范**：保持原文档结构和格式
- **代码高亮**：确保代码块语法高亮正确
- **文档结构**：标题层级、列表、表格格式完整

### 质量评分标准
- **准确性** (40分)：技术术语和概念翻译准确
- **流畅性** (30分)：中文表达自然流畅
- **完整性** (20分)：内容完整无遗漏
- **规范性** (10分)：格式和术语使用规范

**目标质量等级**：90分以上（优秀）

## 🔍 质量保证流程

### 自检阶段
翻译完成后请进行自检：
- [ ] 术语一致性检查
- [ ] 结构完整性检查
- [ ] 内容准确性检查
- [ ] 语言质量检查
- [ ] 格式规范性检查

### 审核阶段
所有 Pull Request 都会经过质量审核：
- **专业性审核**：技术概念和最佳实践准确性
- **语言审核**：中文表达和术语使用规范性
- **格式审核**：Markdown 格式和链接有效性

## 📋 翻译优先级（2025年更新）

### 🔥 最高优先级（立即开始）
- **Python Django** (`python-django-best-practices-cursorrules-prompt-fi`)
- **Java Spring Boot** (`java-springboot-jpa-cursorrules-prompt-file`)
- **Go 后端开发** (`go-backend-scalability-cursorrules-prompt-file`)
- **Angular TypeScript** (`angular-typescript-cursorrules-prompt-file`)

### ⭐ 高优先级（2-4周内）
- **Flutter 应用开发** (`flutter-app-expert-cursorrules-prompt-file`)
- **Laravel PHP** (`laravel-php-83-cursorrules-prompt-file`)
- **TypeScript NestJS** (`typescript-nestjs-best-practices-cursorrules-promp`)
- **Chrome 扩展开发** (`chrome-extension-dev-js-typescript-cursorrules-pro`)

### 📈 中优先级（4-8周内）
- **Svelte/SvelteKit** (`sveltekit-tailwindcss-typescript-cursorrules-promp`)
- **Astro TypeScript** (`astro-typescript-cursorrules-prompt-file`)
- **SwiftUI** (`swiftui-guidelines-cursorrules-prompt-file`)
- **Android Jetpack Compose** (`android-jetpack-compose-cursorrules-prompt-file`)

### 📚 低优先级（8周后）
- 其他小众技术栈
- 实验性框架
- 特定领域应用

**当前翻译进度**：48/141 规则集 (34.04%)

## 🏷️ 提交规范

使用约定式提交格式：

```bash
# 翻译新规则集
feat(backend/python): add Chinese translation for django best practices
feat(frontend/angular): add Chinese translation for angular typescript

# 改进现有翻译
fix(backend/java): improve spring boot terminology consistency
docs(frontend/react): update react hooks translation

# 项目管理
docs: update project documentation
refactor: improve project structure
```

### 提交信息模板
```
<type>(<scope>): <description>

- Translate rule set: <rule-set-name>
- Category: <category>
- Status: <status>
- Quality: <quality-score>
```

## 🎯 贡献认可

### 贡献者等级
- **🥉 翻译贡献者**：完成 1-3 个规则集翻译
- **🥈 活跃贡献者**：完成 4-10 个规则集翻译
- **🥇 核心贡献者**：完成 10+ 个规则集翻译或重要功能开发
- **⭐ 维护者**：长期参与项目管理和质量保证

### 贡献统计
我们会在项目中记录和展示贡献者的工作成果，包括：
- 翻译规则集数量和质量
- 文档维护和改进
- 社区建设和推广

## 📞 获取帮助

### 常见问题
1. **如何选择翻译目标？** 查看优先级列表，选择标记为高优先级的规则集
2. **翻译质量如何保证？** 遵循翻译质量标准和自检流程
3. **遇到技术问题怎么办？** 在 Issues 中提问或参与项目讨论

### 联系方式
- **GitHub Issues**：报告问题和建议
- **Pull Request**：提交代码和翻译
- **Discussions**：参与项目讨论

## 维护阶段贡献指南

本项目翻译已全部完成，欢迎参与维护工作：
- 报告问题
- 提交改进建议
- 帮助同步上游更新

---

**感谢您的贡献！每一个翻译都让中文开发者社区受益。** 🙏
