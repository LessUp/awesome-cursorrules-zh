# API 接口定义

本目录用于存放 API 接口定义文档。

## API 文档模板

```markdown
# [API 名称] 接口文档

## 概述
[接口功能描述]

## 端点
`[HTTP 方法] /api/v1/[路径]`

## 请求参数

### 请求头
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| Authorization | string | 是 | 认证令牌 |

### 查询参数
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | integer | 否 | 页码，默认 1 |

### 请求体
```json
{
  "field": "value"
}
```

## 响应

### 成功响应
```json
{
  "code": 200,
  "data": {},
  "message": "success"
}
```

### 错误响应
```json
{
  "code": 400,
  "error": "Bad Request",
  "message": "参数错误"
}
```

## 示例

### 请求示例
```bash
curl -X GET "https://api.example.com/v1/resource" \
  -H "Authorization: Bearer token"
```

## 版本历史
| 版本 | 日期 | 变更说明 |
|------|------|----------|
| 1.0.0 | 2024-01-01 | 初始版本 |
```

## 本项目说明

awesome-cursorrules-zh 是一个静态网站项目，主要使用 VitePress 构建，暂无后端 API。如需添加 API 相关功能，请参考本模板创建文档。
