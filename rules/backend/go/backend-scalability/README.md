# Go 后端可扩展性规则集

> Go 语言、后端架构、微服务、分布式系统

## 技术栈

| 类别 | 技术 |
|------|------|
| 语言 | Go |
| API | REST, gRPC |
| 数据库 | PostgreSQL, MongoDB |
| 消息队列 | Kafka, RabbitMQ |
| 容器 | Docker, Kubernetes |

## 核心规则

### 并发模型

```go
// 使用 goroutine 和 channel
func processItems(items []Item) []Result {
    results := make(chan Result, len(items))
    for _, item := range items {
        go func(i Item) {
            results <- processItem(i)
        }(item)
    }
    // 收集结果
}
```

### 项目结构

```
cmd/              # 应用入口
internal/         # 内部包
  ├── handlers/   # HTTP 处理器
  ├── services/   # 业务逻辑
  └── repository/ # 数据访问
pkg/              # 公共包
configs/          # 配置文件
```

### 性能优化

- 内存分配优化
- GC 调优
- 连接池管理
- 热点路径分析

### 安全最佳实践

- 输入验证
- SQL 注入防护
- XSS 防护
- 认证授权

## 应用场景

- 高并发 API 服务
- 微服务架构
- 分布式系统
- 云原生应用

## 使用方法

```bash
cp rules/backend/go/backend-scalability/.cursorrules /你的项目/
```

## 相关规则

- [Java Spring Boot](../java/springboot-jpa/)
- [NestJS](../nodejs/nestjs-typescript/)
