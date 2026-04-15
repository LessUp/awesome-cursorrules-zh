# 安装指南

> 完整的环境安装与配置说明

## 目录

- [系统要求](#系统要求)
- [安装 Cursor 编辑器](#安装-cursor-编辑器)
- [获取规则集](#获取规则集)
- [项目配置](#项目配置)
- [验证安装](#验证安装)
- [更新维护](#更新维护)

---

## 系统要求

### 操作系统

| 系统 | 最低版本 | 推荐版本 |
|------|----------|----------|
| Windows | 10 | 11 |
| macOS | 10.15 (Catalina) | 14 (Sonoma) |
| Linux | Ubuntu 18.04 | Ubuntu 22.04 |

### 硬件要求

| 组件 | 最低要求 | 推荐配置 |
|------|----------|----------|
| 内存 | 4 GB | 8 GB+ |
| 存储 | 500 MB | 1 GB+ |
| CPU | 双核 | 四核+ |

### 必需软件

- **Git** - [下载地址](https://git-scm.com/downloads)
- **Cursor AI** - [下载地址](https://cursor.sh/)

---

## 安装 Cursor 编辑器

### Windows

```powershell
# 方法一：官网下载
# 访问 https://cursor.sh/ 下载安装包

# 方法二：使用 winget
winget install cursor
```

### macOS

```bash
# 方法一：官网下载
# 访问 https://cursor.sh/ 下载 .dmg 文件

# 方法二：使用 Homebrew
brew install --cask cursor
```

### Linux

```bash
# AppImage 安装
wget https://downloader.cursor.sh/linux/appImage/x64 -O cursor.AppImage
chmod +x cursor.AppImage
./cursor.AppImage

# 或使用 snap
sudo snap install cursor
```

### 首次启动配置

1. 打开 Cursor
2. 登录账户（可选，但推荐）
3. 选择 AI 模型偏好设置
4. 完成初始设置向导

---

## 获取规则集

### 方法一：Git 克隆（推荐）

```bash
# 克隆仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 进入目录
cd awesome-cursorrules-zh

# 更新到最新版本
git pull origin main
```

### 方法二：下载压缩包

```bash
# 下载 ZIP
wget https://github.com/LessUp/awesome-cursorrules-zh/archive/refs/heads/main.zip

# 解压
unzip main.zip
cd awesome-cursorrules-zh-main
```

### 方法三：GitHub CLI

```bash
# 使用 gh 命令
gh repo clone LessUp/awesome-cursorrules-zh
cd awesome-cursorrules-zh
```

---

## 项目配置

### 快速配置

```bash
# 1. 进入你的项目目录
cd /你的项目路径

# 2. 复制合适的规则文件
cp /path/to/awesome-cursorrules-zh/rules/frontend/react/nextjs-typescript/.cursorrules ./

# 3. 验证文件存在
ls -la .cursorrules
```

### 完整配置流程

**步骤 1：确定技术栈**

```bash
# 列出可用的前端规则
ls /path/to/awesome-cursorrules-zh/rules/frontend/react/

# 列出可用的后端规则
ls /path/to/awesome-cursorrules-zh/rules/backend/python/
```

**步骤 2：复制规则文件**

```bash
# 单一规则
cp rules/frontend/react/nextjs-typescript/.cursorrules ./your-project/

# 多规则合并
cat rules/frontend/react/nextjs-typescript/.cursorrules > ./your-project/.cursorrules
echo "" >> ./your-project/.cursorrules
cat rules/backend/python/fastapi-api-example/.cursorrules >> ./your-project/.cursorrules
```

**步骤 3：Cursor 设置**

在 Cursor 中启用规则支持：

1. 打开设置 (`Ctrl/Cmd + ,`)
2. 搜索 "cursorrules"
3. 启用 "Use .cursorrules" 选项
4. 重启 Cursor

### 推荐配置

```json
// Cursor 设置 (settings.json)
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.maxTokens": 4096,
  "cursor.ai.temperature": 0.2,
  "cursor.ai.enableCodeActions": true,
  "cursor.ai.useCursorRules": true
}
```

---

## 验证安装

### 检查清单

```bash
# 1. 检查 Cursor 版本
cursor --version  # 或在 Cursor 中查看 Help > About

# 2. 检查规则文件
ls -la .cursorrules
cat .cursorrules | head -20

# 3. 检查文件编码
file .cursorrules  # 应显示: UTF-8 Unicode text
```

### 功能测试

1. **打开项目** - 用 Cursor 打开包含 `.cursorrules` 的项目
2. **创建测试文件** - 新建一个代码文件
3. **触发 AI 建议** - 开始输入代码，观察 AI 建议
4. **验证规则生效** - 检查建议是否符合规则要求

### 预期效果

| 检查项 | 预期结果 |
|--------|----------|
| AI 命名建议 | 符合规则中定义的命名规范 |
| 代码结构 | 遵循规则中的架构模式 |
| 错误处理 | 符合规则中的错误处理策略 |
| 注释风格 | 符合规则中的文档规范 |

---

## 更新维护

### 更新规则集

```bash
# 进入规则集目录
cd awesome-cursorrules-zh

# 拉取最新更新
git pull origin main

# 查看更新内容
git log --oneline -10
```

### 版本锁定

```bash
# 锁定到特定版本
git checkout v1.5.0

# 或创建自己的分支
git checkout -b my-custom-rules
```

### 备份配置

```bash
# 备份当前规则
cp .cursorrules .cursorrules.backup

# 恢复备份
cp .cursorrules.backup .cursorrules

# 从 Git 恢复
git checkout HEAD -- .cursorrules
```

---

## 常见安装问题

### 问题：Cursor 无法识别 .cursorrules

**解决方案：**

1. 确认文件在项目根目录（不是子目录）
2. 检查文件名是否正确（注意前面的点）
3. 重启 Cursor 编辑器
4. 检查设置中是否启用了规则支持

### 问题：规则不生效

**解决方案：**

```bash
# 检查文件编码
file .cursorrules

# 如果不是 UTF-8，转换编码
iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.utf8
mv .cursorrules.utf8 .cursorrules
```

### 问题：AI 建议不符合规则

**解决方案：**

1. 检查规则文件内容是否正确
2. 确认规则语法无误
3. 尝试简化规则文件
4. 检查是否存在规则冲突

---

> 📖 **相关文档**：[快速开始](./getting-started.md) | [最佳实践](./best-practices.md) | [故障排除](./troubleshooting.md)
