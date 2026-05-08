/**
 * 规则文件元数据解析器
 * @module scripts/utils/parse-cursorrules
 * @description 从 .cursorrules 文件中提取结构化元数据
 */

/**
 * @typedef {Object} RuleMetadata
 * @property {string} name - 规则名称(从目录名推断)
 * @property {string} description - 规则描述
 * @property {string[]} techStack - 技术栈列表
 * @property {string} role - AI 角色定义
 * @property {string[]} keywords - 关键词列表
 * @property {number} lineCount - 文件行数
 * @property {number} charCount - 字符数
 */

/**
 * 从文件内容中提取 AI 角色定义
 * @param {string} content - 文件内容
 * @returns {string} 角色定义(第一行或匹配的角色描述)
 */
function extractRole(content) {
  const lines = content.trim().split('\n');
  
  // 匹配 "你是...专家" 或 "You are..."
  const rolePattern = /^(你是|You are)[^\n]+/i;
  const roleMatch = content.match(rolePattern);
  
  if (roleMatch) {
    return roleMatch[0].trim();
  }
  
  // 如果没有明确角色定义,返回第一行(通常是标题或简介)
  const firstLine = lines[0].replace(/^#\s*/, '').trim();
  return firstLine || '';
}

/**
 * 从文件内容中提取技术栈
 * @param {string} content - 文件内容
 * @returns {string[]} 技术栈列表
 */
function extractTechStack(content) {
  const techStack = [];
  
  // 查找 "## 技术栈" 或 "## Tech Stack" 部分
  const techSectionPattern = /## (技术栈|Tech Stack)\n([\s\S]*?)(?=\n##|$)/i;
  const techSectionMatch = content.match(techSectionPattern);
  
  if (techSectionMatch) {
    const section = techSectionMatch[2];
    
    // 提取列表项中的技术名称
    // 匹配格式: - **技术名**: 说明 或 - **技术名** - 说明
    const techPattern = /[-*] \*\*(.+?)\*\*/g;
    let match;
    while ((match = techPattern.exec(section)) !== null) {
      const techName = match[1].trim();
      // 过滤掉通用词汇,只保留具体技术名称
      if (!['框架', '语言', '后端', '前端', '容器化', '数据库', '工具', '平台', '服务'].includes(techName)) {
        techStack.push(techName);
      }
    }
  }
  
  // 如果没有找到技术栈部分,从内容中提取常见技术关键词
  if (techStack.length === 0) {
    const commonTechs = [
      'React', 'Vue', 'Angular', 'Svelte', 'SolidJS',
      'TypeScript', 'JavaScript', 'Node\\.js', 'Deno', 'Bun',
      'Next\\.js', 'Nuxt', 'SvelteKit', 'Remix',
      'Python', 'Go', 'Rust', 'Java', 'PHP', 'Ruby',
      'Laravel', 'Django', 'Express', 'FastAPI',
      'Tailwind', 'CSS', 'SCSS',
      'GraphQL', 'REST', 'API',
      'Docker', 'Kubernetes', 'AWS', 'Vercel',
      'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
      'Git', 'GitHub', 'GitLab'
    ];
    
    const techPattern = new RegExp(`\\b(${commonTechs.join('|')})\\b`, 'gi');
    const matches = content.match(techPattern) || [];
    
    // 去重并保留原始大小写
    const uniqueTechs = new Set();
    matches.forEach(tech => {
      uniqueTechs.add(tech);
    });
    
    techStack.push(...Array.from(uniqueTechs).slice(0, 10));
  }
  
  // 去重并规范化技术名称
  const uniqueTechs = [];
  const seen = new Set();
  techStack.forEach(tech => {
    const normalized = tech.toLowerCase();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      uniqueTechs.push(tech);
    }
  });
  
  return uniqueTechs;
}

/**
 * 从文件内容中提取关键词
 * @param {string} content - 文件内容
 * @param {string} ruleName - 规则名称(用于推断关键词)
 * @returns {string[]} 关键词列表
 */
function extractKeywords(content, ruleName) {
  const keywords = new Set();
  
  // 从规则名称中提取关键词
  if (ruleName) {
    // 将 kebab-case 转换为单词
    const nameWords = ruleName.split('-').map(w => w.toLowerCase());
    nameWords.forEach(word => {
      if (word.length > 2) { // 过滤掉太短的词
        keywords.add(word);
      }
    });
  }
  
  // 从标题中提取关键词
  const headingPattern = /^#+\s+(.+)$/gm;
  let match;
  while ((match = headingPattern.exec(content)) !== null) {
    const heading = match[1].toLowerCase();
    const words = heading.split(/\s+/);
    words.forEach(word => {
      if (word.length > 3 && !/^(the|and|for|with|from|your|this|that|are|you|can|use|should|must)$/.test(word)) {
        keywords.add(word);
      }
    });
  }
  
  // 返回前 10 个关键词
  return Array.from(keywords).slice(0, 10);
}

/**
 * 从技术栈和角色定义生成规则描述
 * @param {string} role - 角色定义
 * @param {string[]} techStack - 技术栈列表
 * @param {string} ruleName - 规则名称
 * @returns {string} 规则描述
 */
function generateDescription(role, techStack, ruleName) {
  // 如果角色定义包含足够的描述信息,直接使用
  if (role && role.length > 10 && !role.startsWith('#')) {
    return role;
  }
  
  // 从技术栈生成描述
  if (techStack.length > 0) {
    const mainTech = techStack.slice(0, 3).join(' + ');
    return `${mainTech} 开发规范`;
  }
  
  // 从规则名称生成描述
  if (ruleName) {
    const words = ruleName.split('-').join(' ');
    return `${words} 开发规范`;
  }
  
  return '通用开发规范';
}

/**
 * 解析 .cursorrules 文件元数据
 * @param {string} content - 文件内容
 * @param {string} [ruleName=''] - 规则名称(可选,从文件路径推断)
 * @returns {RuleMetadata} 元数据对象
 * 
 * @example
 * const content = readFileSync('rules/frontend/react/.cursorrules', 'utf-8');
 * const metadata = parseCursorrulesFile(content, 'react');
 * console.log(metadata.techStack); // ['React', 'TypeScript', ...]
 */
export function parseCursorrulesFile(content, ruleName = '') {
  const role = extractRole(content);
  const techStack = extractTechStack(content);
  const keywords = extractKeywords(content, ruleName);
  const description = generateDescription(role, techStack, ruleName);
  
  return {
    name: ruleName,
    description,
    techStack,
    role,
    keywords,
    lineCount: content.split('\n').length,
    charCount: content.length
  };
}

/**
 * 从文件路径中提取规则名称
 * @param {string} filePath - 文件完整路径
 * @returns {string} 规则名称
 * 
 * @example
 * extractRuleName('/path/to/rules/frontend/react/react-typescript/.cursorrules');
 * // 返回: 'react-typescript'
 */
export function extractRuleName(filePath) {
  const parts = filePath.split('/');
  const dirName = parts[parts.length - 2]; // 倒数第二个部分是规则目录名
  return dirName || '';
}

/**
 * 从文件路径中提取分类名称
 * @param {string} filePath - 文件完整路径
 * @returns {string} 分类名称
 * 
 * @example
 * extractCategory('/path/to/rules/frontend/react/react-typescript/.cursorrules');
 * // 返回: 'frontend'
 */
export function extractCategory(filePath) {
  const parts = filePath.split('/');
  const rulesIndex = parts.indexOf('rules');
  if (rulesIndex >= 0 && rulesIndex + 1 < parts.length) {
    return parts[rulesIndex + 1];
  }
  return '';
}

/**
 * 从文件路径中提取子分类名称
 * @param {string} filePath - 文件完整路径
 * @returns {string} 子分类名称
 * 
 * @example
 * extractSubCategory('/path/to/rules/frontend/react/react-typescript/.cursorrules');
 * // 返回: 'react'
 */
export function extractSubCategory(filePath) {
  const parts = filePath.split('/');
  const rulesIndex = parts.indexOf('rules');
  if (rulesIndex >= 0 && rulesIndex + 2 < parts.length) {
    return parts[rulesIndex + 2];
  }
  return '';
}
