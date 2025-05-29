# 安装指南 📦

本指南将帮助您快速安装和配置 Awesome Cursor Rules 中文版。

## 📋 前置要求

### 必需软件
- **Cursor AI 编辑器** - [下载地址](https://cursor.sh/)
- **Git** - 用于克隆仓库 ([下载地址](https://git-scm.com/))

### 系统要求
- **操作系统**: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)
- **内存**: 至少 4GB RAM (推荐 8GB+)
- **存储**: 至少 1GB 可用空间

## 🚀 安装方法

### 方法一：直接下载 (推荐)

1. **克隆仓库**
   ```bash
   git clone https://github.com/LessUp/awesome-cursorrules-zh.git
   cd awesome-cursorrules-zh
   ```

2. **选择规则集**
   ```bash
   # 查看可用的规则集
   ls rules/frontend/react/
   
   # 复制所需规则到项目
   cp rules/frontend/react/nextjs-typescript/.cursorrules ./your-project/
   ```

3. **在 Cursor 中使用**
   - 用 Cursor 打开您的项目
   - 确保项目根目录包含 `.cursorrules` 文件
   - 开始编码！

### 方法二：使用 VSCode 扩展

1. **安装 Cursor AI**
   - 访问 [cursor.sh](https://cursor.sh/)
   - 下载并安装适合您系统的版本

2. **安装扩展**
   - 安装 [vscode-cursor-rules](https://marketplace.visualstudio.com/items?itemName=BeilunYang.cursor-rules) 扩展

3. **使用扩展**
   - 打开命令面板 (`Cmd+Shift+P` 或 `Ctrl+Shift+P`)
   - 输入 `Cursor Rules: Add .cursorrules`
   - 选择并下载适合的规则文件
   - 根据需要自定义规则

## 🔧 配置步骤

### 1. Cursor AI 设置

#### 启用 .cursorrules 支持
1. 打开 Cursor 设置 (`Cmd/Ctrl + ,`)
2. 搜索 "cursorrules"
3. 确保 "Use .cursorrules" 选项已启用

#### 优化 AI 设置
```json
{
  "cursor.ai.model": "gpt-4",
  "cursor.ai.maxTokens": 2048,
  "cursor.ai.temperature": 0.3,
  "cursor.ai.enableCodeActions": true
}
```

### 2. 项目配置

#### 单技术栈项目
```bash
# React + Next.js 项目
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# Vue 3 项目
cp rules/frontend/vue/composition-api/.cursorrules ./

# Python FastAPI 项目
cp rules/backend/python/fastapi/.cursorrules ./
```

#### 多技术栈项目
```bash
# 方法1: 合并规则文件
cat rules/frontend/react/nextjs-basic/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat rules/backend/nodejs/express-mongodb/.cursorrules >> .cursorrules

# 方法2: 目录特定规则
cp rules/general/code-guidelines/.cursorrules ./
cp rules/frontend/react/nextjs-basic/.cursorrules frontend/
cp rules/backend/nodejs/express-mongodb/.cursorrules backend/
```

### 3. 团队配置

#### 版本控制
```bash
# 将规则文件加入版本控制
git add .cursorrules
git commit -m "添加 Cursor AI 编程规则"
```

#### 团队文档
在项目 README.md 中添加：
```markdown
## 开发环境设置

本项目使用 Cursor AI 编程规则，请确保：
1. 安装 [Cursor AI 编辑器](https://cursor.sh/)
2. 项目根目录包含 `.cursorrules` 文件
3. 遵循规则中的编码规范
```

## ✅ 验证安装

### 检查 Cursor AI
1. 打开 Cursor 编辑器
2. 创建一个新的代码文件
3. 开始输入代码，观察 AI 建议
4. 确认建议符合规则要求

### 检查规则文件
```bash
# 验证文件存在
ls -la .cursorrules

# 检查文件内容
head -10 .cursorrules
```

### 测试 AI 行为
1. 创建一个简单的函数
2. 观察 AI 的命名建议
3. 检查代码结构建议
4. 验证错误处理建议

## 🐛 常见问题

### Q: 规则不生效怎么办？
A: 
1. 确保 `.cursorrules` 文件在项目根目录
2. 重启 Cursor 编辑器
3. 检查 Cursor 设置中是否启用了规则支持

### Q: 如何更新规则集？
A:
```bash
# 拉取最新版本
git pull origin main

# 重新复制规则文件
cp rules/frontend/react/nextjs-typescript/.cursorrules ./
```

### Q: 可以自定义规则吗？
A: 可以！编辑 `.cursorrules` 文件，添加项目特定的规则：
```yaml
# 在文件末尾添加
- 使用公司特定的命名约定
- 遵循团队的代码审查标准
- 集成项目特定的工具和库
```

## 🔄 更新和维护

### 定期更新
```bash
# 每月检查更新
cd awesome-cursorrules-zh
git pull origin main

# 查看新增规则集
git log --oneline --since="1 month ago"
```

### 备份配置
```bash
# 备份当前规则
cp .cursorrules .cursorrules.backup

# 恢复备份
cp .cursorrules.backup .cursorrules
```

## 📞 获取帮助

如果遇到问题：
1. 查看 [故障排除指南](./troubleshooting.md)
2. 搜索 [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues)
3. 提交新的 Issue 报告问题
4. 参与 [社区讨论](https://github.com/LessUp/awesome-cursorrules-zh/discussions)

---

🎉 **安装完成！** 现在您可以享受 AI 辅助的中文编程体验了！
