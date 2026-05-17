---
editLink: false
---

# 规则证据库

本区不是首页主叙事，而是项目导读、学院路径、架构设计与研究引用背后的证据层。
当你需要验证判断、挑选规则组合或规划升级路径时，再回到这座证据库。

## 推荐阅读顺序

1. 先看 [项目使命](../introduction/mission.md)
2. 再看 [系统总览](../architecture/system-overview.md)
3. 最后按 [规则组合模式](./composition-patterns.md) 和分类索引进入具体规则

<EvidenceBand
  title="把 rules/ 当作证据层，而不是首页目录"
  intro="先用项目导读、学院路径和研究引用完成判断，再用规则样本验证团队需要的约束组合。"
  :items="[
    {
      value: '基础组合',
      label: '通用 + 主技术栈',
      detail: '先用最小规则组合落地团队的第一条可执行边界。'
    },
    {
      value: '升级组合',
      label: '主技术栈 + 安全 / 数据 / 平台',
      detail: '当交付复杂度上升时，再叠加治理、数据与平台约束。'
    },
    {
      value: '升级路径',
      label: '规则组合 → 团队规范',
      detail: '当约束反复出现时，把规则沉淀为项目自己的 `.cursorrules`。'
    }
  ]"
/>

## 智能规则推荐

<RuleDecisionTree />

## 证据入口

- [规则组合模式](./composition-patterns.md)：先判断基础组合、升级组合与治理升级信号。
- [学院路径](../academy/learning-path.md)：回到角色与阶段视角，确认当前该启用哪一层约束。
- [研究引用](../research/references.md)：查看方法论与相关项目，理解规则索引为什么被放在证据层。

## 分类索引

需要具体规则样本时，再按分类进入：

### 核心开发

| 领域 | 规则数 | 说明 |
|------|--------|------|
| [前端开发](/zh/rules/frontend) | 26+ | React、Vue、Angular、Svelte 等 |
| [后端开发](/zh/rules/backend) | 21+ | Node.js、Python、Go、Rust、Java 等 |
| [移动开发](/zh/rules/mobile) | 6+ | React Native、Flutter、iOS、Android |
| [AI 与数据](/zh/rules/ai) | 6+ | LLM、机器学习、NLP |

### 工程与平台

| 领域 | 规则数 | 说明 |
|------|--------|------|
| [DevOps](/zh/rules/devops) | 12+ | Docker、Kubernetes、CI/CD |
| [云服务](/zh/rules/cloud) | 8+ | AWS、GCP、Azure |
| [安全](/zh/rules/security) | 8+ | 认证、加密、审计 |
| [数据库](/zh/rules/database) | 6+ | SQL、NoSQL、ORM |

### 通用能力

| 领域 | 规则数 | 说明 |
|------|--------|------|
| [通用](/zh/rules/general) | 8+ | Git、测试、文档 |
| [工具](/zh/rules/tools) | 4+ | ESLint、Prettier、构建工具 |

### 行业与基础设施

| 领域 | 规则数 | 说明 |
|------|--------|------|
| [区块链](/zh/rules/blockchain) | 4+ | 智能合约、DeFi |
| [物联网](/zh/rules/iot) | 4+ | 嵌入式、边缘计算 |
| [游戏开发](/zh/rules/gaming) | 4+ | Unity、Unreal |
| [AR/VR](/zh/rules/ar-vr) | 3+ | XR、元宇宙 |

### 其他领域

- [数据科学](/zh/rules/data-science)
- [数据](/zh/rules/data)
- [边缘计算](/zh/rules/edge)
- [机器人](/zh/rules/robotics)
- [自动化](/zh/rules/automation)
- [平台](/zh/rules/platform)
- [系统](/zh/rules/systems)
- [网络](/zh/rules/network)
- [存储](/zh/rules/storage)
- [计算](/zh/rules/compute)
- [硬件](/zh/rules/hardware)
- [科学](/zh/rules/science)
- [生物](/zh/rules/bio)
- [量子](/zh/rules/quantum)
- [仿真](/zh/rules/simulation)
- [工业](/zh/rules/industrial)
- [CMS](/zh/rules/cms)
- [新兴技术](/zh/rules/emerging-tech)
