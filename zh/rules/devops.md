# DevOps 规则

DevOps 运维开发相关的 Cursor AI 编程规则集合。

## 容器化

| 规则 | 说明 |
|------|------|
| [docker-containerization](/rules/devops/docker-containerization/) | Docker 容器化规范 |
| [python-containerization](/rules/devops/python-containerization/) | Python 容器化规范 |

## Kubernetes

| 规则 | 说明 |
|------|------|
| [kubernetes-mkdocs-documentation](/rules/devops/kubernetes/kubernetes-mkdocs-documentation/) | Kubernetes MkDocs 文档规范 |

## CI/CD

| 规则 | 说明 |
|------|------|
| [ci-cd-pipelines](/rules/devops/ci-cd-pipelines/) | CI/CD 管道规范 |
| [github-code-quality](/rules/devops/github-code-quality/) | GitHub 代码质量规范 |

## 基础设施即代码

| 规则 | 说明 |
|------|------|
| [terraform-iac](/rules/devops/terraform-iac/) | Terraform IaC 规范 |

## 无服务器

| 规则 | 说明 |
|------|------|
| [serverless](/rules/devops/serverless/) | Serverless 无服务器规范 |

## 可观测性

| 规则 | 说明 |
|------|------|
| [observability](/rules/devops/observability/) | 可观测性规范 |
| [prometheus-grafana-monitoring](/rules/devops/prometheus-grafana-monitoring/) | Prometheus + Grafana 监控规范 |

## 服务网格

| 规则 | 说明 |
|------|------|
| [service-mesh](/rules/devops/service-mesh/) | 服务网格规范 |

## 混沌工程

| 规则 | 说明 |
|------|------|
| [chaos-engineering](/rules/devops/chaos-engineering/) | 混沌工程规范 |

## 使用方法

1. 选择适合你项目的规则
2. 将 `.cursorrules` 文件复制到项目根目录
3. 在 Cursor AI 中启用项目规则
4. 开始编码，AI 将遵循规则生成代码
