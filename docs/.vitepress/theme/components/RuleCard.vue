<script setup lang="ts">
/**
 * RuleCard - Rule display card component
 * Shows a single .cursorrules rule with metadata
 */
interface Rule {
  name: string
  category: string
  tags: string[]
  description: string
  path: string
}

defineProps<{
  rule: Rule
  compact?: boolean
}>()
</script>

<template>
  <article :class="['rule-card', { 'rule-card--compact': compact }]">
    <div class="rule-card__header">
      <span class="rule-card__category">{{ rule.category }}</span>
    </div>

    <h3 class="rule-card__name">
      <a :href="`/zh/rules/${rule.category}/${rule.name}`">{{ rule.name }}</a>
    </h3>

    <p class="rule-card__description">{{ rule.description }}</p>

    <div v-if="!compact && rule.tags.length" class="rule-card__tags">
      <span v-for="tag in rule.tags.slice(0, 4)" :key="tag" class="rule-card__tag">
        {{ tag }}
      </span>
      <span v-if="rule.tags.length > 4" class="rule-card__tag rule-card__tag--more">
        +{{ rule.tags.length - 4 }}
      </span>
    </div>

    <div v-if="!compact" class="rule-card__actions">
      <a :href="rule.path" class="rule-card__link" target="_blank">
        查看规则
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<style scoped>
.rule-card {
  padding: 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-md);
  background: var(--surface-1);
  transition: border-color var(--duration-fast) var(--ease-out-expo),
              box-shadow var(--duration-fast) var(--ease-out-expo),
              transform var(--duration-fast) var(--ease-out-expo);
}

.rule-card:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-border));
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.rule-card--compact {
  padding: 16px;
}

.rule-card__header {
  margin-bottom: 10px;
}

.rule-card__category {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 70%, transparent);
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.rule-card__name {
  margin: 0 0 8px;
  font-family: var(--font-display);
  font-size: 18px;
  line-height: 1.3;
}

.rule-card__name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out-expo);
}

.rule-card__name a:hover {
  color: var(--vp-c-brand-1);
}

.rule-card__description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rule-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.rule-card__tag {
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--surface-2);
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-family: var(--font-mono);
}

.rule-card__tag--more {
  background: color-mix(in srgb, var(--vp-c-brand-soft) 50%, transparent);
  color: var(--vp-c-brand-1);
}

.rule-card__actions {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-border);
}

.rule-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: gap var(--duration-fast) var(--ease-out-expo);
}

.rule-card__link:hover {
  gap: 10px;
}
</style>
