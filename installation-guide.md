# 安装指南

> ⚙️ 完整的环境安装与配置说明

## 目录

- [系统要求](#系统要求)
- [安装 Cursor 编辑器](#安装-cursor-编辑器)
- [获取规则集](#获取规则集)
- [项目配置](#项目配置)
- [验证安装](#验证安装)
- [更新与维护](#更新与维护)

---

## 系统要求

### 操作系统

| 系统 | 最低版本 | 推荐版本 |
|------|----------|----------|
| Windows | Windows 10 | Windows 11 |
| macOS | 10.15 (Catalina) | 14 (Sonoma) |
| Linux | Ubuntu 18.04 | Ubuntu 22.04 LTS |

### 硬件要求

| 组件 | 最低要求 | 推荐配置 |
|------|----------|----------|
| 内存 | 4 GB | 8 GB+ |
| 存储空间 | 500 MB | 1 GB+ |
| 处理器 | 双核 | 四核+ |
| 网络 | 稳定连接 | 宽带连接 |

### 必需软件

| 软件 | 用途 | 下载 |
|------|------|------|
| Cursor AI | AI 编程编辑器 | [cursor.sh](https://cursor.sh/) |
| Git | 版本控制 | [git-scm.com](https://git-scm.com/downloads) |

---

## 安装 Cursor 编辑器

### Windows

**方法一：官网下载（推荐）**

1. 访问 [cursor.sh](https://cursor.sh/)
2. 点击 "Download" 按钮
3. 运行下载的 `.exe` 安装程序
4. 按向导完成安装

**方法二：使用 Winget**

```powershell
winget install cursor
```

**方法三：使用 Chocolatey**

```powershell
choco install cursor
```

### macOS

**方法一：官网下载（推荐）**

1. 访问 [cursor.sh](https://cursor.sh/)
2. 下载 `.dmg` 文件
3. 将 Cursor 拖入 Applications 文件夹

**方法二：使用 Homebrew**

```bash
brew install --cask cursor
```

### Linux

**方法一：AppImage（推荐）**

```bash
# 下载 AppImage
wget https://downloader.cursor.sh/linux/appImage/x64 -O cursor.AppImage

# 添加执行权限
chmod +x cursor.AppImage

# 运行
./cursor.AppImage
```

**方法二：使用 Snap**

```bash
sudo snap install cursor
```

**方法三：Ubuntu/Debian 软件包**

```bash
# 下载 .deb 包
wget https://cursor.sh/download/deb -O cursor.deb

# 安装
sudo dpkg -i cursor.deb
sudo apt-get install -f  # 修复依赖
```

### 首次启动配置

1. 打开 Cursor 应用程序
2. 登录 Cursor 账户（可选，但推荐用于同步设置）
3. 选择 AI 模型偏好：
   - Claude（推荐）：代码理解能力强
   - GPT-4：通用编程任务
   - 其他模型根据需要选择
4. 完成初始设置向导
5. 建议启用规则支持：
   - 打开设置（`Ctrl/Cmd + ,`）
   - 搜索 "cursorrules"
   - 启用 "Use .cursorrules" 选项

---

## 获取规则集

### 方法一：Git 克隆（推荐）

```bash
# 克隆仓库
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 进入目录
cd awesome-cursorrules-zh

# 查看可用规则
ls rules/
```

### 方法二：下载压缩包

```bash
# 下载最新版本
wget https://github.com/LessUp/awesome-cursorrules-zh/archive/refs/heads/main.zip

# 解压
unzip main.zip
cd awesome-cursorrules-zh-main
```

### 方法三：GitHub CLI

```bash
# 使用 gh 命令（需先安装 GitHub CLI）
gh repo clone LessUp/awesome-cursorrules-zh

cd awesome-cursorrules-zh
```

---

## 项目配置

### 基本配置流程

**步骤 1：确定技术栈**

```bash
# 列出前端规则
ls rules/frontend/react/

# 列出后端规则
ls rules/backend/python/

# 列出移动端规则
ls rules/mobile/
```

**步骤 2：复制规则文件**

```bash
# 进入你的项目目录
cd /path/to/your/project

# 复制单个规则
cp /path/to/awesome-cursorrules-zh/rules/frontend/react/nextjs-typescript/.cursorrules ./

# 或合并多个规则
cat /path/to/awesome-cursorrules-zh/rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat /path/to/awesome-cursorrules-zh/rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**步骤 3：验证配置**

```bash
# 检查文件是否存在
ls -la .cursorrules

# 查看文件内容前 30 行
cat .cursorrules | head -30

# 检查文件编码（应为 UTF-8）
file .cursorrules
```

### Cursor 编辑器配置

推荐的 Cursor 设置（`settings.json`）：

```json
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.maxTokens": 4096,
  "cursor.ai.temperature": 0.2,
  "cursor.ai.enableCodeActions": true,
  "cursor.ai.useCursorRules": true
}
```

设置路径：
- **Windows**: `%APPDATA%/Cursor/User/settings.json`
- **macOS**: `~/Library/Application Support/Cursor/User/settings.json`
- **Linux**: `~/.config/Cursor/User/settings.json`

### 国内用户配置

如需使用代理访问 AI 服务：

1. 打开 Cursor 设置
2. 搜索 "Proxy"
3. 配置代理服务器地址和端口
4. 若需认证，填写用户名和密码

---

## 验证安装

### 功能验证清单

- [ ] Cursor 成功启动并正常运行
- [ ] `.cursorrules` 文件位于项目根目录
- [ ] 启用 "Use .cursorrules" 设置
- [ ] 文件编码为 UTF-8

### 验证命令

```bash
# 1. 检查文件存在
ls -la .cursorrules

# 2. 检查文件内容
head -20 .cursorrules

# 3. 检查文件编码
file .cursorrules
# 预期输出: .cursorrules: UTF-8 Unicode text

# 4. 检查文件大小
ls -lh .cursorrules
# 建议: 小于 50KB
```

### 功能测试

1. **打开项目**：用 Cursor 打开包含 `.cursorrules` 的项目
2. **创建测试文件**：新建代码文件（如 `test.tsx`）
3. **触发 AI 建议**：输入代码，观察 AI 响应
4. **验证规则生效**：
   - 命名建议是否符合规则
   - 代码风格是否一致
   - 架构模式是否正确

---

## 更新与维护

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

如需锁定到特定版本：

```bash
# 查看可用标签
git tag

# 切换到特定版本
git checkout v2.0.0

# 或创建自定义分支
git checkout -b my-custom-rules
```

### 备份与恢复

```bash
# 备份当前规则
cp .cursorrules .cursorrules.backup

# 恢复备份
cp .cursorrules.backup .cursorrules

# 从 Git 恢复
git checkout HEAD -- .cursorrules
```

### 清理缓存

如遇到异常行为，可尝试清除缓存：

```bash
# macOS/Linux
rm -rf ~/.cursor/cache

# Windows (PowerShell)
Remove-Item -Recurse -Force $env:APPDATA\Cursor\cache
```

---

## 常见问题

### Q: Cursor 提示需要登录？

Cursor 的部分功能需要登录，但 `.cursorrules` 功能在离线状态下也可使用。登录后可同步设置和历史记录。

### Q: 规则文件放错位置会怎样？

Cursor 只在项目根目录查找 `.cursorrules` 文件。放在子目录将无法生效。

### Q: 如何验证规则是否生效？

请 AI 助手"介绍一下当前项目的编码规范"，如果回复内容与 `.cursorrules` 文件内容一致，说明规则已生效。

---

<div align="center">

**[⬆ 返回顶部](#安装指南)** | **[📚 返回文档首页](./README.md)**

</div>
