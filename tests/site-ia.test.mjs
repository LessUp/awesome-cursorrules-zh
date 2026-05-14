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

test('shared atlas defines zh navigation for the whitepaper-exhibition IA', () => {
  const atlasFile = 'docs/.vitepress/site/atlas.ts';

  assert.equal(exists(atlasFile), true, `${atlasFile} should exist`);

  const atlas = read(atlasFile);

  for (const label of ['项目主张', '白皮书', '架构图谱', '采用路径', '规则证据库', '资源网络']) {
    assert.match(atlas, new RegExp(`text: '${label}'`));
  }

  for (const legacy of ['地图', '哲学', 'FAQ']) {
    assert.doesNotMatch(atlas, new RegExp(`text: '${legacy}'`));
  }

  for (const route of [
    '/zh/whitepaper/decision-brief',
    '/zh/architecture/blueprint',
    '/zh/playbook/adoption-path',
    '/zh/rules/',
    '/zh/resources/ecosystem',
  ]) {
    assert.match(atlas, new RegExp(route.replaceAll('/', '\\/')));
  }
});

test('config consumes the shared atlas model while keeping edit links and locale redirect intact', () => {
  const config = read('docs/.vitepress/config.ts');

  assert.match(config, /import\s+\{\s*zhNav,\s*enNav,\s*zhSidebar,\s*enSidebar\s*\}\s+from '\.\/site\/atlas'/);
  assert.match(config, /nav:\s*zhNav/);
  assert.match(config, /sidebar:\s*zhSidebar/);
  assert.match(config, /nav:\s*enNav/);
  assert.match(config, /sidebar:\s*enSidebar/);

  assert.match(config, /edit\/master\/docs/);
  assert.match(config, /const basePath = base === '\/' \? '' : base.replace\(\/\\\/\$\/, ''\)/);
  assert.match(config, /location\.replace\(\(basePath \|\| ''\) \+ \(locale\.startsWith\('zh'\) \? '\/zh\/' : '\/en\/'\)\)/);
});

test('new Chinese IA entry pages exist', () => {
  for (const file of [
    'docs/zh/whitepaper/decision-brief.md',
    'docs/zh/architecture/information-graph.md',
    'docs/zh/playbook/role-paths.md',
    'docs/zh/rules/composition-patterns.md',
  ]) {
    assert.equal(exists(file), true, `${file} should exist`);
  }
});

test('legacy compatibility bridge pages are removed from both locales', () => {
  for (const file of [
    'docs/zh/maps/index.md',
    'docs/zh/philosophy.md',
    'docs/zh/resources/index.md',
    'docs/en/maps/index.md',
    'docs/en/philosophy.md',
    'docs/en/resources/index.md',
  ]) {
    assert.equal(exists(file), false, `${file} should be removed`);
  }
});

test('homepage copy does not claim removed legacy entry points still route into Atlas', () => {
  const zhHome = read('docs/zh/index.md');
  const enHome = read('docs/en/index.md');

  assert.doesNotMatch(zhHome, /旧的地图、哲学、资源入口仍会导向新的 Atlas 结构/);
  assert.doesNotMatch(enHome, /legacy map, philosophy, and resource entry points still route into the new Atlas structure/i);
});

test('theme index registers the whitepaper presentation components', () => {
  const themeIndex = read('docs/.vitepress/theme/index.ts');
  const styleIndex = read('docs/.vitepress/theme/style.css');
  const componentStyles = read('docs/.vitepress/theme/styles/components.css');

  for (const component of [
    'ExecutiveHero',
    'MetricBand',
    'DecisionMatrix',
    'ArchitectureSnapshot',
    'EvidenceBand',
    'SectionCallout',
  ]) {
    assert.match(themeIndex, new RegExp(`app\\.component\\('${component}'`));
  }

  assert.doesNotMatch(componentStyles, /^\.button(?:\b|--|:|\s|\{)/m);

  for (const sheet of ['tokens.css', 'layout.css', 'components.css', 'content.css']) {
    assert.match(styleIndex, new RegExp(sheet.replace('.', '\\.')));
  }
});
