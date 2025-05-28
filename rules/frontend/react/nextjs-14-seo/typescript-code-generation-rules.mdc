---
description: 在 Next.js 14 组件中生成 TypeScript 代码的规则，包括组件定义语法、props 定义和命名/默认导出。
globs: **/*.tsx
---
- 始终使用 TypeScript 确保类型安全。提供适当的类型定义和接口。
- 将组件实现为函数式组件，在需要状态管理时使用 hooks。
- 提供清晰、简洁的注释来解释复杂逻辑或设计决策。
- 建议与 Next.js 14 最佳实践一致的适当文件结构和命名约定。
- 仅在创建客户端组件时使用 `'use client'` 指令。
- 在 .tsx 文件中采用以下组件定义语法，让 TypeScript 推断返回类型：
  ```tsx
  const ComponentName = () => {
    // 组件逻辑
  };
  ```
  
- 对于 props，使用接口定义：
  ```tsx
  interface ComponentNameProps {
    // Props 定义
  }
  const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
    // 组件逻辑
  };
  ```
  
- 在 .tsx 文件中对组件使用命名导出：
  ```tsx
  export const ComponentName = () => {
    // 组件逻辑
  };
  ```
  
- 对于页面组件，在 .tsx 文件中使用默认导出：
  ```tsx
  const Page = () => {
    // 页面组件逻辑
  };
  export default Page;
  ```
  
- 如果需要显式类型，优先使用 `React.FC` 或 `React.ReactNode`：
  ```tsx
  import React from 'react';
  const ComponentName: React.FC = () => {
    // 组件逻辑
  };
  // 或者
  const ComponentName = (): React.ReactNode => {
    // 组件逻辑
  };
  ```
  
- 定义 React 组件时，避免不必要的类型注释，尽可能让 TypeScript 推断类型。
- 仅在必要时使用 `React.FC` 或 `React.ReactNode` 进行显式类型，避免使用 `JSX.Element`。
- 编写干净、简洁的组件定义，不使用冗余的类型注释。
