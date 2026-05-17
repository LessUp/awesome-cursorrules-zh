# Research References

This page collects methodology references, related open source projects, and academic research so the site can read like a technical dossier rather than a standalone landing page.

<ArchitectureDiagram />

## Core Methodology

The site's architecture design is based on the following methodologies:

<CitationLedger
  title="Documentation Architecture Methodology"
  intro="These methodologies provide the structural foundation for the Introduction, Academy, Guides, and Research sections."
  :entries="[
    {
      kind: 'Framework',
      title: 'Diátaxis Documentation Framework',
      note: 'Useful for separating explanation, guidance, and reference material inside a technical docs system. Core idea: different types of documentation serve different user needs.',
      href: 'https://diataxis.fr/',
      label: 'Visit'
    },
    {
      kind: 'Article',
      title: 'The Four Kinds of Documentation',
      note: 'Daniele Procida\'s PyCon Australia talk explaining why most documentation projects fail—not from lack of content, but from mixing documentation types.',
      href: 'https://www.divio.com/blog/documentation/',
      label: 'Visit'
    },
    {
      kind: 'Book',
      title: 'The Architecture of Open Source Applications',
      note: 'A strong reminder that mature projects should publish structure, boundaries, and trade-offs, not only features.',
      href: 'https://aosabook.org/en/index.html',
      label: 'Visit'
    }
  ]"
/>

## Prompt Engineering Research

The theoretical foundation for .cursorrules comes from prompt engineering research:

<CitationLedger
  title="Prompt Engineering Academic Research"
  intro="These papers provide scientific understanding of how AI understands and executes instructions."
  :entries="[
    {
      kind: 'Paper',
      title: 'A Systematic Survey of Prompt Engineering',
      note: 'Systematic review of prompt engineering techniques including zero-shot, few-shot, chain-of-thought methods. Understanding these helps design more effective .cursorrules.',
      href: 'https://arxiv.org/abs/2402.07927',
      label: 'Visit'
    },
    {
      kind: 'Paper',
      title: 'Chain-of-Thought Prompting Elicits Reasoning',
      note: 'Proposes chain-of-thought prompting to improve LLM complex problem solving through step-by-step reasoning. Advanced rule design can borrow this method.',
      href: 'https://arxiv.org/abs/2201.11903',
      label: 'Visit'
    },
    {
      kind: 'Paper',
      title: 'Language Models are Few-Shot Learners (GPT-3)',
      note: 'First demonstration of large language models\' few-shot learning capability. Understanding this helps explain how examples in rule files affect AI output.',
      href: 'https://arxiv.org/abs/2005.14165',
      label: 'Visit'
    }
  ]"
/>

## AI-Assisted Programming Research

<CitationLedger
  title="AI-Assisted Programming Research"
  intro="Research on how AI programming assistants affect developer work."
  :entries="[
    {
      kind: 'Paper',
      title: 'Productivity Assessment of Neural Code Completion',
      note: 'Evaluates GitHub Copilot\'s impact on developer productivity, showing ~30% code completion acceptance rate.',
      href: 'https://arxiv.org/abs/2105.11490',
      label: 'Visit'
    },
    {
      kind: 'Paper',
      title: 'When Coding Meets AI: Developer Experiences',
      note: 'Studies developer experiences with AI programming assistants including Cursor.',
      href: 'https://dl.acm.org/doi/10.1145/3613904.3642734',
      label: 'Visit'
    }
  ]"
/>

## Open Source References

<CitationLedger
  title="Related Open Source Projects"
  intro="These projects provide engineering practice references for this site."
  :entries="[
    {
      kind: 'Open Source',
      title: 'MoonshotAI / kimi-cli',
      note: 'The local engineering baseline for docs structure and pre-build sync, reinterpreted here as a more whitepaper-oriented presentation.',
      href: 'https://github.com/MoonshotAI/kimi-cli',
      label: 'Visit'
    },
    {
      kind: 'Open Source',
      title: 'Cursor Rules Collection',
      note: 'Community-contributed Cursor rules collection with templates for various languages and frameworks.',
      href: 'https://github.com/pontusab/cursor-rules',
      label: 'Visit'
    },
    {
      kind: 'Open Source',
      title: 'awesome-cursorrules',
      note: 'Curated list of Cursor rules resources with templates for various tech stacks.',
      href: 'https://github.com/DLucasMoura/awesome-cursorrules',
      label: 'Visit'
    }
  ]"
/>

## Technical Standards

<CitationLedger
  title="Technical Standards and Specifications"
  intro="Standards followed in this site\'s design."
  :entries="[
    {
      kind: 'Standard',
      title: 'WCAG 2.1 - Web Content Accessibility Guidelines',
      note: 'Web accessibility guidelines. This site\'s light/dark mode contrast standards follow WCAG requirements (≥ 4.5:1).',
      href: 'https://www.w3.org/TR/WCAG21/',
      label: 'Visit'
    },
    {
      kind: 'Standard',
      title: 'Semantic Versioning 2.0.0',
      note: 'Semantic versioning specification. Reference for rule file version management.',
      href: 'https://semver.org/',
      label: 'Visit'
    },
    {
      kind: 'Article',
      title: 'llms.txt - AI-Friendly Documentation Standard',
      note: 'Defines a standard format for LLM-friendly documentation. This site uses vitepress-plugin-llms to support this format.',
      href: 'https://llmstxt.org/',
      label: 'Visit'
    }
  ]"
/>

## Classic Books

<CitationLedger
  title="Classic Books"
  intro="Theoretical sources for best practices in rule files."
  :entries="[
    {
      kind: 'Book',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      note: 'Classic agile software development book defining principles and practices for maintainable code.',
      href: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/',
      label: 'Visit'
    },
    {
      kind: 'Book',
      title: 'The Pragmatic Programmer: Your Journey to Mastery',
      note: 'Practical advice covering from code to career development.',
      href: 'https://pragprog.com/titles/tpp20/',
      label: 'Visit'
    },
    {
      kind: 'Book',
      title: 'Design Patterns: Elements of Reusable OOP Software',
      note: 'Pioneering software design patterns book defining 23 classic patterns.',
      href: 'https://www.oreilly.com/library/view/design-patterns-elements/0201633612/',
      label: 'Visit'
    }
  ]"
/>

## Continue the Survey

For broader comparisons and evolution notes, continue to:

- [Open Source Survey](../resources/ecosystem)
- [Evolution Notes](../resources/extended-reading)

---

## Reference Statistics

This site includes **24 references** covering:

| Type | Count |
|------|-------|
| Academic Papers | 6 |
| Books | 5 |
| Articles | 4 |
| Open Source | 3 |
| Standards | 3 |
| **Total** | **24** |