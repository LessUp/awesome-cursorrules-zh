---
layout: home
hero:
  name: Awesome Cursor Rules
  text: Curated rules plus practical engineering knowledge
  tagline: Beyond a static list of files. This site helps you pick, combine, validate, and evolve Cursor rules for real projects and teams.
  actions:
    - theme: brand
      text: Start in 3 minutes
      link: /en/getting-started
    - theme: alt
      text: Browse all rules
      link: /en/rules/
    - theme: alt
      text: 中文
      link: /zh/
features:
  - title: Fast stack mapping
    details: Navigate 132 rules across 32 categories and find relevant guidance without manual digging.
    icon: 🎯
  - title: Team-ready rollout
    details: Apply root-level and module-level rules to keep monorepos and multi-service projects consistent.
    icon: 🧩
  - title: Reusable knowledge assets
    details: Start from existing rules, then iterate with your own architecture and collaboration constraints.
    icon: 🚀
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'en');
});
</script>

<div class="landing-shell">

## Core metrics

<div class="landing-kpis">
  <div class="kpi-card">
    <div class="kpi-value">132+</div>
    <div class="kpi-label">Rule files</div>
    <p>Production-oriented coverage from mainstream stacks to niche technical domains.</p>
  </div>
  <div class="kpi-card">
    <div class="kpi-value">32</div>
    <div class="kpi-label">Categories</div>
    <p>Clear taxonomy for frontend, backend, mobile, AI, DevOps, security, and beyond.</p>
  </div>
  <div class="kpi-card">
    <div class="kpi-value">2</div>
    <div class="kpi-label">Locale sites</div>
    <p>Bilingual docs for cross-language teams and smoother collaboration workflows.</p>
  </div>
  <div class="kpi-card">
    <div class="kpi-value">1</div>
    <div class="kpi-label">Operational loop</div>
    <p>Choose → apply → validate → evolve, so rules become a repeatable team capability.</p>
  </div>
</div>

## Rule rollout blueprint

<div class="diagram-panel">
  <p>Use this path to turn “rule collection” into stable day-to-day output quality.</p>

```mermaid
flowchart LR
    A[Identify project shape<br/>single app / monorepo / team workflow] --> B[Pick base rules<br/>general + primary stack]
    B --> C[Add domain constraints<br/>DevOps / Security / Data]
    C --> D[Write .cursorrules<br/>root or module level]
    D --> E[Validate in Cursor<br/>naming / architecture / tests]
    E --> F[Version and iterate<br/>PR review + periodic updates]
```

</div>

## High-value rule combinations

<table class="combo-table">
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Recommended combo</th>
      <th>Why it works</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>React full-stack web</td>
      <td><code>nextjs-typescript</code> + <code>fastapi-best-practices</code></td>
      <td>Aligns frontend typing and backend API discipline with fewer integration mismatches.</td>
    </tr>
    <tr>
      <td>Vue business apps</td>
      <td><code>nuxt3</code> + <code>code-guidelines</code></td>
      <td>Balances framework conventions with cross-team readability and review consistency.</td>
    </tr>
    <tr>
      <td>Cross-platform mobile</td>
      <td><code>react-native-expo</code> / <code>flutter-app-expert</code></td>
      <td>Improves component structure and state patterns without heavy custom prompting.</td>
    </tr>
    <tr>
      <td>AI product engineering</td>
      <td><code>mlops</code> + <code>python-data-processing</code></td>
      <td>Bridges experimentation and production concerns in one coherent rule context.</td>
    </tr>
    <tr>
      <td>Cloud-native delivery</td>
      <td><code>docker-containerization</code> + <code>terraform-iac</code> + <code>ci-cd-pipelines</code></td>
      <td>Connects development, infrastructure, and delivery automation into one pipeline.</td>
    </tr>
    <tr>
      <td>Security-sensitive systems</td>
      <td><code>zero-trust</code> + <code>smart-contract-security</code></td>
      <td>Moves security constraints earlier into implementation instead of late-stage patches.</td>
    </tr>
  </tbody>
</table>

<div class="chip-row">
  <a class="chip-link" href="/en/rules/frontend">Frontend</a>
  <a class="chip-link" href="/en/rules/backend">Backend</a>
  <a class="chip-link" href="/en/rules/mobile">Mobile</a>
  <a class="chip-link" href="/en/rules/ai">AI</a>
  <a class="chip-link" href="/en/rules/devops">DevOps</a>
  <a class="chip-link" href="/en/rules/security">Security</a>
  <a class="chip-link" href="/en/rules/data-science">Data Science</a>
  <a class="chip-link" href="/en/rules/blockchain">Blockchain</a>
</div>

## Three upgrade paths

<div class="pathway-grid">
  <div class="pathway-card">
    <h3>Path A: solo project acceleration</h3>
    <p>Start with one primary rule, stabilize output quality, then add project-specific constraints incrementally.</p>
    <a href="/en/getting-started">Open quick start →</a>
  </div>
  <div class="pathway-card">
    <h3>Path B: team consistency</h3>
    <p>Version <code>.cursorrules</code> in Git and review updates in PRs to reduce style drift across contributors.</p>
    <a href="/en/best-practices">Open best practices →</a>
  </div>
  <div class="pathway-card">
    <h3>Path C: internal knowledge base</h3>
    <p>Convert architecture decisions and lessons learned into reusable rule templates for onboarding and scaling.</p>
    <a href="/en/guides/rule-template">Open template guide →</a>
  </div>
</div>

## Practical knowledge blocks

<div class="knowledge-grid">
  <div class="knowledge-card">
    <h3>Constrain before generation</h3>
    <p>Define naming, layering, and API boundaries up front to avoid expensive rewrite cycles later.</p>
    <a class="knowledge-link" href="/en/best-practices">Read practice guide →</a>
  </div>
  <div class="knowledge-card">
    <h3>Use layered rules</h3>
    <p>Keep global conventions at root and domain-specific logic in subdirectories for better signal quality.</p>
    <a class="knowledge-link" href="/en/getting-started">See setup method →</a>
  </div>
  <div class="knowledge-card">
    <h3>Examples beat adjectives</h3>
    <p>“Write clean code” is weak guidance. Include positive and negative examples with measurable constraints.</p>
    <a class="knowledge-link" href="/en/guides/rule-template">Open templates →</a>
  </div>
  <div class="knowledge-card">
    <h3>Split conflicting intent</h3>
    <p>If one rule tries to cover frontend and backend simultaneously, split it to avoid unstable suggestions.</p>
    <a class="knowledge-link" href="/en/troubleshooting">Open troubleshooting →</a>
  </div>
  <div class="knowledge-card">
    <h3>Treat rules as product assets</h3>
    <p>Review generated output after each release cycle and refine outdated constraints continuously.</p>
    <a class="knowledge-link" href="/en/changelog">Open changelog →</a>
  </div>
  <div class="knowledge-card">
    <h3>Standardize onboarding</h3>
    <p>Reading rules before coding helps new members align with architecture and style much faster.</p>
    <a class="knowledge-link" href="/en/contributing">Open contributing guide →</a>
  </div>
</div>

## Quick diagnosis table

<table class="quick-fix-table">
  <thead>
    <tr>
      <th>Symptom</th>
      <th>First action</th>
      <th>Priority</th>
      <th>Entry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rules seem ignored</td>
      <td>Confirm <code>.cursorrules</code> is in project root and restart Cursor.</td>
      <td><span class="status-ok">High</span></td>
      <td><a href="/en/faq">FAQ</a></td>
    </tr>
    <tr>
      <td>Inconsistent code style output</td>
      <td>Check for conflicting merged rules and split by module if needed.</td>
      <td><span class="status-ok">High</span></td>
      <td><a href="/en/troubleshooting">Troubleshooting</a></td>
    </tr>
    <tr>
      <td>Team output diverges</td>
      <td>Version rules in repository and review changes in PR workflow.</td>
      <td><span class="status-ok">Recommended</span></td>
      <td><a href="/en/contributing">Collaboration</a></td>
    </tr>
    <tr>
      <td>Need internal custom rules</td>
      <td>Start from templates and run small pilot validation before broad rollout.</td>
      <td><span class="status-warn">Pilot first</span></td>
      <td><a href="/en/guides/rule-template">Template guide</a></td>
    </tr>
  </tbody>
</table>

<div class="cta-panel">
  <h3>Ready to apply rules in production workflows?</h3>
  <p>Pick your main stack, apply one rule, run a real coding cycle, then iterate with project constraints. In most teams, quality becomes noticeably more stable after one or two feedback loops.</p>
  <div class="cta-actions">
    <a class="cta-button primary" href="/en/getting-started">Start now</a>
    <a class="cta-button" href="/en/rules/">Open rules map</a>
    <a class="cta-button" href="/en/guides/rule-template">Build team template</a>
    <a class="cta-button" href="https://github.com/LessUp/awesome-cursorrules-zh">Open GitHub</a>
  </div>
</div>

</div>
