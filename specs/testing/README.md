# 测试规范

本目录用于存放测试规范文档。

## 测试策略

### 测试层次

1. **单元测试**: 测试独立函数和模块
2. **集成测试**: 测试模块间的协作
3. **端到端测试**: 测试完整用户流程
4. **视觉回归测试**: 测试 UI 一致性

## 测试文件命名

- 单元测试：`[filename].test.js`
- 集成测试：`[filename].integration.test.js`
- E2E 测试：`[filename].e2e.test.js`

## 测试模板

```javascript
import { describe, it, expect } from 'vitest';

describe('[模块名称]', () => {
  describe('[函数名称]', () => {
    it('应该正确处理正常输入', () => {
      // Arrange
      const input = 'test';
      // Act
      const result = functionUnderTest(input);
      // Assert
      expect(result).toBe('expected');
    });

    it('应该正确处理边界情况', () => {
      expect(() => functionUnderTest(null)).toThrow();
    });
  });
});
```

## 本项目测试规范

### 验证脚本

| 命令 | 说明 |
|------|------|
| `npm run validate` | 验证规则文件格式 |
| `npm run lint` | Markdown 格式检查 |
| `npm run check` | 运行所有检查 |

### 测试覆盖目标

- 规则验证脚本：目标覆盖率 80%
- 统计生成脚本：目标覆盖率 80%

### CI/CD 集成

测试通过 GitHub Actions 自动运行：
- `quality-check.yml`: 代码质量检查
- `security.yml`: 安全审计

## 测试最佳实践

1. **AAA 模式**: Arrange, Act, Assert
2. **单一职责**: 每个测试只验证一个行为
3. **描述清晰**: 测试名称应描述预期行为
4. **独立性**: 测试之间不应有依赖
5. **可重复**: 测试结果应稳定可重复
