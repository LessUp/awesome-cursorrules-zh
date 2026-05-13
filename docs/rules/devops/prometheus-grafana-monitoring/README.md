# 云原生监控体系规则集

## 可构建内容

* **Kubernetes 集群监控方案**：包含 Prometheus Operator 部署、自定义指标采集和 Grafana 仪表板配置
* **应用性能监控(APM)体系**：集成 OpenTelemetry 实现分布式追踪和指标采集
* **告警管理平台**：基于 AlertManager 构建多级告警路由和静默规则
* **SLO 监控框架**：实现基于 Error Budget 的服务等级目标监控

## 规则特点

- 兼容 Prometheus 2.0+ 和 Grafana 9.0+
- 提供指标命名规范 (METRIC_NAME{labels})
- 包含告警规则模板 (CPU/Memory/Disk 等基础资源)
- 支持多租户监控场景
