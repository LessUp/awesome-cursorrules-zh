---
layout: home
---

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('preferred-locale', 'en');
});
</script>

<ExecutiveHero
  kicker="Technical Whitepaper / Architecture Showcase"
  title="Turn Cursor rules into an organizational knowledge system"
  summary="A Chinese-first site for tech leads and architects, with English following the same IA."
  primary-href="./whitepaper/decision-brief"
  primary-label="Read the decision brief"
  secondary-href="./architecture/blueprint"
  secondary-label="View the architecture"
/>

<MetricBand
  :items="[
    {
      label: 'Rule assets',
      value: '132+',
      detail: 'The rules stay intact, but the homepage now frames them as evidence rather than the whole story.'
    },
    {
      label: 'Coverage',
      value: '32+',
      detail: 'Frontend, backend, data, platform, and governance examples remain available for follow-up reading.'
    },
    {
      label: 'Reading posture',
      value: 'Tech Lead First',
      detail: 'English gives tech leads a concise shell while the fuller narrative remains Chinese-first.'
    }
  ]"
/>

<DecisionMatrix
  title="Make the value, structure, and rollout call before browsing rules"
  intro="This homepage is intentionally thin. It helps tech leads judge whether the library should be treated as an engineering asset before moving into the rules evidence library."
  :options="[
    {
      fit: 'Value call',
      title: 'Treat rules as reusable knowledge',
      summary: 'If rules stay as one-off prompts, teams cannot review, reuse, or compound what they learn.',
      considerations: 'The shell therefore leads with organizational value instead of a category atlas.'
    },
    {
      fit: 'Structure call',
      title: 'Understand the system boundary',
      summary: 'Architects need to see how rules, narrative pages, and publishing layers reinforce each other.',
      considerations: 'The English pages mirror the Chinese IA without duplicating every paragraph.'
    },
    {
      fit: 'Execution call',
      title: 'Use the evidence library after alignment',
      summary: 'Once value and structure are clear, use the rules area to validate combinations, examples, and upgrade signals.',
      considerations: 'That keeps the evidence library in a supporting role instead of making it the homepage default.'
    }
  ]"
/>

<ArchitectureSnapshot
  title="Four layers connect the shell to the evidence"
  summary="The English homepage stays brief, but it still shows how rule assets, narrative pages, publishing, and evidence reinforce each other."
  :layers="[
    {
      label: 'Rule asset layer · rules/',
      detail: 'The canonical corpus of rule assets stays in the repository.'
    },
    {
      label: 'Narrative layer · whitepaper / architecture / playbook',
      detail: 'These pages explain value, structure, and rollout before category browsing begins.'
    },
    {
      label: 'Presentation layer · VitePress / GitHub Pages',
      detail: 'Shared navigation, sidebars, and homepage components create the executive shell.'
    },
    {
      label: 'Evidence layer · rules pages / ecosystem',
      detail: 'Rule samples and references validate the decision after the shell frames it.'
    }
  ]"
/>

<EvidenceBand
  title="The rules section is the evidence library, not the opening pitch"
  intro="Read the brief, confirm the architecture, then use rules and resources as supporting proof."
  :items="[
    {
      value: 'Decision-first',
      label: 'Reading order',
      detail: 'Start with the brief and overview before sampling rule pages.'
    },
    {
      value: 'Role-based',
      label: 'Adoption paths',
      detail: 'Tech leads, architects, and platform teams can enter through different paths without breaking the shared IA.'
    },
    {
      value: 'Evidence library',
      label: 'Rules and references',
      detail: 'Composition patterns, rule categories, and ecosystem links help validate the decision after the shell does its job.'
    }
  ]"
/>

<SectionCallout
  title="Suggested reading order"
  body="Start with the decision brief, continue through the overview and site blueprint, then use adoption paths, role paths, and the rules evidence library as follow-through."
  href="./whitepaper/decision-brief"
  label="Start with the brief"
/>
