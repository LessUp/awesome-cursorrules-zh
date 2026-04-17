# MobX 状态管理 .cursorrules 提示文件

## 你可以构建什么

- **复杂状态管理应用**：需要管理大量状态的 React 应用
- **实时协作应用**：多人协作、实时更新的应用
- **数据密集型应用**：需要复杂状态派生和计算的应用

## 概要

这个规则文件为使用 MobX 进行状态管理的 React + TypeScript 项目提供了最佳实践指导。它涵盖了 Store 定义、状态修改、组件集成和依赖注入等方面。

## 核心特性

- 使用 `makeAutoObservable` 定义可观察状态
- 通过 `@action` 修改状态
- 使用 `observer` 高阶组件响应状态变化
- 使用 RootStore 聚合所有子 store

## 技术栈

- React
- TypeScript
- MobX / MobX React Lite
