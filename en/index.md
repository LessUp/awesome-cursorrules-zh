---
layout: home

hero:
  name: Awesome Cursor Rules
  text: English
  tagline: A curated collection of Cursor AI coding rules<br>Focused on navigation, usage paths, and project governance
  image:
    src: /logo.svg
    alt: Awesome Cursor Rules
  actions:
    - theme: brand
      text: Quick Start
      link: /en/getting-started
    - theme: alt
      text: Browse Rules
      link: /en/rules/
    - theme: alt
      text: GitHub
      link: https://github.com/LessUp/awesome-cursorrules-zh

features:
  - icon: 🎯
    title: Rule-first navigation
    details: Start with the right rule instead of scanning the whole repository
  - icon: 📂
    title: Clear paths
    details: Move from the home page to a category and then to a single rule without friction
  - icon: 🚀
    title: Ready to apply
    details: Copy the selected rule into your project root when it fits your stack
  - icon: 🌍
    title: Bilingual docs
    details: Chinese and English content stay aligned for easier review and comparison
  - icon: 💡
    title: Stable guidance
    details: Use readable rule text to express team preferences and coding expectations
  - icon: 🤖
    title: Governance-aware
    details: Keep rules, specs, and contribution flow pointing at the same source of truth
---

## What you can do here

- Browse the rule library by technology domain and find a suitable `.cursorrules` file quickly
- Check the intended use case, stack, and maintenance boundary for each rule
- Switch between Chinese and English pages to compare the same content
- Use the site as a lightweight entry point instead of searching the repository by hand

## How to choose a rule

- Start with the project stack and enter the matching category
- Prefer rules that are specific enough to apply directly
- If your project spans multiple layers, begin with the most important one
- Read the rule notes before copying anything into your project root

## Recommended workflow

- Open the homepage and jump to the relevant category
- Read the rule description and confirm it matches your goal
- Copy `.cursorrules` into the project root as a project-level constraint
- Adjust the content only when your team needs a different local convention
- Revisit the site and specs whenever the project scope changes

## Quality and governance

- `zh/` and `en/` are the public content sources, so the site avoids duplicate pages
- `specs/` carries project governance and `docs/` stays focused on non-published content
- Validation, build, and contribution flows stay lightweight and trustworthy
- Before submitting changes, check them against the current maintenance boundary and specs
