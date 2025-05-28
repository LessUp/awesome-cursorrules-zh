# GitHub 仓库设置指南

## 🔧 创建远程仓库

### 方法1: 使用 GitHub CLI (推荐)
```bash
# 如果已安装 GitHub CLI
gh repo create awesome-cursorrules-zh --public --description "专为中文开发者优化的 Cursor AI 编程规则集合" --add-readme=false

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git

# 推送代码
git branch -M main
git push -u origin main
```

### 方法2: 手动创建
1. 访问 https://github.com/new
2. 仓库名称: `awesome-cursorrules-zh`
3. 描述: `专为中文开发者优化的 Cursor AI 编程规则集合`
4. 设置为 Public
5. 不要初始化 README (我们已有)
6. 点击 "Create repository"

然后执行:
```bash
git remote add origin https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git
git branch -M main
git push -u origin main
```

## ⚙️ 仓库设置配置

### 基本设置
- **Description**: 专为中文开发者优化的 Cursor AI 编程规则集合
- **Website**: (可选) 项目主页链接
- **Topics**: `cursor-ai`, `chinese`, `programming-rules`, `development`, `ai-assistant`, `中文`, `编程规范`

### 功能启用
- ✅ Issues
- ✅ Discussions  
- ✅ Wiki
- ✅ Projects
- ✅ Actions

### 分支保护
- 保护 `main` 分支
- 要求 PR 审查
- 要求状态检查通过

### 标签建议
- `cursor-ai`
- `chinese` 
- `programming-rules`
- `development`
- `ai-assistant`
- `typescript`
- `react`
- `vue`
- `nodejs`
- `python`
- `中文`
- `编程规范`
- `开发工具`

## 📋 推送命令
```bash
# 确保在项目根目录
cd awesome-cursorrules-zh

# 检查当前状态
git status

# 如果有未提交的更改，先提交
git add .
git commit -m "final: 准备发布到 GitHub"

# 设置远程仓库 (替换 YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/awesome-cursorrules-zh.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```
