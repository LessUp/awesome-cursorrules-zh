/**
 * 共享工具函数模块
 * @module scripts/utils/traverse
 */

import { readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

/**
 * 递归遍历目录，收集匹配条件的文件
 *
 * @param {string} dir - 要遍历的根目录路径
 * @param {Object} options - 配置选项
 * @param {RegExp|null} options.pattern - 文件名匹配模式，null 表示匹配所有文件
 * @param {string[]} options.skipDirs - 要跳过的目录名列表
 * @param {Function} options.onFile - 文件处理回调函数 (fullPath: string) => void
 * @param {Function} options.onDir - 目录处理回调函数 (fullPath: string, dirName: string) => boolean，返回 false 表示跳过该目录
 * @returns {string[]} 匹配的文件路径数组
 *
 * @example
 * // 获取所有 .cursorrules 文件
 * const files = traverseDirectory('./rules', { pattern: /\.cursorrules$/ });
 *
 * @example
 * // 使用回调处理文件
 * traverseDirectory('./rules', {
 *   pattern: /\.md$/,
 *   onFile: (path) => console.log(path)
 * });
 */
export function traverseDirectory(dir, options = {}) {
  const {
    pattern = null,
    skipDirs = ['node_modules'],
    onFile = null,
    onDir = null
  } = options;

  const files = [];

  function traverse(currentDir) {
    let items;
    try {
      items = readdirSync(currentDir);
    } catch (e) {
      console.warn(`Warning: Cannot read directory ${currentDir} - ${e.message}`);
      return;
    }

    for (const item of items) {
      const fullPath = join(currentDir, item);
      let stat;
      try {
        stat = statSync(fullPath);
      } catch (e) {
        console.warn(`Warning: Cannot stat ${fullPath} - ${e.message}`);
        continue;
      }

      if (stat.isDirectory()) {
        // 检查是否需要跳过该目录
        if (skipDirs.includes(item) || item.startsWith('.')) {
          continue;
        }

        // 调用目录处理回调
        if (onDir && !onDir(fullPath, item)) {
          continue;
        }

        traverse(fullPath);
      } else if (!pattern || pattern.test(item)) {
        files.push(fullPath);

        // 调用文件处理回调
        if (onFile) {
          onFile(fullPath);
        }
      }
    }
  }

  traverse(dir);
  return files;
}

/**
 * 递归获取所有匹配模式的文件
 *
 * @param {string} dir - 要遍历的目录
 * @param {RegExp|null} pattern - 文件名匹配模式
 * @returns {string[]} 文件路径数组
 *
 * @example
 * const cursorRules = getFiles('./rules', /\.cursorrules$/);
 */
export function getFiles(dir, pattern = null) {
  return traverseDirectory(dir, { pattern });
}

/**
 * 获取目录中的所有子目录
 *
 * @param {string} dir - 目录路径
 * @param {string[]} skipDirs - 要跳过的目录名列表
 * @returns {string[]} 子目录路径数组
 */
export function getDirectories(dir, skipDirs = []) {
  const dirs = [];

  let items;
  try {
    items = readdirSync(dir);
  } catch (e) {
    console.warn(`Warning: Cannot read directory ${dir} - ${e.message}`);
    return dirs;
  }

  for (const item of items) {
    if (skipDirs.includes(item) || item.startsWith('.')) {
      continue;
    }

    const fullPath = join(dir, item);
    try {
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        dirs.push(fullPath);
      }
    } catch (e) {
      console.warn(`Warning: Cannot stat ${fullPath} - ${e.message}`);
    }
  }

  return dirs;
}
