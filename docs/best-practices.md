# 最佳实践指南

> 最大化发挥 Cursor AI 规则的价值

## 目录

- [规则选择策略](#规则选择策略)
- [项目配置实践](#项目配置实践)
- [团队协作指南](#团队协作指南)
- [自定义规则开发](#自定义规则开发)
- [性能优化建议](#性能优化建议)
- [常见问题规避](#常见问题规避)

---

## 规则选择策略

### 新项目 vs 现有项目

| 项目类型 | 策略 | 示例 |
|----------|------|------|
| **新项目** | 选择完整规则集 | `nextjs-typescript` 而非 `react-basic` |
| **现有项目** | 渐进式引入 | 从 `general/code-guidelines` 开始 |
| **团队项目** | 选择熟悉技术栈 | 根据团队技能选择 |

### 技术栈匹配表

```
前端框架匹配：
├── React 项目 → rules/frontend/react/nextjs-typescript/
├── Vue 项目   → rules/frontend/vue/composition-api/
├── Angular   → rules/frontend/angular/angular-typescript/
└── Svelte    → rules/frontend/svelte/sveltekit-tailwind-typescript-guide/

后端语言匹配：
├── Python   → rules/backend/python/fastapi-api-example/
├── Node.js  → rules/backend/nodejs/nestjs-typescript/
├── Go       → rules/backend/go/backend-scalability/
├── Java     → rules/backend/java/springboot-jpa/
└── PHP      → rules/backend/php/laravel-php-83/

移动开发匹配：
├── Flutter       → rules/mobile/flutter/flutter-app-expert/
├── React Native  → rules/mobile/react-native-expo/
└── SwiftUI       → rules/mobile/swiftui-guidelines/
```

---

## 项目配置实践

### 单技术栈项目

```bash
# 直接复制对应规则
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### 多技术栈项目

**方案一：合并规则文件**

```bash
# 创建合并后的规则文件
cat rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
echo "# 后端规则" >> .cursorrules
echo "" >> .cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**方案二：目录级规则**

```bash
# 项目根目录 - 通用规则
cp rules/general/code-guidelines/.cursorrules ./

# frontend/ 目录
cp rules/frontend/react/nextjs-typescript/.cursorrules frontend/

# backend/ 目录
cp rules/backend/python/fastapi-api-example/.cursorrules backend/
```

### 验证配置

```bash
# 检查文件存在
ls -la .cursorrules

# 查看文件内容
cat .cursorrules

# 验证文件编码
file .cursorrules  # 应显示: UTF-8 Unicode text
```

---

## 团队协作指南

### 版本控制

```bash
# 将规则加入 Git
git add .cursorrules
git commit -m "添加团队编码规则配置"
git push
```

### 团队文档模板

在项目 README 中添加：

```markdown
## 开发环境配置

本项目使用 Cursor AI 编程规则。

### 必要步骤

1. 安装 [Cursor 编辑器](https://cursor.sh/)
2. 确保项目根目录有 `.cursorrules` 文件
3. 启用 Cursor 设置中的 "Use .cursorrules" 选项

### 规则说明

- **技术栈**: Next.js + TypeScript + Tailwind CSS
- **规则来源**: [awesome-cursorrules-zh](https://github.com/LessUp/awesome-cursorrules-zh)
- **自定义**: 见 `.cursorrules` 文件末尾
```

### 团队规则模板库

```bash
# 创建团队模板目录
mkdir -p .cursorrules-templates

# 保存常用规则模板
cp rules/frontend/react/nextjs-typescript/.cursorrules .cursorrules-templates/frontend.cursorrules
cp rules/backend/python/fastapi-api-example/.cursorrules .cursorrules-templates/backend.cursorrules
cp rules/general/code-guidelines/.cursorrules .cursorrules-templates/general.cursorrules
```

---

## 自定义规则开发

### 规则添加位置

```bash
# 在 .cursorrules 文件末尾添加
cat >> .cursorrules << 'EOF'

## 项目自定义规则

### 命名规范
- 组件文件：PascalCase (如 UserProfile.tsx)
- 工具函数：camelCase (如 formatDate.ts)
- 常量：UPPER_SNAKE_CASE (如 API_BASE_URL)

### API 规范
- 所有 API 路由使用 /api/v1 前缀
- 响应格式统一使用 { success, data, error }

### 数据库规范
- 主键统一使用 id
- 必须包含 created_at 和 updated_at
- 软删除使用 deleted_at
EOF
```

### 规则编写最佳实践

| 实践 | 说明 |
|------|------|
| **具体明确** | 说明要做什么，不要模糊描述 |
| **提供示例** | 对于复杂规则，给出代码示例 |
| **分类组织** | 按功能或领域分组规则 |
| **保持简洁** | 只包含必要的规则 |

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
| 混合不兼容规则 | AI 建议混乱 | 选择兼容的技术栈规则 |
| 规则过于复杂 | 响应变慢 | 保持规则简洁聚焦 |
| 忽略项目特性 | 建议不适用 | 添加项目自定义规则 |
| 频繁更改规则 | 结果不一致 | 稳定后锁定规则版本 |

### ✅ 推荐做法

| 做法 | 说明 |
|------|------|
| **渐进式采用** | 先用基础规则，再逐步添加特定规则 |
| **定期评估** | 每月评估规则效果，调整优化 |
| **团队同步** | 确保团队成员使用相同版本规则 |
| **版本锁定** | 将规则文件纳入版本控制 |

---

## 渐进式采用路线图

```
第一周：基础规则
├── 复制通用规则
├── 熟悉 AI 建议模式
└── 团队成员安装 Cursor

第二周：框架规则
├── 添加框架特定规则
├── 调整编码风格
└── 收集团队反馈

第三周：自定义规则
├── 添加项目特定规则
├── 完善团队约定
└── 解决规则冲突

第四周：优化完善
├── 评估规则效果
├── 精简冗余规则
└── 锁定规则版本
```

---

> 📖 **更多资源**：[安装指南](./installation-guide.md) | [故障排除](./troubleshooting.md) | [贡献指南](../CONTRIBUTING.md)
