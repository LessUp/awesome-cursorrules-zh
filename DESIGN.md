# Design System Direction

## Scene
A staff engineer is reviewing the project in a bright browser window during daytime, scanning for architectural maturity, evidence quality, and publishing rigor before deciding whether the repository is exceptional.

## Color Strategy
Committed light-first palette with ink-tinted neutrals, cobalt as the structural brand color, amber for citations, and teal for system signals. Dark mode mirrors the same hierarchy with deep indigo paper tones instead of pure black.

## Color Tokens
- Base paper: warm indigo-tinted neutrals with subtle archival warmth
- Structural accent: cobalt
- Evidence accent: amber
- System accent: teal
- Use OKLCH tokens for surfaces, text, borders, and figure marks

## Typography
- One committed sans stack for interface and long-form reading
- Strong size and weight contrast
- Large display headlines with tight tracking
- Body width capped for whitepaper readability

## Layout
- Prefer editorial rails, split canvases, and evidence strips over uniform card grids
- Use cards only for actual grouped evidence, not as the default layout primitive
- Keep asymmetric pacing on the homepage and disciplined document rhythm inside narrative pages

## Motion
- Minimal motion
- Use opacity and transform only
- No ornamental animation on diagrams

## Accessibility
- All figure text and strokes must remain readable in both themes
- Avoid low-contrast tinted text inside emphasized panels
- SVG assets should inherit `currentColor` or CSS variables instead of hardcoded black or white
