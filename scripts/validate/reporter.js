/**
 * 验证报告格式化模块
 * @module scripts/validate/reporter
 * @description 将验证结果格式化为不同输出格式
 */

import { writeFileSync } from 'fs';

/**
 * @typedef {import('./core.js').ValidationResult} ValidationResult
 */

/**
 * 控制台报告器
 * @param {ValidationResult[]} results - 验证结果
 * @param {Object} summary - 汇总统计
 */
export function consoleReporter(results, summary) {
  // 输出每个文件的结果
  for (const result of results) {
    const icon = result.status === 'valid' ? '✅' :
                 result.status === 'warning' ? '⚠️' : '❌';
    const issueCount = result.issues.length;
    console.log(`${icon} ${result.file}${issueCount > 0 ? ` (${issueCount} 个建议)` : ''}`);
  }

  // 输出汇总
  console.log('\n' + '='.repeat(50));
  console.log('📊 验证结果摘要');
  console.log('='.repeat(50));

  console.log(`\n总计: ${summary.total}`);
  console.log(`  ✅ 通过: ${summary.valid}`);
  console.log(`  ⚠️ 警告: ${summary.warnings}`);
  console.log(`  ❌ 错误: ${summary.errors}`);
}

/**
 * JSON 报告器
 * @param {ValidationResult[]} results - 验证结果
 * @param {Object} summary - 汇总统计
 * @param {string} outputPath - 输出文件路径
 * @param {boolean} [consoleOutput=false] - 是否同时输出到控制台
 */
export function jsonReporter(results, summary, outputPath, consoleOutput = false) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: summary.total,
      valid: summary.valid,
      warnings: summary.warnings,
      errors: summary.errors
    },
    categoryStats: summary.categoryStats,
    details: results
  };

  const content = JSON.stringify(report, null, 2);
  writeFileSync(outputPath, content);

  if (consoleOutput) {
    console.log(content);
  }

  return report;
}

/**
 * JUnit XML 报告器（用于 CI 集成）
 * @param {ValidationResult[]} results - 验证结果
 * @param {Object} summary - 汇总统计
 * @param {string} outputPath - 输出文件路径
 */
export function junitReporter(results, summary, outputPath) {
  const failures = summary.errors + summary.warnings;

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<testsuites tests="${summary.total}" failures="${failures}" errors="${summary.errors}">
  <testsuite name="cursorrules-validation" tests="${summary.total}" failures="${failures}" errors="${summary.errors}">
`;

  for (const result of results) {
    const status = result.status === 'valid' ? 'passed' : 'failed';
    xml += `    <testcase name="${result.file}" classname="rules" status="${status}">\n`;

    if (result.issues.length > 0) {
      for (const issue of result.issues) {
        xml += `      <${issue.severity === 'error' ? 'error' : 'failure'} message="${escapeXml(issue.message)}">\n`;
        xml += `        Rule: ${issue.rule}\n`;
        xml += `        Severity: ${issue.severity}\n`;
        xml += `      </${issue.severity === 'error' ? 'error' : 'failure'}>\n`;
      }
    }

    xml += `    </testcase>\n`;
  }

  xml += `  </testsuite>\n</testsuites>`;

  writeFileSync(outputPath, xml);
  return xml;
}

/**
 * 转义 XML 特殊字符
 * @param {string} str - 原始字符串
 * @returns {string} 转义后的字符串
 */
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * 组合报告器
 * @param {ValidationResult[]} results - 验证结果
 * @param {Object} summary - 汇总统计
 * @param {Object} options - 配置选项
 * @param {boolean} [options.console=true] - 是否输出到控制台
 * @param {string} [options.jsonPath] - JSON 输出路径
 * @param {string} [options.junitPath] - JUnit 输出路径
 * @param {boolean} [options.jsonToConsole=false] - 是否将 JSON 输出到控制台
 */
export function compositeReporter(results, summary, options = {}) {
  const {
    console: consoleOutput = true,
    jsonPath,
    junitPath,
    jsonToConsole = false
  } = options;

  if (consoleOutput) {
    consoleReporter(results, summary);
  }

  if (jsonPath) {
    jsonReporter(results, summary, jsonPath, jsonToConsole);
  }

  if (junitPath) {
    junitReporter(results, summary, junitPath);
  }
}
