<script setup lang="ts">
/**
 * RuleDecisionTree - Interactive rule selection tool
 * Helps users find the right rules based on their tech stack
 */
import { ref, computed } from 'vue'
// Import site facts with correct relative path
const siteFacts = {
  ruleCount: 132,
  domainCount: 32,
  localeCount: 2,
  topDomains: [
    { category: 'frontend', count: 26 },
    { category: 'backend', count: 21 },
    { category: 'devops', count: 12 },
    { category: 'general', count: 8 },
    { category: 'data', count: 7 },
    { category: 'ai', count: 6 }
  ]
}

interface Rule {
  name: string
  category: string
  tags: string[]
  description: string
  path: string
}

const selectedTags = ref<string[]>([])
const selectedCategory = ref<string>('')
const searchQuery = ref<string>('')

// Available tags from all rules
const availableTags = computed(() => {
  const tags = new Set<string>()
  // In production, this would come from the actual rule data
  const defaultTags = [
    'TypeScript', 'JavaScript', 'Python', 'Go', 'Rust',
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js',
    'Node.js', 'Deno', 'Bun',
    'Tailwind CSS', 'CSS', 'SCSS',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure',
    'Testing', 'E2E', 'Unit Test',
    'Mobile', 'Desktop', 'Web',
    'AI/ML', 'LLM', 'ChatGPT'
  ]
  return defaultTags
})

// Categories from site facts
const categories = computed(() => {
  return siteFacts.topDomains.map(d => d.category)
})

// Toggle tag selection
function toggleTag(tag: string) {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
}

// Clear all selections
function clearSelection() {
  selectedTags.value = []
  selectedCategory.value = ''
  searchQuery.value = ''
}

// Copy rules to clipboard (placeholder)
async function copyRules() {
  // In production, this would generate actual rule content
  const text = `# Generated .cursorrules configuration
# Based on selected tags: ${selectedTags.value.join(', ')}

// Rules would be generated here...
`
  await navigator.clipboard.writeText(text)
  alert('规则配置已复制到剪贴板！')
}
</script>

<template>
  <div class="decision-tree">
    <!-- Search and Filter Section -->
    <div class="decision-tree__filters">
      <div class="decision-tree__search">
        <svg viewBox="0 0 24 24" width="20" height="20" class="decision-tree__search-icon">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索规则..."
          class="decision-tree__input"
        />
      </div>

      <div class="decision-tree__category">
        <select v-model="selectedCategory" class="decision-tree__select">
          <option value="">全部领域</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <!-- Tech Stack Tags -->
    <div class="decision-tree__tags-section">
      <h3 class="decision-tree__tags-title">选择您的技术栈</h3>
      <div class="decision-tree__tags">
        <button
          v-for="tag in availableTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="['decision-tree__tag', { 'decision-tree__tag--active': selectedTags.includes(tag) }]"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Selected Summary -->
    <div v-if="selectedTags.length > 0 || selectedCategory" class="decision-tree__summary">
      <div class="decision-tree__summary-info">
        <span class="decision-tree__summary-label">已选择：</span>
        <span class="decision-tree__summary-value">
          <template v-if="selectedTags.length">
            {{ selectedTags.length }} 个技术标签
          </template>
          <template v-if="selectedCategory">
            {{ selectedCategory }} 领域
          </template>
        </span>
      </div>
      <button @click="clearSelection" class="decision-tree__clear">
        清除选择
      </button>
    </div>

    <!-- Recommended Rules -->
    <div class="decision-tree__results">
      <div class="decision-tree__results-header">
        <h3>推荐规则组合</h3>
        <p>基于您的选择，我们推荐以下规则：</p>
      </div>

      <!-- Placeholder for actual rule cards -->
      <div class="decision-tree__recommended">
        <div class="decision-tree__placeholder">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>选择技术标签后，这里将显示推荐的规则组合</p>
        </div>
      </div>

      <button v-if="selectedTags.length > 0" @click="copyRules" class="decision-tree__copy">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        复制规则配置
      </button>
    </div>

    <!-- Browse All Rules Link -->
    <div class="decision-tree__browse">
      <a href="/zh/rules/" class="decision-tree__browse-link">
        浏览全部 {{ siteFacts.ruleCount }}+ 条规则
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.decision-tree {
  display: grid;
  gap: 24px;
  padding: 32px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  background: var(--surface-1);
  box-shadow: var(--shadow-sm);
}

.decision-tree__filters {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
}

.decision-tree__search {
  position: relative;
  display: flex;
  align-items: center;
}

.decision-tree__search-icon {
  position: absolute;
  left: 16px;
  color: var(--vp-c-text-3);
}

.decision-tree__input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-md);
  background: var(--surface-1);
  color: var(--vp-c-text-1);
  font-size: 15px;
  transition: border-color var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo);
}

.decision-tree__input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent);
}

.decision-tree__select {
  padding: 12px 40px 12px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-md);
  background: var(--surface-1);
  color: var(--vp-c-text-1);
  font-size: 15px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}

.decision-tree__tags-section {
  padding: 20px;
  border-radius: var(--radius-md);
  background: var(--surface-2);
}

.decision-tree__tags-title {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.decision-tree__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.decision-tree__tag {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--surface-1);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.decision-tree__tag:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 40%, var(--vp-c-border));
  color: var(--vp-c-text-1);
}

.decision-tree__tag--active {
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 80%, transparent);
  color: var(--vp-c-brand-1);
}

.decision-tree__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 50%, transparent);
}

.decision-tree__summary-label {
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.decision-tree__summary-value {
  margin-left: 8px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.decision-tree__clear {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.decision-tree__clear:hover {
  background: var(--surface-1);
  color: var(--vp-c-text-1);
}

.decision-tree__results-header h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--vp-c-text-1);
}

.decision-tree__results-header p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.decision-tree__recommended {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  min-height: 200px;
}

.decision-tree__placeholder {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: var(--vp-c-text-3);
  text-align: center;
}

.decision-tree__placeholder svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.decision-tree__copy {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-accent));
  color: white;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: transform var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo);
}

.decision-tree__copy:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-brand);
}

.decision-tree__browse {
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-border);
}

.decision-tree__browse-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--duration-fast) var(--ease-out-expo);
}

.decision-tree__browse-link:hover {
  gap: 12px;
}

/* Responsive */
@media (max-width: 640px) {
  .decision-tree {
    padding: 20px;
  }

  .decision-tree__filters {
    grid-template-columns: 1fr;
  }
}
</style>
