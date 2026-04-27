# 规则组织规范

本文档定义 `.cursorrules` 规则文件的组织规范。

## 目录结构

规则文件按技术领域组织：

```
rules/
├── frontend/         # 前端开发
│   ├── react/        # React 生态
│   ├── vue/          # Vue 生态
│   ├── angular/      # Angular 生态
│   └── ...
├── backend/          # 后端开发
│   ├── python/       # Python 框架
│   ├── nodejs/       # Node.js 框架
│   ├── go/           # Go 框架
│   └── ...
├── mobile/           # 移动开发
├── devops/           # DevOps
├── ai/               # AI/ML
├── blockchain/       # 区块链
├── security/         # 安全
└── ...               # 其他领域
```

## 命名规范

### 目录命名

- 使用小写字母
- 多个单词用连字符连接
- 示例：`nextjs-typescript`, `springboot-jpa`

### 文件命名

每个规则目录包含：
- `.cursorrules` - 规则文件 (必需)
- `README.md` - 说明文档 (推荐)

## 规则文件格式

### 标准模板

```markdown
# [技术名称] .cursorrules 提示文件

你是 [技术领域] 方面的专家。

## 核心原则

- [原则1]
- [原则2]
- [原则3]

## 技术栈

- [技术1]
- [技术2]

## 最佳实践

1. [实践1]
2. [实践2]

## 关键约定

1. [约定1]
2. [约定2]
```

### 必需元素

| 元素 | 说明 | 重要性 |
|------|------|--------|
| 角色定义 | "你是...专家" | ⭐⭐⭐ |
| 核心原则 | 开发指导原则 | ⭐⭐⭐ |
| 技术栈 | 使用的技术 | ⭐⭐ |
| 最佳实践 | 具体实践建议 | ⭐⭐⭐ |
| 关键约定 | 编码约定 | ⭐⭐ |

### 文件大小要求

- 最小：200 字节
- 推荐：500-2000 字节
- 最大：无限制，但建议不超过 10KB

## 质量检查

### 验证脚本

运行 `npm run validate` 检查：

1. **文件大小**: 是否达到最小要求
2. **角色定义**: 是否包含专家角色声明
3. **最佳实践**: 是否包含实践建议
4. **技术栈**: 是否明确技术关键词

### 验证报告

验证结果保存在 `validation-report.json`：

```json
{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "summary": {
    "total": 132,
    "valid": 100,
    "warnings": 32,
    "errors": 0
  },
  "details": [...]
}
```

## 添加新规则流程

1. **确定分类**: 选择合适的技术领域目录
2. **创建目录**: 使用规范命名
3. **编写规则**: 按标准模板编写
4. **编写文档**: 创建 README.md
5. **验证**: 运行 `npm run validate`
6. **更新导航**: 更新 VitePress 配置

## 双语支持

规则文件本身使用中文编写，但技术术语保持英文原文：

```markdown
你是 React 和 Next.js 开发方面的专家。

## 技术栈

- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
```

## 统计信息

统计数据保存在 `stats.json`：

```json
{
  "totalRules": 132,
  "categories": {
    "frontend": 16,
    "backend": 18,
    "mobile": 7,
    ...
  }
}
```

运行 `npm run stats` 更新统计。

## 相关文档

- [VitePress 配置详解](./vitepress-setup.md)
- [验证脚本源码](../../scripts/validate-rules.js)
