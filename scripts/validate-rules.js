#!/usr/bin/env node
/**
 * 规则文件验证脚本
 * 深度验证 .cursorrules 文件的质量和一致性
 */

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RULES_DIR = resolve(__dirname, '../rules');
const REPORT_FILE = resolve(__dirname, '../validation-report.json');

// 验证结果
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

// 验证规则定义
const VALIDATION_RULES = {
  // 文件大小检查
  minFileSize: {
    check: (content) => content.length >= 200,
    message: '文件内容过少（< 200字符），建议补充更多规范',
    severity: 'warning'
  },
  // 最大文件大小（防止过大）
  maxFileSize: {
    check: (content) => content.length <= 50000,
    message: '文件内容过多（> 50000字符），建议精简',
    severity: 'warning'
  },
  // 角色定义检查
  hasRoleDefinition: {
    check: (content) => /you are|role|expert|specialist|developer/i.test(content),
    message: '缺少角色定义（未找到 "you are", "role", "expert" 等关键词）',
    severity: 'warning'
  },
  // 代码规范检查
  hasCodeGuidelines: {
    check: (content) => /code|coding|style|convention|guideline|rule/i.test(content),
    message: '缺少代码规范相关内容',
    severity: 'info'
  },
  // 最佳实践检查
  hasBestPractices: {
    check: (content) => /best practice|recommended|should|must|always/i.test(content),
    message: '缺少最佳实践建议',
    severity: 'info'
  },
  // 技术栈检查
  hasTechStack: {
    check: (content) => /react|vue|angular|node|python|go|rust|typescript|javascript/i.test(content),
    message: '未明确提及技术栈',
    severity: 'info'
  },
  // 换行符检查
  lineEnding: {
    check: (content) => !content.includes('\r\n'),
    message: '使用 Windows 换行符 (CRLF)，建议改用 Unix 风格 (LF)',
    severity: 'info'
  },
  // 空行检查
  trailingWhitespace: {
    check: (content) => !/[ \t]+\n/m.test(content),
    message: '存在行尾空格',
    severity: 'info'
  },
  // 编码声明检查
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
 */
function getCursorRulesFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = resolve(currentDir, item);
      let stat;
      try {
        stat = statSync(fullPath);
      } catch (e) {
        console.warn(`Warning: Cannot stat ${fullPath} - ${e.message}`);
        continue;
      }

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === '.cursorrules') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

/**
 * 验证单个规则文件
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
 * 生成报告
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
