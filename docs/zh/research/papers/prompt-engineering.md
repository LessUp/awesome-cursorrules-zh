# Prompt 工程深度解读

本文档深入解读 Prompt 工程的核心论文及其对 .cursorrules 设计的启示。

## 概述

Prompt 工程是设计和优化大语言模型（LLM）输入的技术。对于 .cursorrules 规则文件设计，理解 Prompt 工程原理至关重要。

## 核心论文解读

### 1. A Systematic Survey of Prompt Engineering (2024)

**论文**：[arXiv:2402.07927](https://arxiv.org/abs/2402.07927)

**核心观点**：

Prompt 工程技术分为以下类别：

| 技术 | 描述 | .cursorrules 应用 |
|------|------|-------------------|
| 零样本提示 | 不提供示例 | 简单规则定义 |
| 少样本提示 | 提供少量示例 | 规则中的代码示例 |
| 链式思维 | 引导逐步推理 | 复杂任务的分步骤指导 |
| 自我一致性 | 多次生成取共识 | 多角度验证代码质量 |
| 思维树 | 探索多种解决方案 | 架构决策时的方案比较 |

**启示**：

设计 .cursorrules 时：
1. **提供示例** - 少样本提示显著提升输出质量
2. **分步引导** - 复杂任务使用链式思维
3. **明确约束** - 减少模型猜测空间

```markdown
# 示例：应用少样本提示的规则

## 命名规范

遵循以下命名约定：

### 好的示例
- `getUserById` - 获取单个用户
- `createUserAccount` - 创建用户账户
- `validateEmailFormat` - 验证邮箱格式

### 坏的示例
- `get_user` - 不清楚获取什么
- `user` - 过于简短
- `processData` - 不清楚处理什么
```

### 2. Chain-of-Thought Prompting Elicits Reasoning (2022)

**论文**：[arXiv:2201.11903](https://arxiv.org/abs/2201.11903)

**核心观点**：

通过引导模型逐步推理，可以显著提升复杂问题的解决能力。

**效果对比**：

| 任务类型 | 标准提示 | 链式思维 |
|----------|----------|----------|
| 数学推理 | 17% | 58% |
| 常识推理 | 46% | 74% |
| 符号推理 | 10% | 30% |

**启示**：

对于复杂的编码任务，可以在规则中引导分步思考：

```markdown
# 示例：链式思维在规则中的应用

## 复杂任务处理流程

当遇到复杂任务时，按以下步骤处理：

1. **理解需求**
   - 分析用户真正想要什么
   - 识别关键约束条件

2. **设计方案**
   - 考虑多种可能的实现方式
   - 权衡利弊，选择最优方案

3. **实现代码**
   - 遵循编码规范
   - 添加必要的注释

4. **验证结果**
   - 检查是否满足需求
   - 考虑边界情况
```

### 3. Language Models are Few-Shot Learners (2020)

**论文**：[arXiv:2005.14165](https://arxiv.org/abs/2005.14165)

**核心观点**：

大语言模型具有强大的少样本学习能力，通过少量示例即可掌握新任务。

**启示**：

规则文件中的示例至关重要：

```markdown
# 示例：有效的代码示例

## API 响应格式

### 标准响应
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "name": "example"
  }
}
```

### 错误响应
```json
{
  "code": 400,
  "message": "参数错误",
  "errors": [
    { "field": "email", "message": "邮箱格式不正确" }
  ]
}
```

## 标准响应格式要点
1. 统一使用 `code` 字段表示状态
2. `message` 提供可读信息
3. `data` 包含实际数据
4. 错误时提供详细错误信息
```

### 4. Constitutional AI: Harmlessness from AI Feedback (2022)

**论文**：[arXiv:2212.08073](https://arxiv.org/abs/2212.08073)

**核心观点**：

通过预定义的"宪法"（原则），引导 AI 生成符合期望的输出。

**启示**：

规则文件的核心原则设计：

```markdown
# 示例：核心原则设计

## 编码宪法

以下是编写代码时必须遵守的核心原则：

1. **安全性第一**
   所有用户输入必须验证和清理

2. **可读性优先**
   代码是给人看的，其次才是机器

3. **简洁明了**
   能用 10 行解决的不写 20 行

4. **可测试性**
   每个函数都应该可测试

5. **一致性**
   遵循项目现有风格
```

## 高级技巧

### 1. 角色设定

```markdown
# 有效的角色设定示例

你是 [公司/团队] 的资深软件工程师，具有以下专业背景：

- 10 年以上 [技术栈] 开发经验
- 熟悉 [领域] 最佳实践
- 了解 [项目] 的技术架构和编码规范

在编写代码时，你会：
- 优先考虑代码可维护性
- 遵循 SOLID 原则
- 编写清晰的注释和文档
```

### 2. 约束条件

```markdown
# 约束条件示例

## 必须遵守
- 使用 TypeScript 严格模式
- 所有函数必须有返回类型注解
- 异步操作必须处理错误

## 禁止行为
- 不要使用 `any` 类型
- 不要使用 `var` 声明
- 不要忽略 ESLint 警告
```

### 3. 输出格式

```markdown
# 输出格式规范

## 代码回复格式

1. 简要说明修改内容
2. 展示完整代码
3. 解释关键改动
4. 提供使用示例

示例：
---
修改了 UserService 的 create 方法，添加了参数验证。

\`\`\`typescript
// 修改后的代码
\`\`\`

**关键改动**：
- 添加了 email 格式验证
- 返回类型改为 Result<User, Error>
```

## 实践建议

### DO: 应该做的

1. **提供具体示例**
   - 展示期望的代码风格
   - 包含正面和反面示例

2. **分层次组织**
   - 核心原则在前
   - 具体规则在后

3. **保持更新**
   - 随项目演进更新规则
   - 记录变更原因

### DON'T: 不应该做的

1. **避免模糊描述**
   ```markdown
   # 坏的示例
   写好代码

   # 好的示例
   所有函数必须有 JSDoc 注释，包含 @param 和 @return
   ```

2. **避免过多规则**
   - 保持在 10 条核心规则以内
   - 过多规则会稀释效果

3. **避免矛盾指令**
   - 确保规则之间不冲突
   - 定期审查一致性

## 相关资源

- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [Learn Prompting](https://learnprompting.org/)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

---

## 参考文献

1. Wei, J., et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. arXiv:2201.11903
2. Brown, T., et al. (2020). Language Models are Few-Shot Learners. arXiv:2005.14165
3. Bai, J., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. arXiv:2212.08073
4. Liu, P., et al. (2024). A Systematic Survey of Prompt Engineering. arXiv:2402.07927

---

## 相关文档

- [参考文献](../references)
- [规则模板指南](../../guides/rule-template)
- [最佳实践](../../best-practices)
