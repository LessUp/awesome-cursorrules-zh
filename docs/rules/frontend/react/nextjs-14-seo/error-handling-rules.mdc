---
description: 使用 error.tsx 文件在 Next.js 14 中实现错误处理的规则。
globs: **/app/error.tsx
---
- 对于错误处理（在 error.tsx 中）：
  ```tsx
  'use client'
  export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
      <div>
        <h2>出现了错误！</h2>
        <button onClick={() => reset()}>重试</button>
      </div>
    );
  }
  ```
