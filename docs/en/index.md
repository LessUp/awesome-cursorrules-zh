---
layout: home
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'en');
});
</script>

<div class="home-shell">
  <div class="home-header">
    <div class="home-header-left">
      <div class="home-logo">AR</div>
      <div>
        <span class="home-title">Awesome Cursor Rules Atlas</span>
        <span class="home-subtitle">Whitepaper / Architecture Showcase</span>
      </div>
    </div>
    <div class="home-nav">
      <a href="./whitepaper/overview">Whitepaper</a>
      <a href="./architecture/blueprint">Architecture</a>
      <a href="./resources/ecosystem">Resources</a>
      <a href="../zh/">中文</a>
    </div>
  </div>

  <div class="home-intro-row">
    <div class="home-intro">
      <div class="home-kicker">Technical whitepaper / architecture showcase</div>
      <h1>Move Cursor rules from a file catalog to an operational knowledge system.</h1>
      <p>
        This site is no longer a README mirror. It is a structured knowledge surface around rule assets,
        adoption paths, architectural thinking, and curated ecosystem links. Start with intent, move into
        implementation, and end with reusable references you can apply in real teams.
      </p>
      <p>
        Start from the current whitepaper, architecture, playbook, and resource sections directly rather than relying on removed legacy entry pages.
      </p>
    </div>
    <div class="home-stats">
      <span><strong>132+</strong> rule assets</span>
      <span><strong>32+</strong> domains</span>
      <span><strong>Bilingual</strong> docs</span>
      <span><strong>Long-term</strong> design</span>
    </div>
  </div>

## Site positioning

  <div class="feature-map">
    <div class="feature-card">
      <div class="feature-card-title">Whitepaper framing</div>
      <div class="feature-card-desc">
        Explain why the project exists, who it is for, and how rules become engineering assets instead of one-off prompts.
      </div>
      <div class="feature-tags">
        <a href="./whitepaper/overview" class="feature-tag">Overview</a>
        <a href="./whitepaper/adoption-model" class="feature-tag">Adoption model</a>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-card-title">Architecture storytelling</div>
      <div class="feature-card-desc">
        Show how rule assets, docs, publishing, and external links fit together instead of only listing categories.
      </div>
      <div class="feature-tags">
        <a href="./architecture/blueprint" class="feature-tag">Site blueprint</a>
        <a href="./architecture/content-system" class="feature-tag">Content system</a>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-card-title">Operational playbook</div>
      <div class="feature-card-desc">
        Turn individual usage patterns and team governance into repeatable steps that can evolve over time.
      </div>
      <div class="feature-tags">
        <a href="./playbook/adoption-path" class="feature-tag">Adoption path</a>
        <a href="./playbook/operating-model" class="feature-tag">Operating model</a>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-card-title">Resource network</div>
      <div class="feature-card-desc">
        Connect official docs, upstream repositories, prompt engineering references, and adjacent tools.
      </div>
      <div class="feature-tags">
        <a href="./resources/ecosystem" class="feature-tag">Ecosystem</a>
        <a href="./resources/extended-reading" class="feature-tag">Extended reading</a>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-card-title">Rule atlas</div>
      <div class="feature-card-desc">
        Keep category browsing, but place it inside a broader knowledge architecture with guidance and context.
      </div>
      <div class="feature-tags">
        <a href="./rules/" class="feature-tag">All rules</a>
        <a href="./rules/frontend" class="feature-tag">Frontend</a>
        <a href="./rules/backend" class="feature-tag">Backend</a>
      </div>
    </div>
    <div class="feature-card">
      <div class="feature-card-title">Aggressive redesign by default</div>
      <div class="feature-card-desc">
        The site favors long-term clarity and structure over backwards compatibility with the old information layout.
      </div>
      <div class="feature-tags">
        <a href="./changelog" class="feature-tag">Changelog</a>
        <a href="./contributing" class="feature-tag">Contributing</a>
      </div>
    </div>
  </div>

## Adoption path

  <div class="path-grid">
    <div class="path-card">
      <div class="path-index">01</div>
      <h3>Identify project shape</h3>
      <p>Start by understanding whether you are serving a solo app, team repo, monolith, or multi-package workspace.</p>
    </div>
    <div class="path-card">
      <div class="path-index">02</div>
      <h3>Choose baseline rules</h3>
      <p>Use one general rule plus a primary stack rule, then layer specialized domains like security or data only when needed.</p>
    </div>
    <div class="path-card">
      <div class="path-index">03</div>
      <h3>Capture organizational knowledge</h3>
      <p>Move naming conventions, testing discipline, and architecture boundaries into the rule corpus so the guidance compounds.</p>
    </div>
    <div class="path-card">
      <div class="path-index">04</div>
      <h3>Create a review loop</h3>
      <p>Review rule changes through pull requests and release cycles so the rule system evolves with the codebase.</p>
    </div>
  </div>

## Architecture view

  <div class="blueprint-panel">
    <p>The new GitHub Pages experience is designed as a knowledge surface built from four connected layers.</p>

```mermaid
flowchart LR
    A[Rule asset layer<br/>rules/] --> B[Knowledge orchestration<br/>whitepaper / architecture / playbook / resources]
    B --> C[Presentation layer<br/>VitePress navigation + home modules + sidebars]
    C --> D[Publishing layer<br/>GitHub Pages]
    D --> E[External resource layer<br/>Cursor docs / upstream repo / ecosystem links]
```

  </div>

  <div class="matrix-grid">
    <div class="matrix-card">
      <h3>Source of truth</h3>
      <p><code>rules/</code> remains the canonical asset library while the docs site explains and connects those assets.</p>
    </div>
    <div class="matrix-card">
      <h3>Knowledge orchestration</h3>
      <p>Whitepaper pages explain intent, architecture pages explain structure, playbook pages explain action, and resources extend the surface.</p>
    </div>
    <div class="matrix-card">
      <h3>Presentation layer</h3>
      <p>The design follows the lighter kimi-cli-style framework: compact home framing, strong sidebars, shallow navigation.</p>
    </div>
    <div class="matrix-card">
      <h3>Feedback loop</h3>
      <p>Changelog, contributing guidance, and templates feed learnings back into the rule asset layer for continuous growth.</p>
    </div>
  </div>

## Curated resources

  <div class="resource-grid">
    <div class="resource-card">
      <h3>Official and upstream</h3>
      <ul>
        <li><a href="https://cursor.sh/" target="_blank" rel="noreferrer">Cursor official site</a></li>
        <li><a href="https://docs.cursor.com/" target="_blank" rel="noreferrer">Cursor Docs</a></li>
        <li><a href="https://github.com/PatrickJS/awesome-cursorrules" target="_blank" rel="noreferrer">Original Awesome Cursor Rules repo</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <h3>Internal key entry points</h3>
      <ul>
        <li><a href="./whitepaper/overview">Project overview</a></li>
        <li><a href="./architecture/blueprint">Site blueprint</a></li>
        <li><a href="./playbook/adoption-path">Adoption path</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <h3>Further reading</h3>
      <ul>
        <li><a href="./resources/ecosystem">Ecosystem index</a></li>
        <li><a href="./resources/extended-reading">Prompt and documentation references</a></li>
        <li><a href="./rules/">Rule atlas</a></li>
      </ul>
    </div>
  </div>

  <div class="quick-start">
    <div class="quick-start-title">Suggested first move</div>
    <div class="quick-start-content">
      Read the <a href="./whitepaper/overview">overview</a> and <a href="./playbook/adoption-path">adoption path</a>,
      then move into the <a href="./rules/">rule atlas</a>. If you are responsible for platform or team enablement,
      continue with the <a href="./architecture/blueprint">architecture blueprint</a> and the
      <a href="./resources/ecosystem">ecosystem index</a>.
    </div>
  </div>
</div>
