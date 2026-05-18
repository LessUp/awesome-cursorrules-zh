import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: {
    // 玻璃态效果
    'glass': 'bg-white/60 backdrop-blur-xl border border-white/20',
    'glass-dark': 'dark:bg-black/40 dark:border-white/10',

    // 交互卡片
    'interactive-card': 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',

    // 渐变文字
    'gradient-text': 'bg-gradient-to-r from-[var(--vp-c-brand-1)] to-[var(--vp-c-accent)] bg-clip-text text-transparent',

    // 信号徽章
    'signal-pill': 'px-3 py-1 rounded-full text-xs font-semibold bg-[var(--vp-c-brand-soft)] text-[var(--vp-c-brand-1)]',

    // 深度阴影
    'depth-1': 'shadow-[var(--shadow-xs)]',
    'depth-2': 'shadow-[var(--shadow-sm)]',
    'depth-3': 'shadow-[var(--shadow-md)]',
    'depth-4': 'shadow-[var(--shadow-lg)]',
    'depth-5': 'shadow-[var(--shadow-xl)]',

    // 入场动画
    'animate-fade-up': 'animate-[fade-up_0.5s_ease-out]',
    'animate-pulse-glow': 'animate-[pulse-glow-tech_2s_ease-in-out_infinite]',
  },
  theme: {
    colors: {
      brand: 'var(--vp-c-brand-1)',
      accent: 'var(--vp-c-accent)',
      surface: 'var(--surface-1)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
      info: 'var(--color-info)',
    }
  },
  safelist: [
    'glass',
    'glass-dark',
    'interactive-card',
    'gradient-text',
    'signal-pill',
  ]
})
