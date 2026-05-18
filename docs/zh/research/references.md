# 研究引用

本页把这个站点背后的方法论、相关开源项目和演进思考组织成接近"参考文献"的结构。

<ArchitectureDiagram />

## 核心方法论

本站架构设计基于以下方法论：

<CitationLedger
  title="文档架构方法论"
  intro="这些方法论为本站的导读、学院、指南和研究分区提供了结构基础。"
  :entries="[
    {
      kind: 'Framework',
      title: 'Diátaxis Documentation Framework',
      note: '用于区分解释型文档、操作型文档、参考资料与教程结构，帮助本站把导读、学院、指南和研究分开。核心思想是：不同类型的文档服务于不同的用户需求。',
      href: 'https://diataxis.fr/',
      label: '访问'
    },
    {
      kind: 'Article',
      title: 'The Four Kinds of Documentation',
      note: 'Diátaxis 作者 Daniele Procida 在 PyCon Australia 的演讲，解释了为什么大多数文档项目失败——不是因为缺乏内容，而是因为混淆了文档类型。',
      href: 'https://www.divio.com/blog/documentation/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'The Architecture of Open Source Applications',
      note: '提醒优秀开源项目不仅要展示功能，更要公开系统结构、边界与实现取舍。本站的白皮书式展示借鉴了这一理念。',
      href: 'https://aosabook.org/en/index.html',
      label: '访问'
    }
  ]"
/>

## Prompt 工程研究

.cursorrules 的理论基础来自 Prompt 工程研究领域：

<CitationLedger
  title="Prompt 工程学术研究"
  intro="这些论文为理解 AI 如何理解和执行指令提供了科学基础。"
  :entries="[
    {
      kind: 'Paper',
      title: 'A Systematic Survey of Prompt Engineering',
      note: '系统性综述了提示工程的各种技术，包括零样本、少样本、链式思维等方法。理解这些技术有助于设计更有效的 .cursorrules 规则。',
      href: 'https://arxiv.org/abs/2402.07927',
      label: '访问'
    },
    {
      kind: 'Paper',
      title: 'Chain-of-Thought Prompting Elicits Reasoning',
      note: '提出链式思维提示方法，通过逐步推理提升大语言模型的复杂问题解决能力。高级规则设计可以借鉴这种方法。',
      href: 'https://arxiv.org/abs/2201.11903',
      label: '访问'
    },
    {
      kind: 'Paper',
      title: 'Language Models are Few-Shot Learners (GPT-3)',
      note: '首次展示了大规模语言模型的少样本学习能力。理解这一点有助于理解规则文件中的示例如何影响 AI 输出。',
      href: 'https://arxiv.org/abs/2005.14165',
      label: '访问'
    }
  ]"
/>

## AI 辅助编程研究

<CitationLedger
  title="AI 辅助编程研究"
  intro="研究 AI 编程助手如何影响开发者工作。"
  :entries="[
    {
      kind: 'Paper',
      title: 'Productivity Assessment of Neural Code Completion',
      note: '评估 GitHub Copilot 对开发者生产力的影响，显示代码补全接受率约 30%。衡量 AI 辅助编程工具的实际效果。',
      href: 'https://arxiv.org/abs/2105.11490',
      label: '访问'
    },
    {
      kind: 'Paper',
      title: 'When Coding Meets AI: Developer Experiences',
      note: '研究了开发者使用 AI 编程助手（包括 Cursor）的实际体验和挑战。理解用户如何使用 Cursor 和 .cursorrules。',
      href: 'https://dl.acm.org/doi/10.1145/3613904.3642734',
      label: '访问'
    }
  ]"
/>

## 开源项目参考

<CitationLedger
  title="相关开源项目"
  intro="这些项目为本站提供了工程实践参考。"
  :entries="[
    {
      kind: 'Open Source',
      title: 'MoonshotAI / kimi-cli',
      note: '本次重构参考了其本地 docs 工程组织与 build 前同步思路，再将其扩展为更重白皮书叙事和图示表达的发布面。',
      href: 'https://github.com/MoonshotAI/kimi-cli',
      label: '访问'
    },
    {
      kind: 'Open Source',
      title: 'Cursor Rules Collection',
      note: '社区贡献的 Cursor 规则集合，提供多种语言和框架的 .cursorrules 模板。本项目的规则来源和灵感。',
      href: 'https://github.com/pontusab/cursor-rules',
      label: '访问'
    },
    {
      kind: 'Open Source',
      title: 'awesome-cursorrules',
      note: '精选的 Cursor 规则资源列表，包含各种技术栈的规则模板。同类项目，本站的中文化版本。',
      href: 'https://github.com/DLucasMoura/awesome-cursorrules',
      label: '访问'
    }
  ]"
/>

## 技术标准

<CitationLedger
  title="技术标准与规范"
  intro="本站设计遵循的相关标准。"
  :entries="[
    {
      kind: 'Standard',
      title: 'WCAG 2.1 - Web Content Accessibility Guidelines',
      note: 'Web 内容可访问性指南，本站深浅色模式对比度标准的依据（要求 ≥ 4.5:1）。',
      href: 'https://www.w3.org/TR/WCAG21/',
      label: '访问'
    },
    {
      kind: 'Standard',
      title: 'Semantic Versioning 2.0.0',
      note: '语义化版本控制规范，规则文件的版本管理参考。',
      href: 'https://semver.org/',
      label: '访问'
    },
    {
      kind: 'Article',
      title: 'llms.txt - AI-Friendly Documentation Standard',
      note: '定义了一种让文档对 LLM 更友好的标准格式。本站使用 vitepress-plugin-llms 支持此格式。',
      href: 'https://llmstxt.org/',
      label: '访问'
    }
  ]"
/>

## 经典著作

<CitationLedger
  title="经典著作"
  intro="规则文件中最佳实践的理论来源。"
  :entries="[
    {
      kind: 'Book',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      note: '敏捷软件开发经典著作，定义了编写可维护代码的原则和实践。许多规则文件的核心设计原则来源。',
      href: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'The Pragmatic Programmer: Your Journey to Mastery',
      note: '程序员修炼之道，涵盖从代码到职业发展的实用建议。规则文件中最佳实践的来源。',
      href: 'https://pragprog.com/titles/tpp20/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      note: '软件设计模式的开创性著作，定义了 23 种经典设计模式。规则文件中代码结构设计的参考。',
      href: 'https://www.oreilly.com/library/view/design-patterns-elements/0201633612/',
      label: '访问'
    }
  ]"
/>

## 相关资源

如果你要继续横向比较，请再看：

- [相关开源项目探究](../resources/ecosystem)
- [演进思考](../resources/extended-reading)

## 使用方式

这页最适合在两种场景下回看：

1. 当你需要证明站点结构不是"拍脑袋设计"时
2. 当你准备把项目继续升级为团队知识治理中枢时

---

## 引用统计

本站共收录 **40+ 条** 参考文献，涵盖：

| 类型 | 数量 |
|------|------|
| 学术论文 | 10 |
| 书籍 | 8 |
| 文章 | 8 |
| 开源项目 | 6 |
| 技术标准 | 5 |
| **总计** | **40+** |

## 扩展引用

### 软件工程经典

<CitationLedger
  title="软件工程经典著作"
  intro="规则文件中最佳实践的理论来源。"
  :entries="[
    {
      kind: 'Book',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      note: '敏捷软件开发经典著作，定义了编写可维护代码的原则和实践。许多规则文件的核心设计原则来源。',
      href: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'The Pragmatic Programmer: Your Journey to Mastery',
      note: '程序员修炼之道，涵盖从代码到职业发展的实用建议。规则文件中最佳实践的来源。',
      href: 'https://pragprog.com/titles/tpp20/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      note: '软件设计模式的开创性著作，定义了 23 种经典设计模式。规则文件中代码结构设计的参考。',
      href: 'https://www.oreilly.com/library/view/design-patterns-elements/0201633612/',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'Refactoring: Improving the Design of Existing Code',
      note: 'Martin Fowler 的重构经典，定义了代码重构的技术和方法。规则文件中代码改进的指导。',
      href: 'https://martinfowler.com/books/refactoring.html',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'Code Complete: A Practical Handbook of Software Construction',
      note: 'Steve McConnell 的软件构建手册，涵盖代码编写的方方面面。规则文件中编码规范的参考。',
      href: 'https://www.oreilly.com/library/view/code-complete-second/0735619670/',
      label: '访问'
    }
  ]"
/>

### AI 与 LLM 研究

<CitationLedger
  title="AI 与大语言模型研究"
  intro="理解 AI 编程助手行为的研究。"
  :entries="[
    {
      kind: 'Paper',
      title: 'Constitutional AI: Harmlessness from AI Feedback',
      note: 'Anthropic 提出的 Constitutional AI 方法，通过预定义原则引导 AI 行为。对规则文件的核心原则设计有启发。',
      href: 'https://arxiv.org/abs/2212.08073',
      label: '访问'
    },
    {
      kind: 'Paper',
      title: 'Training Language Models to Follow Instructions',
      note: 'InstructGPT 论文，展示了如何通过人类反馈训练模型遵循指令。理解规则文件如何影响 AI 行为。',
      href: 'https://arxiv.org/abs/2203.02155',
      label: '访问'
    },
    {
      kind: 'Paper',
      title: 'Self-Instruct: Aligning LM with Self Generated Instructions',
      note: '展示了如何让语言模型自我生成指令来提升能力。理解 AI 如何理解和扩展规则。',
      href: 'https://arxiv.org/abs/2212.10560',
      label: '访问'
    },
    {
      kind: 'Article',
      title: 'Prompt Engineering Guide by DAIR.AI',
      note: '全面的 Prompt 工程指南，涵盖各种技术和最佳实践。规则设计的实用参考。',
      href: 'https://www.promptingguide.ai/',
      label: '访问'
    }
  ]"
/>

### 文档工程

<CitationLedger
  title="文档工程方法论"
  intro="文档系统设计的最佳实践。"
  :entries="[
    {
      kind: 'Article',
      title: 'Write the Docs - Documentation Guide',
      note: '文档写作社区的最佳实践指南，涵盖文档结构、写作风格和维护策略。',
      href: 'https://www.writethedocs.org/guide/',
      label: '访问'
    },
    {
      kind: 'Article',
      title: 'Google Developer Documentation Style Guide',
      note: 'Google 的开发者文档风格指南，定义了清晰、一致的文档写作标准。',
      href: 'https://developers.google.com/style',
      label: '访问'
    },
    {
      kind: 'Book',
      title: 'Docs for Developers: An Engineer\'s Introduction',
      note: '面向开发者的文档编写入门，涵盖技术文档的各个方面。',
      href: 'https://www.apress.com/gp/book/9781484272143',
      label: '访问'
    }
  ]"
/>

### 开源架构案例

<CitationLedger
  title="开源架构案例研究"
  intro="学习优秀开源项目的架构设计。"
  :entries="[
    {
      kind: 'Open Source',
      title: 'VitePress - Vue.js Static Site Generator',
      note: '本站使用的文档框架，展示了现代静态站点生成器的架构设计。',
      href: 'https://github.com/vuejs/vitepress',
      label: '访问'
    },
    {
      kind: 'Open Source',
      title: 'Vue.js - The Progressive JavaScript Framework',
      note: 'Vue.js 框架的设计模式和最佳实践，对本站组件设计有启发。',
      href: 'https://github.com/vuejs/vue',
      label: '访问'
    },
    {
      kind: 'Open Source',
      title: 'Nuxt - The Intuitive Vue Framework',
      note: 'Nuxt 的文档架构和内容组织方式，展示了大型项目文档的最佳实践。',
      href: 'https://github.com/nuxt/nuxt',
      label: '访问'
    }
  ]"
/>

### 前端工程化

<CitationLedger
  title="前端工程化参考"
  intro="前端项目规则设计的参考资料。"
  :entries="[
    {
      kind: 'Article',
      title: 'Frontend Masters - Frontend Engineering',
      note: '前端工程化深度课程，涵盖构建工具、测试、部署等主题。',
      href: 'https://frontendmasters.com/',
      label: '访问'
    },
    {
      kind: 'Article',
      title: 'Modern CSS Solutions for Old CSS Problems',
      note: '现代 CSS 解决方案，展示了 CSS 最新特性的应用。',
      href: 'https://moderncss.dev/',
      label: '访问'
    },
    {
      kind: 'Standard',
      title: 'ECMAScript Specification',
      note: 'JavaScript 语言规范，理解语言特性的权威来源。',
      href: 'https://tc39.es/ecma262/',
      label: '访问'
    }
  ]"
/>
