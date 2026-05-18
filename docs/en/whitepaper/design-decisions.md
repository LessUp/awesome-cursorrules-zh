# Design Decisions Record

This document records key design decisions using the ADR (Architecture Decision Record) format.

## ADR-001: Choose VitePress as Documentation Framework

### Status

Adopted (2024-01)

### Decision

Selected **VitePress** as the documentation framework.

### Rationale

| Framework | Pros | Cons |
|-----------|------|------|
| **VitePress** | Vue ecosystem, Vite speed, simple config | Smaller community than Docusaurus |
| Docusaurus | React ecosystem, feature-rich | Slower builds, complex config |

**Key Factors**:
1. Vue 3 Composition API suitable for component development
2. Vite HMR provides excellent development experience
3. Built-in i18n support for bilingual needs

---

## ADR-002: Adopt OKLCH Color Space

### Status

Adopted (2024-02)

### Decision

Use **OKLCH** color space for brand colors.

### Rationale

| Color Space | Perceptual Uniformity | Browser Support |
|-------------|----------------------|-----------------|
| **OKLCH** | ⭐⭐⭐ | Modern browsers |
| HSL | ⭐ | All |
| RGB | ⭐ | All |

**Advantages**:
1. Perceptually uniform - consistent visual effect for same lightness changes
2. Wide gamut - supports colors beyond sRGB
3. Easy to create color scales - fix L/C, adjust H

---

## ADR-003: Four-Layer Architecture Design

### Status

Adopted (2024-02)

### Decision

Adopt **Four-Layer System Architecture**:

```
Asset Layer → Sync Layer → Narrative Layer → Publishing Layer
```

### Rationale

1. **Asset Layer**: Rule files are the single source of truth
2. **Sync Layer**: Auto-extract site facts before build
3. **Narrative Layer**: Whitepaper-style content organization
4. **Publishing Layer**: Theme components and GitHub Pages

---

## ADR-004: CSS Cascade Layers Architecture

### Status

Adopted (2024-02)

### Decision

Use **CSS Cascade Layers** to organize styles:

```css
@layer reset, tokens, fonts, base, layout, components, utilities, overrides;
```

### Rationale

| Approach | Priority Control | Maintainability |
|----------|------------------|-----------------|
| **Layers** | ⭐⭐⭐ | ⭐⭐⭐ |
| ITCSS | ⭐⭐ | ⭐⭐ |
| BEM | ⭐ | ⭐ |

**Advantages**:
1. Clear priority order
2. No need for `!important`
3. Decoupled component styles

---

## ADR-005: Introduce UnoCSS

### Status

Adopted (2025-05)

### Decision

Introduce **UnoCSS** atomic CSS framework.

### Rationale

| Framework | Performance | Customization |
|-----------|-------------|---------------|
| **UnoCSS** | ⭐⭐⭐ | ⭐⭐⭐ |
| Tailwind | ⭐⭐ | ⭐⭐ |

**Selection Reasons**:
1. Instant on-demand generation - no build overhead
2. Highly customizable - supports custom shortcuts
3. Tailwind-compatible syntax - low learning curve

---

## References

- [Architecture Decision Records](https://adr.github.io/)
- [VitePress Documentation](https://vitepress.dev/)
- [OKLCH Color Space](https://oklch.com/)
- [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [UnoCSS](https://unocss.dev/)
