# Flutter 应用开发规则集

> Flutter、Dart、跨平台移动开发最佳实践

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Flutter 3.x |
| 语言 | Dart |
| 状态 | BLoC, Provider |
| UI | Material 3, Cupertino |
| 数据 | Drift, Hive |

## 核心规则

### 项目结构

```
lib/
├── core/           # 核心模块
│   ├── constants/  # 常量
│   ├── theme/      # 主题
│   └── utils/      # 工具
├── features/       # 功能模块
│   └── feature/
│       ├── data/   # 数据层
│       ├── domain/ # 领域层
│       └── presentation/ # 表现层
└── main.dart
```

### 状态管理

```dart
// 使用 BLoC 模式
class UserBloc extends Bloc<UserEvent, UserState> {
  UserBloc() : super(UserInitial()) {
    on<LoadUser>(_onLoadUser);
  }
}
```

### 最佳实践

- 使用 Clean Architecture
- 组件保持小巧专注
- 实现正确的错误处理
- 遵循平台设计指南

## 应用场景

- 跨平台移动应用
- iOS/Android 双端开发
- 企业移动应用
- 消费类应用

## 使用方法

```bash
cp rules/mobile/flutter/flutter-app-expert/.cursorrules /你的项目/
```

## 相关规则

- [React Native](../react-native-expo/)
- [SwiftUI](../swiftui-guidelines/)
