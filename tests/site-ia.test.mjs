import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function exists(relativePath) {
  return fs.existsSync(path.join(repoRoot, relativePath));
}

test('docs package syncs generated site facts before dev and build, aligned with the kimi-cli docs workflow', () => {
  const docsPackage = read('docs/package.json');
  const factsFile = read('docs/.vitepress/site/facts.ts');

  assert.match(docsPackage, /"sync": "node scripts\/sync-site-facts\.mjs"/);
  assert.match(docsPackage, /"dev": "npm run sync && vitepress dev"/);
  assert.match(docsPackage, /"build": "npm run sync && vitepress build"/);
  assert.equal(exists('docs/scripts/sync-site-facts.mjs'), true, 'docs/scripts/sync-site-facts.mjs should exist');
  assert.equal(exists('docs/.vitepress/site/facts.ts'), true, 'docs/.vitepress/site/facts.ts should exist');
  assert.doesNotMatch(factsFile, /generatedAt/);
});

test('config keeps locale redirect and consumes both atlas navigation and generated site facts', () => {
  const config = read('docs/.vitepress/config.ts');

  assert.match(config, /import\s+\{\s*siteFacts\s*\}\s+from '\.\/site\/facts'/);
  assert.match(config, /import\s+\{\s*zhNav,\s*enNav,\s*zhSidebar,\s*enSidebar\s*\}\s+from '\.\/site\/atlas'/);
  assert.match(config, /nav:\s*zhNav/);
  assert.match(config, /sidebar:\s*zhSidebar/);
  assert.match(config, /nav:\s*enNav/);
  assert.match(config, /sidebar:\s*enSidebar/);
  assert.match(config, /siteFacts\.ruleCount/);
  assert.match(config, /siteFacts\.domainCount/);
  assert.match(config, /edit\/master\/docs/);
  assert.match(config, /const basePath = base === '\/' \? '' : base.replace\(\/\\\/\$\/, ''\)/);
  assert.match(config, /location\.replace\(\(basePath \|\| ''\) \+ \(locale\.startsWith\('zh'\) \? '\/zh\/' : '\/en\/'\)\)/);
});

test('shared atlas defines the new academy-whitepaper IA for both locales', () => {
  const atlas = read('docs/.vitepress/site/atlas.ts');

  for (const label of ['项目导读', '学院路径', '架构设计', '实施指南', '规则索引', '研究引用']) {
    assert.match(atlas, new RegExp(`text: '${label}'`));
  }

  for (const label of ['Introduction', 'Academy', 'Architecture', 'Guides', 'Rules Index', 'Research']) {
    assert.match(atlas, new RegExp(`text: '${label}'`));
  }

  for (const route of [
    '/zh/introduction/mission',
    '/zh/academy/learning-path',
    '/zh/architecture/system-overview',
    '/zh/guides/team-onboarding',
    '/zh/rules/',
    '/zh/research/references',
    '/en/introduction/mission',
    '/en/academy/learning-path',
    '/en/architecture/system-overview',
    '/en/guides/team-onboarding',
    '/en/rules/',
    '/en/research/references',
  ]) {
    assert.match(atlas, new RegExp(route.replaceAll('/', '\\/')));
  }

  for (const legacy of ['项目主张', '白皮书', '采用路径', '资源网络', 'Project Thesis', 'Whitepaper', 'Adoption Paths', 'Resource Network']) {
    assert.doesNotMatch(atlas, new RegExp(`text: '${legacy}'`));
  }
});

test('new Chinese IA entry pages exist', () => {
  for (const file of [
    'docs/zh/introduction/mission.md',
    'docs/zh/introduction/reader-map.md',
    'docs/zh/academy/learning-path.md',
    'docs/zh/academy/maintainer-curriculum.md',
    'docs/zh/architecture/system-overview.md',
    'docs/zh/guides/team-onboarding.md',
    'docs/zh/research/references.md',
    'docs/zh/rules/composition-patterns.md',
  ]) {
    assert.equal(exists(file), true, `${file} should exist`);
  }
});

test('zh rules landing page frames the rules index as evidence inside the new reading order', () => {
  const rulesIndex = read('docs/zh/rules/index.md');

  for (const phrase of ['证据层', '规则组合', '升级路径', '学院路径', '研究引用']) {
    assert.match(rulesIndex, new RegExp(phrase));
  }

  assert.match(rulesIndex, /composition-patterns\.md/);
});

test('composition patterns page links back to the new narrative context pages', () => {
  const page = read('docs/zh/rules/composition-patterns.md');

  assert.match(page, /\[项目使命\]\(\.\.\/introduction\/mission\)/);
  assert.match(page, /\[系统总览\]\(\.\.\/architecture\/system-overview\)/);
  assert.match(page, /\[学院路径\]\(\.\.\/academy\/learning-path\)/);
});

test('zh homepage reads like a research-grade project introduction instead of an atlas shell', () => {
  const homepage = read('docs/zh/index.md');

  for (const section of ['WhitepaperHero', 'NarrativeRail', 'SystemShowcase', 'CurriculumDeck', 'CitationLedger']) {
    assert.match(homepage, new RegExp(section));
  }

  for (const phrase of ['项目白皮书', '架构展厅', '学院路径', '研究引用']) {
    assert.match(homepage, new RegExp(phrase));
  }
});

test('new English IA entry pages exist', () => {
  for (const file of [
    'docs/en/introduction/mission.md',
    'docs/en/introduction/reader-map.md',
    'docs/en/academy/learning-path.md',
    'docs/en/academy/maintainer-curriculum.md',
    'docs/en/architecture/system-overview.md',
    'docs/en/guides/team-onboarding.md',
    'docs/en/research/references.md',
    'docs/en/rules/composition-patterns.md',
  ]) {
    assert.equal(exists(file), true, `${file} should exist`);
  }
});

test('en homepage mirrors the new shell with concise whitepaper framing', () => {
  const homepage = read('docs/en/index.md');

  for (const section of ['WhitepaperHero', 'NarrativeRail', 'SystemShowcase', 'CurriculumDeck', 'CitationLedger']) {
    assert.match(homepage, new RegExp(section));
  }

  assert.match(homepage, /technical whitepaper/i);
  assert.match(homepage, /research references/i);
});

test('English rules framing treats rules as the evidence layer in the new IA', () => {
  const rulesIndex = read('docs/en/rules/index.md');
  const compositionPatterns = read('docs/en/rules/composition-patterns.md');

  for (const phrase of ['evidence layer', 'composition patterns', 'upgrade path']) {
    assert.match(rulesIndex, new RegExp(phrase, 'i'));
  }

  assert.match(compositionPatterns, /\[Project Mission\]\(\.\.\/introduction\/mission\)/);
  assert.match(compositionPatterns, /\[System Overview\]\(\.\.\/architecture\/system-overview\)/);
  assert.match(compositionPatterns, /\[Academy Path\]\(\.\.\/academy\/learning-path\)/);
});

test('theme index registers the new presentation components and stylesheet stack', () => {
  const themeIndex = read('docs/.vitepress/theme/index.ts');
  const styleIndex = read('docs/.vitepress/theme/style.css');
  const componentStyles = read('docs/.vitepress/theme/styles/components.css');
  const tokens = read('docs/.vitepress/theme/styles/tokens.css');

  for (const component of [
    'WhitepaperHero',
    'NarrativeRail',
    'SystemShowcase',
    'CurriculumDeck',
    'CitationLedger',
    'SignalPill',
  ]) {
    assert.match(themeIndex, new RegExp(`app\\.component\\('${component}'`));
  }

  assert.doesNotMatch(componentStyles, /border-left\s*:/);
  assert.doesNotMatch(componentStyles, /border-right\s*:/);
  assert.match(tokens, /oklch\(/);

  for (const sheet of ['tokens.css', 'layout.css', 'components.css', 'content.css', 'figures.css']) {
    assert.match(styleIndex, new RegExp(sheet.replace('.', '\\.')));
  }
});

test('SVG assets use theme-aware color hooks instead of hardcoded black or white fills', () => {
  for (const asset of ['docs/public/logo.svg', 'docs/public/og-image.svg']) {
    const svg = read(asset);

    assert.match(svg, /(currentColor|var\(--)/);
    assert.doesNotMatch(svg, /#(?:fff|ffffff|000|000000)\b/i);
  }
});
