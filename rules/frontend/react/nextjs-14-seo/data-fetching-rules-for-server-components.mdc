---
description: Next.js 14 中服务器组件的数据获取规则。
globs: **/app/**/*.tsx
---
- 对于服务器组件中的数据获取（在 .tsx 文件中）：
  ```tsx
  async function getData() {
    const res = await fetch('https://api.example.com/data', { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('获取数据失败')
    return res.json()
  }
  export default async function Page() {
    const data = await getData()
    // 使用数据渲染组件
  }
  ```
