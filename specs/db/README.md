# 数据库规范

本目录用于存放数据库设计规范文档。

## 数据库设计模板

```markdown
# [数据库名称] 设计文档

## 概述
[数据库用途说明]

## 表结构

### [表名]
| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | INTEGER | PRIMARY KEY | 主键 |
| created_at | TIMESTAMP | NOT NULL | 创建时间 |

## 索引设计
| 索引名 | 表名 | 字段 | 类型 |
|--------|------|------|------|
| idx_name | table | field | UNIQUE |

## 关系图
[ER 图或关系描述]

## 迁移脚本
```sql
-- 创建表
CREATE TABLE example (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);
```

## 版本历史
| 版本 | 日期 | 变更说明 |
|------|------|----------|
| 1.0.0 | 2024-01-01 | 初始设计 |
```

## 本项目说明

awesome-cursorrules-zh 是一个静态网站项目，数据存储在文件系统中：
- 规则文件：`/rules/` 目录下的 `.cursorrules` 文件
- 统计数据：`stats.json`
- 验证报告：`validation-report.json`

如需引入数据库功能，请参考本模板创建文档。
