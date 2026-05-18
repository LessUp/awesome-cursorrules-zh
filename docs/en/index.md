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
    <SignalPill label="System architecture whitepaper" />
    <SignalPill label="Rule orchestration algorithm" />
    <SignalPill label="Performance and evidence" />
    <SignalPill label="References and evolution" />
  </div>

  <WhitepaperHero
    kicker="System Architecture Whitepaper / Rule Orchestration Algorithm / Evidence Dossier"
    title="Turn Cursor Rules into a reviewable engineering research portal"
    summary="The homepage now behaves like the project thesis: explain the system first, make the orchestration algorithm legible, and back every claim with performance, evidence, and references."
    :indicators="[
      { label: 'Rule assets', value: `${siteFacts.ruleCount}+` },
      { label: 'Domains', value: `${siteFacts.domainCount}+` },
      { label: 'High-density domains', value: `${siteFacts.coverageBuckets[0]?.count ?? 0}` }
    ]"
    primary-href="./architecture/system-overview"
    primary-label="Open architecture"
    secondary-href="./algorithms/overview"
    secondary-label="Open algorithms"
  />

  <SignalGrid
    eyebrow="Thesis Signals"
    title="A system architecture whitepaper needs structure before persuasion"
    intro="The landing page answers four reviewer questions fast: what the repository organizes, how the publication system works, how the rule orchestration algorithm behaves, and why the evidence is credible."
    :items="[
      {
        label: 'Rule assets',
        value: `${siteFacts.ruleCount}+`,
        detail: 'The repository remains the single source of truth for every metric and figure.'
      },
      {
        label: 'Knowledge coverage',
        value: `${siteFacts.domainCount}+`,
        detail: 'Dense and long-tail domains together frame the corpus as a knowledge system.'
      },
      {
        label: 'Phases',
        value: `${siteFacts.timelineSignals.length}`,
        detail: 'Curation, orchestration, and publication stay explicit instead of implied.'
      }
    ]"
  />

  <TopologyMap
    eyebrow="System Topology"
    title="The system architecture whitepaper translates repository facts into a publication system"
    summary="Rather than relying on copy alone, the site is organized as asset, snapshot, IA, presentation, and publishing layers that can be reviewed independently."
    :layers="[
      { name: 'Asset Layer', detail: 'rules/ stays canonical so the shell cannot drift from the corpus.' },
      { name: 'Snapshot Layer', detail: 'sync-site-facts.mjs turns repository state into reusable structured data.' },
      { name: 'IA Layer', detail: 'Introduction, architecture, algorithms, performance, references, and evidence form the reading path.' },
      { name: 'Presentation Layer', detail: 'Theme components convert metrics, topology, pipeline, and dossiers into one visual language.' },
      { name: 'Publishing Layer', detail: 'VitePress and GitHub Pages publish the final whitepaper surface.' }
    ]"
  />

  <PipelineCanvas
    eyebrow="Method"
    title="The rule orchestration algorithm is a documented pipeline, not a black box"
    summary="The algorithms chapter explains how the project turns a flat rules corpus into categories, composition patterns, upgrade paths, and publication-ready evidence."
    :stages="[
      { name: 'Discover', detail: 'Scan the corpus and normalize the asset set.' },
      { name: 'Classify', detail: 'Map rules into domains, buckets, and long-tail signals.' },
      { name: 'Compose', detail: 'Translate rule clusters into composition patterns and review paths.' },
      { name: 'Publish', detail: 'Expose architecture, performance, and references as an evidence surface.' }
    ]"
  />

  <SignalGrid
    eyebrow="Performance & Evidence"
    title="Performance and evidence are first-class chapters, not footnotes"
    intro="Performance here includes build stability, navigation efficiency, maintainability, figure reliability, and the density of useful signals available to advanced readers."
    :items="[
      {
        label: 'High-density domains',
        value: `${siteFacts.coverageBuckets[0]?.count ?? 0}`,
        detail: 'Dense domains provide fast, strong signals for reviewers.'
      },
      {
        label: 'Mid-density domains',
        value: `${siteFacts.coverageBuckets[1]?.count ?? 0}`,
        detail: 'The middle layer proves the corpus scales beyond a few headline categories.'
      },
      {
        label: 'Long-tail domains',
        value: `${siteFacts.coverageBuckets[2]?.count ?? 0}`,
        detail: 'The long tail strengthens the site as a research-grade reference surface.'
      }
    ]"
  />

  <DossierMatrix
    eyebrow="References & Evolution"
    title="References and evolution raise the project above a category index"
    intro="Instead of decorative links, the dossier maps which framework, project, or reference shaped each layer of the publication system."
    :entries="[
      {
        subject: 'Documentation Method',
        source: 'Diátaxis',
        adopted: 'Separates explanation, guidance, and reference so the shell stays legible.',
        advance: 'Refines that split into introduction, architecture, algorithms, performance, references, and evidence.'
      },
      {
        subject: 'Docs Engineering',
        source: 'MoonshotAI / kimi-cli',
        adopted: 'Borrowed the build-time docs snapshot idea.',
        advance: 'Expanded the snapshot into a whitepaper-ready data model for figures and dossiers.'
      },
      {
        subject: 'Open Source Framing',
        source: 'AOSA + peer repositories',
        adopted: 'Treats architecture and boundaries as publishable project assets.',
        advance: 'Turns the rules index into an evidence layer supported by references and evolution notes.'
      }
    ]"
  />
</div>
