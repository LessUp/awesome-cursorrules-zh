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

test('zh information architecture exposes whitepaper-driven navigation', () => {
  const config = read('docs/.vitepress/config.ts');

  for (const label of ['白皮书', '架构', '方法论', '规则库', '资源']) {
    assert.match(config, new RegExp(`text: '${label}'`));
  }

  for (const section of ['/zh/whitepaper/', '/zh/architecture/', '/zh/playbook/', '/zh/resources/']) {
    assert.match(config, new RegExp(section.replaceAll('/', '\\/')));
  }
});

test('en information architecture mirrors the new section model', () => {
  const config = read('docs/.vitepress/config.ts');

  for (const label of ['Whitepaper', 'Architecture', 'Playbook', 'Rules', 'Resources']) {
    assert.match(config, new RegExp(`text: '${label}'`));
  }

  for (const section of ['/en/whitepaper/', '/en/architecture/', '/en/playbook/', '/en/resources/']) {
    assert.match(config, new RegExp(section.replaceAll('/', '\\/')));
  }
});

test('homepage positions the site as a technical whitepaper and architecture atlas', () => {
  const homepage = read('docs/zh/index.md');

  for (const section of ['站点定位', '规则采用路径', '架构视图', '精选资源']) {
    assert.match(homepage, new RegExp(section));
  }

  assert.match(homepage, /技术白皮书/);
  assert.match(homepage, /架构展示站/);
});

test('new content hubs exist in both locales', () => {
  const requiredFiles = [
    'docs/zh/whitepaper/overview.md',
    'docs/zh/whitepaper/adoption-model.md',
    'docs/zh/architecture/blueprint.md',
    'docs/zh/architecture/content-system.md',
    'docs/zh/playbook/adoption-path.md',
    'docs/zh/playbook/operating-model.md',
    'docs/zh/resources/ecosystem.md',
    'docs/zh/resources/extended-reading.md',
    'docs/en/whitepaper/overview.md',
    'docs/en/whitepaper/adoption-model.md',
    'docs/en/architecture/blueprint.md',
    'docs/en/architecture/content-system.md',
    'docs/en/playbook/adoption-path.md',
    'docs/en/playbook/operating-model.md',
    'docs/en/resources/ecosystem.md',
    'docs/en/resources/extended-reading.md',
  ];

  for (const file of requiredFiles) {
    assert.equal(exists(file), true, `${file} should exist`);
  }
});

test('edit links target the repository default branch and redirect script respects base path', () => {
  const config = read('docs/.vitepress/config.ts');

  assert.doesNotMatch(config, /edit\/main\/docs/);
  assert.match(config, /edit\/master\/docs/);
  assert.match(config, /const basePath = base === '\/' \? '' : base.replace/);
  assert.match(config, /location\.replace\(\(basePath \|\| ''\) \+ \(locale\.startsWith\('zh'\) \? '\/zh\/' : '\/en\/'\)\)/);
});
