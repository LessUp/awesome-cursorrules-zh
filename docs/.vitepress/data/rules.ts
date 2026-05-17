/**
 * Rules Metadata
 * Enhanced metadata for .cursorrules files
 */

export interface RuleMeta {
  name: string
  category: string
  tags: string[]
  description: string
  path: string
  principles?: string[]
  useCases?: string[]
  relatedRules?: string[]
}

export interface CategoryMeta {
  id: string
  name: string
  nameZh: string
  description: string
  icon: string
  color: string
  tags: string[]
}

export const categories: CategoryMeta[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    nameZh: '前端开发',
    description: 'React、Vue、Angular、Svelte 等前端框架的规则',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    color: '#61DAFB',
    tags: ['React', 'Vue', 'Angular', 'Svelte', 'TypeScript', 'CSS', 'HTML']
  },
  {
    id: 'backend',
    name: 'Backend',
    nameZh: '后端开发',
    description: 'Node.js、Python、Go、Rust 等后端语言的规则',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    color: '#339933',
    tags: ['Node.js', 'Python', 'Go', 'Rust', 'Java', 'C#', 'PHP']
  },
  {
    id: 'devops',
    name: 'DevOps',
    nameZh: '运维开发',
    description: 'Docker、Kubernetes、CI/CD 等运维相关规则',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.356-2A8.001 8.001 0 0015.356 9m0 0H15',
    color: '#2496ED',
    tags: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Terraform']
  },
  {
    id: 'ai',
    name: 'AI/ML',
    nameZh: '人工智能',
    description: '机器学习、深度学习、LLM 相关规则',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#FF6F00',
    tags: ['PyTorch', 'TensorFlow', 'LLM', 'GPT', 'Machine Learning', 'NLP']
  },
  {
    id: 'mobile',
    name: 'Mobile',
    nameZh: '移动开发',
    description: 'React Native、Flutter、iOS、Android 相关规则',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: '#61DAFB',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift', 'Kotlin']
  },
  {
    id: 'database',
    name: 'Database',
    nameZh: '数据库',
    description: 'SQL、NoSQL、ORM 等数据库相关规则',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    color: '#00758F',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma']
  },
  {
    id: 'security',
    name: 'Security',
    nameZh: '安全',
    description: '安全审计、加密、认证相关规则',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-14V7a4 4 0 00-8 0v4h8V3a4 4 0 00-8 0v4h8',
    color: '#DC143C',
    tags: ['OAuth', 'JWT', 'Encryption', 'Security Audit', 'OWASP']
  },
  {
    id: 'general',
    name: 'General',
    nameZh: '通用',
    description: '适用于所有项目的通用规则',
    icon: 'M4 6h16M4 12h16M4 18h16',
    color: '#6B7280',
    tags: ['Git', 'Testing', 'Documentation', 'Code Style', 'Best Practices']
  }
]

/**
 * Get category by ID
 */
export function getCategoryById(id: string): CategoryMeta | undefined {
  return categories.find(cat => cat.id === id)
}

/**
 * Get all unique tags from all categories
 */
export function getAllCategoryTags(): string[] {
  const tags = new Set<string>()
  categories.forEach(cat => {
    cat.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

/**
 * Technology stack tags for decision tree
 */
export const techStackTags = [
  // Languages
  'TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Java', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin',
  // Frontend Frameworks
  'React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Remix', 'Astro',
  // Backend Frameworks
  'Express', 'FastAPI', 'Django', 'Flask', 'NestJS', 'Spring', 'Laravel',
  // Mobile
  'React Native', 'Flutter', 'iOS', 'Android',
  // Databases
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase', 'Prisma',
  // DevOps & Cloud
  'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Vercel', 'Netlify', 'Terraform',
  // CSS & Styling
  'Tailwind CSS', 'CSS Modules', 'Styled Components', 'Sass', 'Less',
  // Testing
  'Jest', 'Vitest', 'Cypress', 'Playwright', 'Testing Library',
  // AI/ML
  'OpenAI', 'Anthropic', 'LangChain', 'PyTorch', 'TensorFlow',
  // Tools
  'Git', 'npm', 'pnpm', 'yarn', 'ESLint', 'Prettier', 'Vite', 'Webpack'
]

/**
 * Rule design principles
 */
export const designPrinciples = {
  specificity: {
    name: 'Specificity',
    nameZh: '具体性',
    description: '规则应该具体明确，避免模糊的描述',
    example: '使用 "使用 4 空格缩进" 而非 "使用合适的缩进"'
  },
  context: {
    name: 'Context',
    nameZh: '上下文',
    description: '提供足够的上下文信息，帮助 AI 理解意图',
    example: '在规则开头说明项目类型、技术栈和目标'
  },
  examples: {
    name: 'Examples',
    nameZh: '示例',
    description: '提供具体的代码示例，展示期望的输出格式',
    example: '使用 ``` 代码块展示示例代码'
  },
  consistency: {
    name: 'Consistency',
    nameZh: '一致性',
    description: '规则之间保持一致的术语和风格',
    example: '统一使用 "函数" 或 "方法"，不要混用'
  },
  modularity: {
    name: 'Modularity',
    nameZh: '模块化',
    description: '将复杂规则拆分为多个小规则',
    example: '分离代码风格、架构模式、测试策略等规则'
  }
}
