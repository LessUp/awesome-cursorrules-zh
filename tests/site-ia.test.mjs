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

function extractLocaleBlock(config, locale) {
  const start = config.indexOf(`    ${locale}: {`);
  assert.notEqual(start, -1, `${locale} locale should exist`);

  const end =
    locale === 'zh'
      ? config.indexOf('\n    en: {', start)
      : config.indexOf('\n  },\n\n  themeConfig:', start);

  assert.notEqual(end, -1, `${locale} locale should have a bounded config block`);
  return config.slice(start, end);
}

function extractNavBlock(config, locale) {
  const localeBlock = extractLocaleBlock(config, locale);
  const navMatch = localeBlock.match(/nav:\s*\[([\s\S]*?)\],\s*sidebar:/);
  assert.ok(navMatch, `${locale} locale should define a nav block`);
  return navMatch[1];
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

test('merge resolution keeps Atlas-first nav, compatibility files, and Pages-safe links together', () => {
  const config = read('docs/.vitepress/config.ts');
  const zhNav = extractNavBlock(config, 'zh');
  const enNav = extractNavBlock(config, 'en');

  assert.doesNotMatch(config, /<<<<<<<|=======|>>>>>>>/);

  for (const label of ['白皮书', '架构', '方法论', '规则库', '资源', 'FAQ']) {
    assert.match(zhNav, new RegExp(`text: '${label}'`));
  }

  for (const label of ['Whitepaper', 'Architecture', 'Playbook', 'Rules', 'Resources', 'FAQ']) {
    assert.match(enNav, new RegExp(`text: '${label}'`));
  }

  for (const label of ['地图', '哲学']) {
    assert.doesNotMatch(zhNav, new RegExp(`text: '${label}'`));
  }

  for (const label of ['Maps', 'Philosophy']) {
    assert.doesNotMatch(enNav, new RegExp(`text: '${label}'`));
  }

  for (const file of [
    'docs/zh/maps/index.md',
    'docs/zh/philosophy.md',
    'docs/zh/resources/index.md',
    'docs/en/maps/index.md',
    'docs/en/philosophy.md',
    'docs/en/resources/index.md',
  ]) {
    assert.equal(exists(file), true, `${file} should exist`);
  }

  assert.match(config, /edit\/master\/docs/);
  assert.match(config, /const basePath = base === '\/' \? '' : base.replace\(\/\\\/\$\/, ''\)/);
  assert.match(config, /location\.replace\(\(basePath \|\| ''\) \+ \(locale\.startsWith\('zh'\) \? '\/zh\/' : '\/en\/'\)\)/);
});

test('compatibility bridge pages point legacy routes into the Atlas IA', () => {
  const zhMaps = read('docs/zh/maps/index.md');
  const enMaps = read('docs/en/maps/index.md');
  const zhPhilosophy = read('docs/zh/philosophy.md');
  const enPhilosophy = read('docs/en/philosophy.md');
  const zhResources = read('docs/zh/resources/index.md');
  const enResources = read('docs/en/resources/index.md');

  assert.match(zhMaps, /已并入新的 Atlas 信息架构/);
  assert.match(zhMaps, /\.\.\/whitepaper\/overview\.md/);
  assert.match(zhMaps, /\.\.\/architecture\/blueprint\.md/);
  assert.match(zhMaps, /\.\.\/rules\/index\.md/);

  assert.match(enMaps, /now lives inside the Atlas information architecture/);
  assert.match(enMaps, /\.\.\/whitepaper\/overview\.md/);
  assert.match(enMaps, /\.\.\/architecture\/blueprint\.md/);
  assert.match(enMaps, /\.\.\/rules\/index\.md/);

  assert.match(zhPhilosophy, /项目哲学不再单独作为一级导航/);
  assert.match(zhPhilosophy, /白皮书与方法论/);
  assert.match(zhPhilosophy, /\.\/whitepaper\/overview\.md/);
  assert.match(zhPhilosophy, /\.\/playbook\/adoption-path\.md/);
  assert.match(zhPhilosophy, /\.\/playbook\/operating-model\.md/);

  assert.match(enPhilosophy, /Project philosophy is now distributed across the whitepaper and playbook/);
  assert.match(enPhilosophy, /\.\/whitepaper\/overview\.md/);
  assert.match(enPhilosophy, /\.\/playbook\/adoption-path\.md/);
  assert.match(enPhilosophy, /\.\/playbook\/operating-model\.md/);

  assert.match(zhResources, /旧的资源索引已经升级为资源网络/);
  assert.match(zhResources, /\.\/ecosystem\.md/);
  assert.match(zhResources, /\.\/extended-reading\.md/);
  assert.match(zhResources, /\.\.\/index\.md/);

  assert.match(enResources, /old resource index is now part of the resource network/);
  assert.match(enResources, /\.\/ecosystem\.md/);
  assert.match(enResources, /\.\/extended-reading\.md/);
  assert.match(enResources, /\.\.\/index\.md/);
});

test('homepages note that legacy map philosophy and resource routes now bridge into Atlas', () => {
  const zhHomepage = read('docs/zh/index.md');
  const enHomepage = read('docs/en/index.md');

  assert.match(zhHomepage, /旧的地图、哲学、资源入口仍会导向新的 Atlas 结构/);
  assert.match(enHomepage, /legacy map, philosophy, and resource entry points still route into the new Atlas structure/);
});
