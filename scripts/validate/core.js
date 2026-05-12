/**
 * 规则验证核心模块
 * @module scripts/validate/core
 * @description 纯验证逻辑，无副作用，可独立测试
 */

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
 * @typedef {Object} ValidationRule
 * @property {function(string): boolean} check - 验证函数
 * @property {string} message - 验证失败提示
 * @property {'error'|'warning'|'info'} severity - 问题严重程度
 */

/**
 * 验证规则定义
 * @type {Object.<string, ValidationRule>}
 */
export const VALIDATION_RULES = {
  minFileSize: {
    check: (content) => content.length >= 200,
    message: '文件内容过少（< 200字符），建议补充更多规范',
    severity: 'warning'
  },
  maxFileSize: {
    check: (content) => content.length <= 50000,
    message: '文件内容过多（> 50000字符），建议精简',
    severity: 'warning'
  },
  hasRoleDefinition: {
    check: (content) => /you are|role|expert|specialist|developer/i.test(content),
    message: '缺少角色定义（未找到 "you are", "role", "expert" 等关键词）',
    severity: 'warning'
  },
  hasCodeGuidelines: {
    check: (content) => /code|coding|style|convention|guideline|rule/i.test(content),
    message: '缺少代码规范相关内容',
    severity: 'info'
  },
  hasBestPractices: {
    check: (content) => /best practice|recommended|should|must|always/i.test(content),
    message: '缺少最佳实践建议',
    severity: 'info'
  },
  hasTechStack: {
    check: (content) => /react|vue|angular|node|python|go|rust|typescript|javascript/i.test(content),
    message: '未明确提及技术栈',
    severity: 'info'
  },
  lineEnding: {
    check: (content) => !content.includes('\r\n'),
    message: '使用 Windows 换行符 (CRLF)，建议改用 Unix 风格 (LF)',
    severity: 'info'
  },
  trailingWhitespace: {
    check: (content) => !/[ \t]+\n/m.test(content),
    message: '存在行尾空格',
    severity: 'info'
  },
  hasStructure: {
    check: (content) => {
      const lines = content.split('\n');
      return lines.some(line => /^#{1,3}\s/.test(line)) ||
             content.split('\n\n').length > 5;
    },
    message: '文件结构不够清晰，建议使用标题层级组织内容',
    severity: 'info'
  }
};

/**
 * 验证单个文件内容
 * @param {string} content - 文件内容
 * @param {string} relativePath - 相对路径（用于结果标识）
 * @param {Object} [stats] - 文件统计信息
 * @param {number} [stats.size] - 文件大小
 * @param {number} [stats.lines] - 文件行数
 * @param {string} [stats.lastModified] - 最后修改时间
 * @returns {ValidationResult} 验证结果
 */
export function validateContent(content, relativePath, stats = {}) {
  const result = {
    file: relativePath,
    status: 'valid',
    issues: [],
    ...stats
  };

  for (const [ruleName, rule] of Object.entries(VALIDATION_RULES)) {
    if (!rule.check(content)) {
      result.issues.push({
        rule: ruleName,
        message: rule.message,
        severity: rule.severity
      });

      if (rule.severity === 'error') {
        result.status = 'error';
      } else if (rule.severity === 'warning' && result.status === 'valid') {
        result.status = 'warning';
      }
    }
  }

  return result;
}

/**
 * 聚合验证结果
 * @param {ValidationResult[]} results - 验证结果列表
 * @returns {{total: number, valid: number, warnings: number, errors: number, categoryStats: Object}}
 */
export function aggregateResults(results) {
  const summary = {
    total: results.length,
    valid: results.filter(r => r.status === 'valid').length,
    warnings: results.filter(r => r.status === 'warning').length,
    errors: results.filter(r => r.status === 'error').length
  };

  const categoryStats = {};
  for (const r of results) {
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
  }

  return { ...summary, categoryStats };
}

/**
 * 判断验证是否通过
 * @param {ValidationResult[]} results - 验证结果列表
 * @returns {boolean} 是否通过（无错误）
 */
export function isValidationPassed(results) {
  return results.every(r => r.status !== 'error');
}
