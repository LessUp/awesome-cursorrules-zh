---
layout: home
---

<script setup>
import { onMounted } from 'vue';
import { siteFacts } from '../.vitepress/site/facts';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'en');
});
</script>

<div class="home-shell">
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;">
    <SignalPill label="Technical whitepaper" />
    <SignalPill label="Architecture showcase" />
    <SignalPill label="Research references" />
  </div>

  <WhitepaperHero
    kicker="Technical Whitepaper / Architecture Showcase / Research References"
    title="Make Cursor rules read like a reviewed engineering academy"
    summary="This surface leads with thesis, system design, learning paths, and research references so the rules index becomes evidence instead of the only story."
    :indicators="[
      { label: 'Rule assets', value: `${siteFacts.ruleCount}+` },
      { label: 'Domains', value: `${siteFacts.domainCount}+` },
      { label: 'Locales', value: `${siteFacts.localeCount}` }
    ]"
    primary-href="./introduction/mission"
    primary-label="Read the mission"
    secondary-href="./architecture/system-overview"
    secondary-label="View the system"
  />

  <NarrativeRail
    title="A technical whitepaper needs a deliberate reading order"
    intro="Start with mission and reader framing, continue into academy and architecture, then validate the case through the rules index and research references."
    :stages="[
      {
        index: '01',
        title: 'Introduction',
        body: 'Use the mission and reader map to understand why the project is positioned as a knowledge asset, not a category index.',
        href: './introduction/reader-map',
        label: 'Open the reader map'
      },
      {
        index: '02',
        title: 'Academy',
        body: 'Role-based learning paths turn the site into a guided curriculum for reviewers, architects, and maintainers.',
        href: './academy/learning-path',
        label: 'Enter the academy'
      },
      {
        index: '03',
        title: 'Research',
        body: 'Rules stay in the evidence layer while research references explain the documentation and architecture choices behind the presentation.',
        href: './research/references',
        label: 'Browse references'
      }
    ]"
  />

  <SystemShowcase
    title="The implementation changed, not only the copy"
    summary="The docs layer now syncs repository facts before build, exposes a stronger IA, and uses theme-aware figures so light and dark mode stay equally legible."
    :nodes="[
      {
        eyebrow: 'Source Assets',
        title: 'Rules remain canonical',
        detail: 'Repository facts are derived from the rule corpus instead of being hand-maintained in the homepage copy.'
      },
      {
        eyebrow: 'Narrative Shell',
        title: 'Introduction, academy, architecture, guides',
        detail: 'The new IA helps senior readers build a mental model before they inspect individual rule pages.'
      },
      {
        eyebrow: 'Publishing Layer',
        title: 'VitePress plus generated site facts',
        detail: 'The build now follows a kimi-cli-like sync step, but the shell is rewritten for a more editorial and research-driven surface.'
      },
      {
        eyebrow: 'Evidence Layer',
        title: 'Rules index and research references',
        detail: 'The evidence layer validates the thesis instead of competing with it for the first screen.'
      }
    ]"
  />

  <CurriculumDeck
    title="Academy paths map the site to real reviewer roles"
    intro="The English shell stays concise, but it still makes the reading logic explicit."
    :tracks="[
      {
        name: 'Interviewer path',
        audience: 'Fast pass',
        outcome: 'Judge rigor, structure, and depth in a few screens.',
        steps: ['Read the mission', 'Inspect the system overview', 'Use research references and the rules index as proof']
      },
      {
        name: 'Architect path',
        audience: 'Architecture pass',
        outcome: 'See how assets, narrative pages, theme layers, and publication reinforce each other.',
        steps: ['Review the system overview', 'Open the academy path', 'Check composition patterns and content system pages']
      },
      {
        name: 'Maintainer path',
        audience: 'Maintainer pass',
        outcome: 'Understand how to update assets, narrative pages, facts, and bilingual structure together.',
        steps: ['Open the maintainer curriculum', 'Follow the team onboarding guide', 'Use research references to shape later iterations']
      }
    ]"
  />

  <CitationLedger
    title="Research references make the project read like a dossier"
    intro="These references justify the information architecture and publishing posture, rather than acting as decorative outbound links."
    :entries="[
      {
        kind: 'Framework',
        title: 'Diátaxis Documentation Framework',
        note: 'A useful reference for separating explanation, guidance, and reference material inside a technical docs system.',
        href: 'https://diataxis.fr/',
        label: 'Open framework'
      },
      {
        kind: 'Open Source',
        title: 'MoonshotAI / kimi-cli',
        note: 'The local baseline for docs engineering patterns, adapted here into a more whitepaper-like and visually committed shell.',
        href: 'https://github.com/MoonshotAI/kimi-cli',
        label: 'Open repository'
      },
      {
        kind: 'Book',
        title: 'The Architecture of Open Source Applications',
        note: 'A reminder that mature projects should publish not only capabilities, but also structure, trade-offs, and implementation boundaries.',
        href: 'https://aosabook.org/en/index.html',
        label: 'Open book'
      }
    ]"
  />
</div>
