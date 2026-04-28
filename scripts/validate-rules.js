#!/usr/bin/env node
/**
 * @fileoverview 规则文件验证脚本
 * @module scripts/validate-rules
 * @description 深度验证 .cursorrules 文件的质量和一致性
 * @example
 * // 运行验证
 * node scripts/validate-rules.js
 * // 或通过 npm
 * npm run validate
 */

import { readFileSync, existsSync, writeFileSync, statSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { traverseDirectory } from './utils/traverse.js';

/** @type {string} 当前脚本文件路径 */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} 当前脚本目录路径 */
const __dirname = dirname(__filename);

/** @type {string} 规则文件根目录路径 */
const RULES_DIR = resolve(__dirname, '../rules');

/** @type {string} 验证报告输出文件路径 */
const REPORT_FILE = resolve(__dirname, '../validation-report.json');

/**
 * @typedef {Object} ValidationIssue
 * @property {string} rule - 规则名称
 * @property {string} message - 问题描述
 * @property {'error'|'warning'|'info'} severity - 严重程度
 */

/**
 * @typedef {Object} ValidationResult
 * @property {string} file - 文件相对路径
 * @property {'valid'|'warning'|'error'} status - 验证状态
 * @property {ValidationIssue[]} issues - 问题列表
 * @property {number} [size] - 文件大小（字节）
 * @property {number} [lines] - 文件行数
 * @property {string} [lastModified] - 最后修改时间 (ISO 格式)
 */

/**
 * @typedef {Object} ValidationSummary
 * @property {number} total - 总文件数
 * @property {number} valid - 通过验证数
 * @property {number} warnings - 警告数
 * @property {number} errors - 错误数
 */

/**
 * @typedef {Object} ValidationResults
 * @property {string} timestamp - 验证时间戳 (ISO 格式)
 * @property {ValidationSummary} summary - 验证摘要
 * @property {ValidationResult[]} details - 详细结果
 * @property {Object.<string, {total: number, valid: number, issues: number}>} [categoryStats] - 分类统计
 */

/**
 * @typedef {Object} ValidationRule
 * @property {function(string): boolean} check - 验证函数，接收文件内容，返回是否通过
 * @property {string} message - 验证失败时的提示消息
 * @property {'error'|'warning'|'info'} severity - 问题严重程度
 */

/** @type {ValidationResults} 验证结果对象 */
const results = {
  timestamp: new Date().toISOString(),
  summary: {
    total: 0,
    valid: 0,
    warnings: 0,
    errors: 0
  },
  details: []
};

/**
 * 验证规则定义
 * @type {Object.<string, ValidationRule>}
 * @description 包含所有验证规则的配置对象
 */
const VALIDATION_RULES = {
  /**
   * 文件最小大小检查
   * @description 确保文件内容不少于 200 字符
   */
  minFileSize: {
    check: (content) => content.length >= 200,
    message: '文件内容过少（< 200字符），建议补充更多规范',
    severity: 'warning'
  },
  /**
   * 文件最大大小检查
   * @description 防止文件过大（超过 50000 字符）
   */
  maxFileSize: {
    check: (content) => content.length <= 50000,
    message: '文件内容过多（> 50000字符），建议精简',
    severity: 'warning'
  },
  /**
   * 角色定义检查
   * @description 检查是否包含 AI 角色定义关键词
   */
  hasRoleDefinition: {
    check: (content) => /you are|role|expert|specialist|developer/i.test(content),
    message: '缺少角色定义（未找到 "you are", "role", "expert" 等关键词）',
    severity: 'warning'
  },
  /**
   * 代码规范检查
   * @description 检查是否包含代码规范相关内容
   */
  hasCodeGuidelines: {
    check: (content) => /code|coding|style|convention|guideline|rule/i.test(content),
    message: '缺少代码规范相关内容',
    severity: 'info'
  },
  /**
   * 最佳实践检查
   * @description 检查是否包含最佳实践建议
   */
  hasBestPractices: {
    check: (content) => /best practice|recommended|should|must|always/i.test(content),
    message: '缺少最佳实践建议',
    severity: 'info'
  },
  /**
   * 技术栈检查
   * @description 检查是否明确提及技术栈
   */
  hasTechStack: {
    check: (content) => /react|vue|angular|node|python|go|rust|typescript|javascript/i.test(content),
    message: '未明确提及技术栈',
    severity: 'info'
  },
  /**
   * 换行符检查
   * @description 检查是否使用 Unix 风格换行符 (LF)
   */
  lineEnding: {
    check: (content) => !content.includes('\r\n'),
    message: '使用 Windows 换行符 (CRLF)，建议改用 Unix 风格 (LF)',
    severity: 'info'
  },
  /**
   * 行尾空格检查
   * @description 检查是否存在行尾空格
   */
  trailingWhitespace: {
    check: (content) => !/[ \t]+\n/m.test(content),
    message: '存在行尾空格',
    severity: 'info'
  },
  /**
   * 文件结构检查
   * @description 检查文件是否有清晰的结构组织
   */
  hasStructure: {
    check: (content) => {
      const lines = content.split('\n');
      // 检查是否有结构化内容（多级标题或分类）
      return lines.some(line => /^#{1,3}\s/.test(line)) ||
             content.split('\n\n').length > 5;
    },
    message: '文件结构不够清晰，建议使用标题层级组织内容',
    severity: 'info'
  }
};

/**
 * 递归获取所有 .cursorrules 文件
 * @param {string} dir - 要遍历的根目录路径
 * @returns {string[]} .cursorrules 文件的完整路径数组
 * @example
 * const files = getCursorRulesFiles('./rules');
 * console.log(files); // ['/path/to/rules/frontend/react/.cursorrules', ...]
 */
function getCursorRulesFiles(dir) {
  return traverseDirectory(dir, { pattern: /^\.cursorrules$/ });
}

/**
 * 验证单个规则文件
 * @param {string} filePath - 要验证的文件完整路径
 * @returns {ValidationResult} 验证结果对象
 * @example
 * const result = validateRuleFile('/path/to/rules/frontend/react/.cursorrules');
 * if (result.status === 'valid') {
 *   console.log('文件验证通过');
 * }
 */
function validateRuleFile(filePath) {
  const relativePath = filePath.replace(RULES_DIR, 'rules');
  const result = {
    file: relativePath,
    status: 'valid',
    issues: []
  };

  try {
    const content = readFileSync(filePath, 'utf-8');
    const stats = statSync(filePath);

    // 基础信息
    result.size = content.length;
    result.lines = content.split('\n').length;
    result.lastModified = stats.mtime.toISOString();

    // 运行所有验证规则
    for (const [ruleName, rule] of Object.entries(VALIDATION_RULES)) {
      if (!rule.check(content)) {
        const issue = {
          rule: ruleName,
          message: rule.message,
          severity: rule.severity
        };

        result.issues.push(issue);

        if (rule.severity === 'error') {
          result.status = 'error';
        } else if (rule.severity === 'warning' && result.status === 'valid') {
          result.status = 'warning';
        }
      }
    }

  } catch (error) {
    result.status = 'error';
    result.issues.push({
      rule: 'readError',
      message: `无法读取文件: ${error.message}`,
      severity: 'error'
    });
  }

  return result;
}

/**
 * 生成验证报告
 * @description 统计验证结果并输出到控制台和文件
 * @returns {void}
 */
function generateReport() {
  // 统计
  results.summary.total = results.details.length;
  results.summary.valid = results.details.filter(r => r.status === 'valid').length;
  results.summary.warnings = results.details.filter(r => r.status === 'warning').length;
  results.summary.errors = results.details.filter(r => r.status === 'error').length;

  // 按类别统计
  const categoryStats = {};
  results.details.forEach(r => {
    const category = r.file.split('/')[1] || 'uncategorized';
    if (!categoryStats[category]) {
      categoryStats[category] = { total: 0, valid: 0, issues: 0 };
    }
    categoryStats[category].total++;
    if (r.status === 'valid') {
      categoryStats[category].valid++;
    } else {
      categoryStats[category].issues++;
    }
  });
  results.categoryStats = categoryStats;

  // 写入报告文件
  const reportContent = JSON.stringify(results, null, 2);
  console.log(reportContent);

  // 同时写入文件供 CI 使用
  writeFileSync(REPORT_FILE, reportContent);
}

/**
 * 主函数
 * @async
 * @returns {Promise<void>}
 * @description 执行完整的验证流程
 * @example
 * main().catch(console.error);
 */
async function main() {
  console.log('🔍 开始验证 .cursorrules 文件...\n');

  if (!existsSync(RULES_DIR)) {
    console.error('❌ 错误: rules 目录不存在');
    process.exit(1);
  }

  const files = getCursorRulesFiles(RULES_DIR);
  console.log(`📁 发现 ${files.length} 个规则文件\n`);

  for (const file of files) {
    const result = validateRuleFile(file);
    results.details.push(result);

    // 实时输出（简化版，避免输出太多）
    const icon = result.status === 'valid' ? '✅' :
                 result.status === 'warning' ? '⚠️' : '❌';
    const issueCount = result.issues.length;
    console.log(`${icon} ${result.file}${issueCount > 0 ? ` (${issueCount} 个建议)` : ''}`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 验证结果摘要');
  console.log('='.repeat(50));

  generateReport();

  console.log(`\n总计: ${results.summary.total}`);
  console.log(`  ✅ 通过: ${results.summary.valid}`);
  console.log(`  ⚠️ 警告: ${results.summary.warnings}`);
  console.log(`  ❌ 错误: ${results.summary.errors}`);

  // 如果有错误，退出码非零
  if (results.summary.errors > 0) {
    console.log('\n❌ 验证失败，请修复上述错误');
    process.exit(1);
  }

  if (results.summary.warnings > 0) {
    console.log('\n⚠️ 验证通过，但有警告建议处理');
    process.exit(0);
  }

  console.log('\n✅ 所有规则文件验证通过！');
  process.exit(0);
}

main().catch(error => {
  console.error('❌ 验证过程中发生错误:', error);
  process.exit(1);
});
