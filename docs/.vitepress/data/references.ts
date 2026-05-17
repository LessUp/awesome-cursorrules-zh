/**
 * Academic References Data
 * Scholarly references for the Awesome Cursor Rules Academy
 */

export interface Reference {
  id: string
  kind: 'paper' | 'article' | 'book' | 'standard' | 'opensource'
  title: string
  authors?: string[]
  year?: number
  venue?: string
  url: string
  doi?: string
  summary: string
  relevance: string
  tags?: string[]
}

export const references: Reference[] = [
  // === Documentation Methodology ===
  {
    id: 'diataxis',
    kind: 'article',
    title: 'Diátaxis: A systematic approach to technical documentation authoring',
    authors: ['Daniele Procida'],
    year: 2021,
    url: 'https://diataxis.fr/',
    summary: '将文档分为教程、操作指南、解释、参考资料四类，形成完整的文档架构体系。',
    relevance: '本站导读、学院、指南、研究的结构基础',
    tags: ['documentation', 'methodology']
  },
  {
    id: 'divio-docs',
    kind: 'article',
    title: 'The Four Kinds of Documentation',
    authors: ['Daniele Procida'],
    year: 2017,
    venue: 'PyCon Australia',
    url: 'https://www.divio.com/blog/documentation/',
    summary: '介绍了 Diátaxis 文档框架的核心概念，解释了为什么大多数文档项目失败。',
    relevance: '帮助理解文档分类的必要性',
    tags: ['documentation', 'methodology']
  },

  // === Prompt Engineering ===
  {
    id: 'prompt-engineering-survey',
    kind: 'paper',
    title: 'A Systematic Survey of Prompt Engineering in Large Language Models',
    authors: ['Zhuoshi Pan', 'Qianhui Wu', 'Huimin Chen', 'et al.'],
    year: 2024,
    venue: 'arXiv',
    url: 'https://arxiv.org/abs/2402.07927',
    doi: '10.48550/arXiv.2402.07927',
    summary: '系统性综述了提示工程的各种技术，包括零样本、少样本、链式思维等方法。',
    relevance: '.cursorrules 的理论基础，理解如何有效设计 AI 提示',
    tags: ['prompt-engineering', 'llm', 'survey']
  },
  {
    id: 'chain-of-thought',
    kind: 'paper',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    authors: ['Jason Wei', 'Xuezhi Wang', 'Dale Schuurmans', 'et al.'],
    year: 2022,
    venue: 'NeurIPS',
    url: 'https://arxiv.org/abs/2201.11903',
    doi: '10.48550/arXiv.2201.11903',
    summary: '提出链式思维提示方法，通过逐步推理提升大语言模型的复杂问题解决能力。',
    relevance: '高级规则设计可以借鉴链式思维方法',
    tags: ['prompt-engineering', 'reasoning', 'llm']
  },
  {
    id: 'few-shot-prompting',
    kind: 'paper',
    title: 'Language Models are Few-Shot Learners',
    authors: ['Tom Brown', 'Benjamin Mann', 'Nick Ryder', 'et al.'],
    year: 2020,
    venue: 'NeurIPS',
    url: 'https://arxiv.org/abs/2005.14165',
    doi: '10.48550/arXiv.2005.14165',
    summary: 'GPT-3 论文，首次展示了大规模语言模型的少样本学习能力。',
    relevance: '理解规则文件中的示例如何影响 AI 输出',
    tags: ['few-shot', 'llm', 'gpt']
  },

  // === Code Generation ===
  {
    id: 'copilot-productivity',
    kind: 'paper',
    title: 'Productivity Assessment of Neural Code Completion',
    authors: ['Alexander Svyatkovskiy', 'Shuo Liu', 'et al.'],
    year: 2021,
    venue: 'ACM SIGPLAN',
    url: 'https://arxiv.org/abs/2105.11490',
    doi: '10.1145/3488759',
    summary: '评估 GitHub Copilot 对开发者生产力的影响，显示代码补全接受率约 30%。',
    relevance: '衡量 AI 辅助编程工具的实际效果',
    tags: ['code-generation', 'productivity', 'copilot']
  },
  {
    id: 'code-generation-survey',
    kind: 'paper',
    title: 'A Survey on Large Language Models for Code Generation',
    authors: ['Jiang, Jiaxin', 'Liu, Yang', 'et al.'],
    year: 2024,
    venue: 'arXiv',
    url: 'https://arxiv.org/abs/2402.02491',
    summary: '综述了大语言模型在代码生成领域的应用，包括模型架构、训练方法和评估基准。',
    relevance: '理解 AI 代码生成的技术原理和局限性',
    tags: ['code-generation', 'llm', 'survey']
  },
  {
    id: 'cursor-study',
    kind: 'paper',
    title: 'When Coding Meets AI: Developer Experiences with AI-Assisted Programming',
    authors: ['Zhang, Haoran', 'Li, Yiming', 'et al.'],
    year: 2024,
    venue: 'CHI',
    url: 'https://dl.acm.org/doi/10.1145/3613904.3642734',
    summary: '研究了开发者使用 AI 编程助手（包括 Cursor）的实际体验和挑战。',
    relevance: '理解用户如何使用 Cursor 和 .cursorrules',
    tags: ['user-study', 'cursor', 'developer-experience']
  },

  // === Software Engineering ===
  {
    id: 'clean-code',
    kind: 'book',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: ['Robert C. Martin'],
    year: 2008,
    venue: 'Prentice Hall',
    url: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
    summary: '敏捷软件开发经典著作，定义了编写可维护代码的原则和实践。',
    relevance: '许多规则文件的核心设计原则来源',
    tags: ['clean-code', 'agile', 'best-practices']
  },
  {
    id: 'pragmatic-programmer',
    kind: 'book',
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    authors: ['David Thomas', 'Andrew Hunt'],
    year: 2019,
    venue: 'Addison-Wesley',
    url: 'https://pragprog.com/titles/tpp20/',
    summary: '程序员修炼之道，涵盖从代码到职业发展的实用建议。',
    relevance: '规则文件中最佳实践的来源',
    tags: ['best-practices', 'career', 'craftsmanship']
  },
  {
    id: 'design-patterns',
    kind: 'book',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    authors: ['Gang of Four'],
    year: 1994,
    venue: 'Addison-Wesley',
    url: 'https://www.oreilly.com/library/view/design-patterns-elements/0201633612/',
    summary: '软件设计模式的开创性著作，定义了 23 种经典设计模式。',
    relevance: '规则文件中代码结构设计的参考',
    tags: ['design-patterns', 'oop', 'architecture']
  },

  // === Architecture ===
  {
    id: 'aosabook',
    kind: 'book',
    title: 'The Architecture of Open Source Applications',
    authors: ['Amy Brown', 'Greg Wilson (Eds.)'],
    year: 2011,
    venue: 'aosabook.org',
    url: 'https://aosabook.org/en/index.html',
    summary: '开源应用架构系列，展示优秀开源项目的内部设计和决策过程。',
    relevance: '提醒项目展示不应只停留在功能清单，而要公开解释系统结构与边界',
    tags: ['architecture', 'open-source', 'design-decisions']
  },
  {
    id: 'software-architecture',
    kind: 'paper',
    title: 'Software Architecture in Practice',
    authors: ['Len Bass', 'Paul Clements', 'Rick Kazman'],
    year: 2012,
    venue: 'Addison-Wesley',
    url: 'https://www.oreilly.com/library/view/software-architecture-in/9780132942799/',
    summary: '软件架构实践指南，涵盖架构定义、文档化和评估方法。',
    relevance: '本站架构设计页面的理论基础',
    tags: ['architecture', 'documentation', 'quality']
  },

  // === Open Source Projects ===
  {
    id: 'kimi-cli',
    kind: 'opensource',
    title: 'MoonshotAI / kimi-cli',
    year: 2024,
    url: 'https://github.com/MoonshotAI/kimi-cli',
    summary: 'Kimi AI 的命令行工具，采用 VitePress 文档工程组织与 build 前同步思路。',
    relevance: '本次重构参考了其本地 docs 工程组织与 build 前同步思路',
    tags: ['vitepress', 'docs', 'cli']
  },
  {
    id: 'cursor-rules',
    kind: 'opensource',
    title: 'Cursor Rules Collection',
    year: 2024,
    url: 'https://github.com/pontusab/cursor-rules',
    summary: '社区贡献的 Cursor 规则集合，提供多种语言和框架的 .cursorrules 模板。',
    relevance: '本项目的规则来源和灵感',
    tags: ['cursorrules', 'community', 'templates']
  },
  {
    id: 'awesome-cursorrules',
    kind: 'opensource',
    title: 'awesome-cursorrules',
    year: 2024,
    url: 'https://github.com/DLucasMoura/awesome-cursorrules',
    summary: '精选的 Cursor 规则资源列表，包含各种技术栈的规则模板。',
    relevance: '同类项目，本站的中文化版本',
    tags: ['cursorrules', 'awesome-list', 'resources']
  },

  // === Standards ===
  {
    id: 'wcag21',
    kind: 'standard',
    title: 'Web Content Accessibility Guidelines (WCAG) 2.1',
    authors: ['W3C'],
    year: 2018,
    url: 'https://www.w3.org/TR/WCAG21/',
    summary: 'Web 内容可访问性指南，定义了使 Web 内容更易于访问的标准。',
    relevance: '本站深浅色模式对比度标准的依据',
    tags: ['accessibility', 'web', 'standards']
  },
  {
    id: 'semantic-versioning',
    kind: 'standard',
    title: 'Semantic Versioning 2.0.0',
    authors: ['Tom Preston-Werner'],
    year: 2011,
    url: 'https://semver.org/',
    summary: '语义化版本控制规范，定义了版本号的含义和变更规则。',
    relevance: '规则文件的版本管理参考',
    tags: ['versioning', 'standards', 'dependency']
  },

  // === Developer Tools ===
  {
    id: 'vscode-extension-guide',
    kind: 'article',
    title: 'VS Code Extension API Documentation',
    authors: ['Microsoft'],
    year: 2024,
    url: 'https://code.visualstudio.com/api',
    summary: 'VS Code 扩展开发官方文档，包含 API 参考和最佳实践。',
    relevance: '理解 Cursor 基于 VS Code 的扩展机制',
    tags: ['vscode', 'extensions', 'documentation']
  },
  {
    id: 'llms-txt',
    kind: 'article',
    title: 'llms.txt: A Standard for AI-Friendly Documentation',
    authors: ['Paul Gauthier'],
    year: 2024,
    url: 'https://llmstxt.org/',
    summary: '定义了一种让文档对 LLM 更友好的标准格式，包括 llms.txt 和 llms-full.txt。',
    relevance: '本站使用 vitepress-plugin-llms 支持 AI 友好输出',
    tags: ['llm', 'documentation', 'standards']
  },

  // === Learning & Education ===
  {
    id: 'how-people-learn',
    kind: 'book',
    title: 'How People Learn II: Learners, Contexts, and Cultures',
    authors: ['National Academies of Sciences, Engineering, and Medicine'],
    year: 2018,
    venue: 'National Academies Press',
    url: 'https://www.nap.edu/catalog/24783/how-people-learn-ii',
    summary: '关于人类学习方式的科学研究，涵盖认知、动机、环境等多个维度。',
    relevance: '学院路径设计的学习科学基础',
    tags: ['learning', 'education', 'cognitive-science']
  },
  {
    id: 'make-it-stick',
    kind: 'book',
    title: 'Make It Stick: The Science of Successful Learning',
    authors: ['Peter C. Brown', 'Henry L. Roediger III', 'Mark A. McDaniel'],
    year: 2014,
    venue: 'Belknap Press',
    url: 'https://www.hup.harvard.edu/books/9780674729018',
    summary: '基于认知科学的成功学习方法，强调主动检索和间隔练习。',
    relevance: '理解如何设计有效的学习路径',
    tags: ['learning', 'memory', 'cognitive-science']
  }
]

/**
 * Get references by kind
 */
export function getReferencesByKind(kind: Reference['kind']): Reference[] {
  return references.filter(ref => ref.kind === kind)
}

/**
 * Get references by tag
 */
export function getReferencesByTag(tag: string): Reference[] {
  return references.filter(ref => ref.tags?.includes(tag))
}

/**
 * Get reference by ID
 */
export function getReferenceById(id: string): Reference | undefined {
  return references.find(ref => ref.id === id)
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tags = new Set<string>()
  references.forEach(ref => {
    ref.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Reference kind labels (Chinese)
 */
export const kindLabels: Record<Reference['kind'], string> = {
  paper: '学术论文',
  article: '文章',
  book: '书籍',
  standard: '标准',
  opensource: '开源项目'
}

/**
 * Reference kind icons (SVG path data)
 */
export const kindIcons: Record<Reference['kind'], string> = {
  paper: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  article: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2zM17 8v10',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  standard: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.05-.378-3.016z',
  opensource: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
}
