# Next.js + TypeScript 规则集

> React、Next.js App Router、TypeScript、Tailwind CSS 开发指南

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS, Daisy UI |
| 状态 | React Context, useReducer |
| 数据 | React Query, SWR |

## 核心规则

### 代码风格

- 使用函数式和声明式编程模式
- 避免类，使用函数组件和 Hooks
- 使用描述性变量名（如 `isLoading`, `hasError`）

### 项目结构

```
src/
├── app/           # Next.js App Router 页面
├── components/    # React 组件
├── hooks/         # 自定义 Hooks
├── lib/           # 工具函数
└── types/         # TypeScript 类型
```

### 性能优化

- 优先使用 React 服务器组件
- 对非关键组件使用动态加载
- 优化图像（WebP 格式、懒加载）

### 关键约定

1. 使用 `nuqs` 管理 URL 状态
2. 优化 Web Vitals（LCP、CLS、FID）
3. 限制 `use client` 的使用

## 应用场景

- 全栈 Web 应用
- SaaS 平台
- 电商网站
- 内容管理系统
- 在线学习平台

## 使用方法

```bash
cp rules/frontend/react/nextjs-typescript/.cursorrules /你的项目/
```

## 相关规则

- [React TypeScript](../react-typescript/)
- [Next.js Tailwind](../nextjs-tailwind/)
- [React Query](../react-query/)
