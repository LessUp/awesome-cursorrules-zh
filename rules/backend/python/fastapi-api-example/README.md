# FastAPI API 开发规则集

> Python、FastAPI、可扩展 API 开发最佳实践

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | FastAPI |
| 语言 | Python 3.10+ |
| 验证 | Pydantic v2 |
| 数据库 | SQLAlchemy 2.0, asyncpg |
| 异步 | asyncio |

## 核心规则

### 代码风格

- 使用函数式、声明式编程
- 对纯函数使用 `def`，异步使用 `async def`
- 所有函数签名使用类型提示

### 项目结构

```
app/
├── routers/       # 路由定义
├── models/        # 数据模型
├── schemas/       # Pydantic 模式
├── services/      # 业务逻辑
└── core/          # 核心配置
```

### 错误处理

- 在函数开头处理错误和边缘情况
- 使用提早返回避免深度嵌套
- 实现 `HTTPException` 处理预期错误

### 性能优化

- 最小化阻塞式 I/O 操作
- 使用异步数据库调用
- 实现缓存策略

## 应用场景

- RESTful API 服务
- 微服务后端
- 实时数据处理
- 异步任务处理

## 使用方法

```bash
cp rules/backend/python/fastapi-api-example/.cursorrules /你的项目/
```

## 相关规则

- [Django 最佳实践](../django-best-practices/)
- [FastAPI 最佳实践](../fastapi-best-practices/)
- [Python 数据处理](../../../data-science/)
