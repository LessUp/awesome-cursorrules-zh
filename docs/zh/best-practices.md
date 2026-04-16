# 最佳实践指南

> 💡 最大化发挥 Cursor AI 规则的价值

## 目录

- [规则选择策略](#规则选择策略)
- [项目配置实践](#项目配置实践)
- [团队协作指南](#团队协作指南)
- [规则编写规范](#规则编写规范)
- [性能优化建议](#性能优化建议)
- [常见问题规避](#常见问题规避)

---

## 规则选择策略

### 新项目 vs 现有项目

| 项目类型 | 推荐策略 | 说明 |
|----------|----------|------|
| **新项目** | 选择完整规则集 | 从项目开始就建立规范，如 `nextjs-typescript` |
| **现有项目** | 渐进式引入 | 从 `general/code-guidelines` 开始，逐步引入 |
| **团队项目** | 选择熟悉技术栈 | 根据团队技能选择，确保可维护性 |
| **学习项目** | 选择教育型规则 | 带有详细注释的规则集 |

### 技术栈匹配表

**前端框架**

```
React → rules/frontend/react/nextjs-typescript/
Vue   → rules/frontend/vue/composition-api/
Angular → rules/frontend/angular/angular-typescript/
Svelte → rules/frontend/svelte/sveltekit-tailwind-typescript-guide/
```

**后端语言**

```
Python   → rules/backend/python/fastapi-api-example/
Node.js  → rules/backend/nodejs/nestjs-typescript/
Go       → rules/backend/go/backend-scalability/
Java     → rules/backend/java/springboot-jpa/
PHP      → rules/backend/php/laravel-php-83/
```

**移动端开发**

```
Flutter       → rules/mobile/flutter/flutter-app-expert/
React Native  → rules/mobile/react-native-expo/
SwiftUI       → rules/mobile/swiftui-guidelines/
Android       → rules/mobile/android/modern-android/
```

---

## 项目配置实践

### 单技术栈项目

对于单一技术栈项目，直接复制对应规则：

```bash
# Next.js 项目示例
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### 多技术栈项目

**方案一：合并规则文件**

```bash
# 创建合并后的规则
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
echo "# ===== 后端规则 =====" >> .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**方案二：目录级规则（推荐）**

```bash
# 项目根目录 - 通用规则
cp rules/general/code-guidelines/.cursorrules ./

# frontend/ 目录 - 前端规则
cp rules/frontend/react/nextjs-typescript/.cursorrules frontend/

# backend/ 目录 - 后端规则  
cp rules/backend/python/fastapi-api-example/.cursorrules backend/
```

> 💡 **优势**：各模块独立管理，避免规则冲突

### 验证配置

```bash
# 检查文件存在
ls -la .cursorrules

# 查看文件内容
cat .cursorrules

# 验证文件编码
file .cursorrules  # 应显示: UTF-8 Unicode text

# 检查文件大小（建议 < 50KB）
ls -lh .cursorrules
```

---

## 团队协作指南

### 版本控制

**必须将 `.cursorrules` 加入 Git 管理**：

```bash
# 添加规则文件
git add .cursorrules

# 提交
git commit -m "chore: add team coding rules configuration

- Add Cursor AI coding rules for project consistency
- Based on nextjs-typescript and fastapi best practices"

git push
```

> ⚠️ **重要**：不要将 `.cursorrules` 加入 `.gitignore`

### 团队文档模板

在项目 README 中添加 Cursor 配置说明：

```markdown
## 开发环境配置

本项目使用 Cursor AI 编程规则统一代码规范。

### 必要步骤

1. 安装 [Cursor 编辑器](https://cursor.sh/)
2. 确保项目根目录有 `.cursorrules` 文件
3. 在 Cursor 设置中启用 "Use .cursorrules" 选项

### 规则说明

- **技术栈**: Next.js + TypeScript + Tailwind CSS
- **后端**: Python FastAPI
- **规则来源**: [awesome-cursorrules-zh](https://github.com/LessUp/awesome-cursorrules-zh)

### 自定义规则

如需添加项目特定规则，请在 `.cursorrules` 文件末尾添加，
不要修改现有规则内容。
```

### 团队规则模板库

创建团队模板目录供成员选择：

```bash
# 创建模板目录
mkdir -p .cursorrules-templates

# 保存常用规则模板
cp rules/frontend/react/nextjs-typescript/.cursorrules .cursorrules-templates/frontend.cursorrules
cp rules/backend/python/fastapi-api-example/.cursorrules .cursorrules-templates/backend.cursorrules
cp rules/general/code-guidelines/.cursorrules .cursorrules-templates/general.cursorrules

# 添加模板说明
cat > .cursorrules-templates/README.md << 'EOF'
# 团队规则模板

## 使用说明

根据项目类型选择对应的模板文件：

- `frontend.cursorrules` - 前端项目
- `backend.cursorrules` - 后端项目  
- `general.cursorrules` - 通用规范

## 应用模板

```bash
cp .cursorrules-templates/frontend.cursorrules ./.cursorrules
```
EOF
```

---

## 规则编写规范

### 规则结构

一个良好的 `.cursorrules` 文件应包含：

```markdown
# 项目编程规范

## 概述
- 项目简述
- 技术栈说明
- 设计原则

## 编码规范

### 命名规范
- 变量命名
- 函数命名
- 文件命名

### 代码结构
- 文件组织
- 模块划分
- 导入规范

### 错误处理
- 异常策略
- 日志规范

### 性能优化
- 最佳实践
- 避免事项

## 框架特定规范
（根据技术栈添加）
```

### 规则编写最佳实践

| 实践 | 说明 | 示例 |
|------|------|------|
| **具体明确** | 避免模糊描述 | ❌ "使用好的命名" → ✅ "组件使用 PascalCase" |
| **提供示例** | 复杂规则给出示例 | "错误处理示例: try { ... } catch (e) { logger.error(e) }" |
| **分类组织** | 按功能分组 | 编码规范 / 架构规范 / 测试规范 |
| **保持简洁** | 只保留必要规则 | 单条规则控制在 200 字以内 |
| **优先级排序** | 重要规则放前面 | 架构 > 编码 > 风格 |

### 自定义规则模板

```markdown
## [项目名] 自定义规则

### 项目规范
- API 路由统一使用 /api/v1 前缀
- 响应格式: { success: boolean, data: any, error?: string }
- 所有模型必须包含 created_at 和 updated_at

### 命名约定
- 组件: PascalCase (UserProfile.tsx)
- 工具函数: camelCase (formatDate.ts)
- 常量: UPPER_SNAKE_CASE (API_BASE_URL)
- 数据库表: snake_case (user_profiles)

### 代码风格
- 使用单引号而非双引号
- 缩进使用 2 个空格
- 最大行长度 100 字符

### 安全要求
- 所有用户输入必须验证
- 敏感操作需要权限检查
- 不在日志中记录密码/Token
```

---

## 性能优化建议

### 规则文件优化

```bash
# 检查文件大小（建议 < 50KB）
ls -lh .cursorrules

# 检查行数（建议 < 500 行）
wc -l .cursorrules
```

### Cursor 配置优化

```json
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.maxTokens": 4096,
  "cursor.ai.temperature": 0.2,
  "cursor.ai.enableCodeActions": true
}
```

### 性能检查清单

- [ ] 规则文件简洁，无冗余内容
- [ ] 避免重复定义相同规则
- [ ] 定期清理不再使用的规则
- [ ] 规则条目有清晰的优先级

---

## 常见问题规避

### ❌ 常见错误

| 错误 | 后果 | 正确做法 |
|------|------|----------|
| 混合不兼容规则 | AI 建议混乱 | 选择技术栈匹配的规则 |
| 规则过于复杂 | 响应变慢 | 保持规则简洁聚焦 |
| 忽略项目特性 | 建议不适用 | 添加项目自定义规则 |
| 频繁更改规则 | 结果不一致 | 稳定后锁定规则版本 |
| 不加测试直接应用 | 不符合预期 | 先在测试文件验证 |

### ✅ 推荐做法

| 做法 | 说明 |
|------|------|
| **渐进式采用** | 先用基础规则，再逐步添加特定规则 |
| **定期评估** | 每月评估规则效果，调整优化 |
| **团队同步** | 确保团队成员使用相同版本规则 |
| **版本锁定** | 将规则文件纳入版本控制 |
| **文档化** | 记录规则变更和原因 |

---

## 渐进式采用路线图

### 第一周：基础规则

```
✓ 复制通用规则
✓ 熟悉 AI 建议模式
✓ 团队成员安装 Cursor
```

### 第二周：框架规则

```
✓ 添加框架特定规则
✓ 调整编码风格
✓ 收集团队反馈
```

### 第三周：自定义规则

```
✓ 添加项目特定规则
✓ 完善团队约定
✓ 解决规则冲突
```

### 第四周：优化完善

```
✓ 评估规则效果
✓ 精简冗余规则
✓ 锁定规则版本
```

---

<div align="center">

**[⬆ 返回顶部](#最佳实践指南)** | **[📚 返回文档首页](./README.md)**

</div>
