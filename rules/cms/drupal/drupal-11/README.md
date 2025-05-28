# Drupal 11 优秀 CursorRules

此仓库为 Drupal 11 项目提供了定制的 **CursorRules** 文件。`.cursorrules` 文件中定义的规则确保 AI 生成的代码遵循 Drupal 11 的编码标准、最佳实践和现代架构，利用 PHP 8.x、Symfony 6 和 Drupal 的 API。

## 目的

此项目的目标是通过为 AI 工具（如 Cursor AI 编辑器或 VS Code 扩展）提供 Drupal 特定的指令，实现一致、安全和高效的开发体验。这有助于确保所有代码建议都：
- 与 Drupal 11 完全兼容。
- 符合 Drupal 的编码和性能标准。
- 使用模块、主题和 API 开发的最佳实践进行设计。

## 内容

- **`.cursorrules`**：包含 AI 行为的详细指令，包括代码结构、命名约定、Drupal API 使用、主题和安全性的指导原则。
- **`README.md`**：提供项目概述、安装说明和贡献指南。

## 安装

1. **复制规则文件：**  
   将 `.cursorrules` 文件放在您的 Drupal 11 项目根目录中（即与您的 `composer.json` 相同的目录）。

2. **在编辑器中启用：**  
   - 如果您使用 Cursor AI 编辑器，请确保启用项目规则（通常通过设置切换）。
   - 对于 VS Code 用户，安装 [Cursor VS Code 扩展](https://marketplace.visualstudio.com/) 并使用其命令面板确保识别 `.cursorrules` 文件。

3. **提交更改：**  
   添加后，将文件提交到您的仓库，以便与整个开发团队共享规则。

## 参考资料

- [GitHub 上的 Awesome CursorRules](https://github.com/awesome-cursorrules/awesome-cursorrules)
- [Drupal 11 文档](https://www.drupal.org/docs/understanding-drupal)
- [Drupal 编码标准 (PSR-12)](https://www.drupal.org/docs/develop/standards)

## 贡献

欢迎贡献和改进。如果您有建议或增强功能，请开启 issue 或提交 pull request。

## 许可证

此项目采用 MIT 许可证。有关更多详细信息，请参阅 [LICENSE](LICENSE) 文件。
