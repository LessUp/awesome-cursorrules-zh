#!/usr/bin/env node
/**
 * @fileoverview 规则文件验证脚本
 * @module scripts/validate-rules
 * @description 验证 .cursorrules 文件的质量和一致性
 *
 * @example
 * // 运行验证
 * node scripts/validate-rules.js
 * // 或通过 npm
 * npm run validate
 */

import { readFileSync, existsSync, statSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { traverseDirectory } from './utils/traverse.js';
import { validateContent, aggregateResults, isValidationPassed } from './validate/core.js';
import { compositeReporter } from './validate/reporter.js';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 规则文件根目录路径 */
const RULES_DIR = resolve(__dirname, '../rules');

/** @type {string} 验证报告输出文件路径 */
const REPORT_FILE = resolve(__dirname, '../validation-report.json');

/** @type {string} JUnit 报告输出文件路径 */
const JUNIT_FILE = resolve(__dirname, '../validation-report.xml');

/**
 * 递归获取所有 .cursorrules 文件
 * @returns {string[]} .cursorrules 文件的完整路径数组
 */
function getCursorRulesFiles() {
  return traverseDirectory(RULES_DIR, { pattern: /^\.cursorrules$/ });
}

/**
 * 验证单个规则文件
 * @param {string} filePath - 要验证的文件完整路径
 * @returns {import('./validate/core.js').ValidationResult} 验证结果对象
 */
function validateRuleFile(filePath) {
  const relativePath = filePath.replace(RULES_DIR, 'rules');

  try {
    const content = readFileSync(filePath, 'utf-8');
    const stats = statSync(filePath);

    return validateContent(content, relativePath, {
      size: content.length,
      lines: content.split('\n').length,
      lastModified: stats.mtime.toISOString()
    });
  } catch (error) {
    return {
      file: relativePath,
      status: 'error',
      issues: [{
        rule: 'readError',
        message: `无法读取文件: ${error.message}`,
        severity: 'error'
      }]
    };
  }
}

/**
 * 主函数
 * @returns {void}
 */
function main() {
  console.log('🔍 开始验证 .cursorrules 文件...\n');

  if (!existsSync(RULES_DIR)) {
    console.error('❌ 错误: rules 目录不存在');
    process.exit(1);
  }

  const files = getCursorRulesFiles();
  console.log(`📁 发现 ${files.length} 个规则文件\n`);

  // 验证所有文件
  const results = files.map(validateRuleFile);

  // 聚合结果
  const summary = aggregateResults(results);

  // 检查是否启用 JUnit 输出（通过环境变量）
  const enableJunit = process.env.VALIDATION_JUNIT === 'true';

  // 输出报告
  compositeReporter(results, summary, {
    console: true,
    jsonPath: REPORT_FILE,
    junitPath: enableJunit ? JUNIT_FILE : undefined
  });

  // 使用 isValidationPassed 判断验证结果
  if (!isValidationPassed(results)) {
    console.log('\n❌ 验证失败，请修复上述错误');
    process.exit(1);
  }

  if (summary.warnings > 0) {
    console.log('\n⚠️ 验证通过，但有警告建议处理');
    process.exit(0);
  }

  console.log('\n✅ 所有规则文件验证通过！');
  process.exit(0);
}

main();
