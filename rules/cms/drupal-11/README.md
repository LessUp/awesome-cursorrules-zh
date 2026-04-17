# Drupal 11 Awesome CursorRules

该仓库提供了一个定制的 **CursorRules** 文件，专为 Drupal 11 项目设计。`.cursorrules` 文件中定义的规则确保 AI 生成的代码遵循 Drupal 11 的编码标准、最佳实践和现代架构，充分利用 PHP 8.x、Symfony 6 和 Drupal 的 API。

## 目的

本项目旨在通过为 AI 工具（如 Cursor AI 编辑器或 VS Code 扩展）提供 Drupal 特定的指导，实现一致、安全且高效的开发体验。这有助于确保所有代码建议：
- 完全兼容 Drupal 11
- 符合 Drupal 的编码和性能标准
- 采用模块、主题和 API 开发的最佳实践设计

## 内容

- **`.cursorrules`**：包含 AI 行为的详细指令，包括代码结构、命名规范、Drupal API 使用、主题和安全指南
- **`README.md`**：提供项目概览、安装说明和贡献指南

## 安装

1. **复制规则文件：**  
   将 `.cursorrules` 文件放在 Drupal 11 项目的根目录（即与 `composer.json` 相同的目录）

2. **在编辑器中启用：**  
   - 如果使用 Cursor AI 编辑器，请确保项目规则已启用（通常通过设置切换）
   - VS Code 用户请安装 [Cursor VS Code 扩展](https://marketplace.visualstudio.com/)，并使用其命令面板确保 `.cursorrules` 文件被识别

3. **提交更改：**  
   添加文件后，将其提交到仓库，以便与整个开发团队共享规则

## 参考

- [GitHub 上的 Awesome CursorRules](https://github.com/awesome-cursorrules/awesome-cursorrules)
- [Drupal 11 文档](https://www.drupal.org/docs/understanding-drupal)
- [Drupal 编码标准 (PSR-12)](https://www.drupal.org/docs/develop/standards)

## 贡献

欢迎贡献和改进。如果您有建议或改进意见，请提交 issue 或 pull request

## 许可

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件
