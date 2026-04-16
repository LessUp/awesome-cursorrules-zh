# 故障排除指南

> 快速诊断和解决常见问题

## 目录

- [快速诊断](#快速诊断)
- [常见问题解决](#常见问题解决)
- [诊断工具](#诊断工具)
- [高级故障排除](#高级故障排除)
- [获取帮助](#获取帮助)

---

## 快速诊断

### 5 分钟检查清单

```bash
# 1. 检查文件是否存在
ls -la .cursorrules

# 2. 检查文件位置（必须在项目根目录）
pwd

# 3. 检查文件内容
head -10 .cursorrules

# 4. 检查文件编码
file .cursorrules

# 5. 检查文件权限
stat .cursorrules
```

### 一键诊断脚本

```bash
#!/bin/bash
# 保存为 diagnose.sh 并运行

echo "=== Cursor Rules 诊断工具 ==="
echo ""

# 检查文件存在
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules 文件存在"
else
    echo "❌ .cursorrules 文件不存在"
    exit 1
fi

# 检查文件位置
if [ -d ".git" ]; then
    echo "✅ 文件位于项目根目录"
else
    echo "⚠️ 可能不在 Git 项目根目录"
fi

# 检查文件编码
ENCODING=$(file -b --mime-encoding .cursorrules)
if [ "$ENCODING" = "utf-8" ] || [ "$ENCODING" = "us-ascii" ]; then
    echo "✅ 文件编码正确: $ENCODING"
else
    echo "❌ 文件编码异常: $ENCODING"
fi

# 检查文件大小
LINES=$(wc -l < .cursorrules)
if [ "$LINES" -lt 5 ]; then
    echo "⚠️ 文件内容较少 ($LINES 行)，可能不完整"
else
    echo "✅ 文件内容正常 ($LINES 行)"
fi

echo ""
echo "=== 诊断完成 ==="
```

---

## 常见问题解决

### 问题 1：规则不生效

**症状：** AI 建议不符合 `.cursorrules` 中定义的规则

**诊断步骤：**

```bash
# 步骤 1：确认文件位置
ls -la .cursorrules
# 应该在项目根目录，不是子目录

# 步骤 2：检查 Cursor 设置
# 打开 Cursor 设置，搜索 "cursorrules"
# 确保 "Use .cursorrules" 选项已启用

# 步骤 3：重启 Cursor
# 完全关闭 Cursor，然后重新打开
```

**解决方案：**

| 原因 | 解决方法 |
|------|----------|
| 文件不在根目录 | 移动到项目根目录 |
| 设置未启用 | 在设置中启用 "Use .cursorrules" |
| 编辑器缓存 | 重启 Cursor |
| 文件编码错误 | 转换为 UTF-8 编码 |

### 问题 2：文件格式错误

**症状：** `.cursorrules` 文件无法被正确解析

**诊断步骤：**

```bash
# 检查编码
file .cursorrules

# 检查隐藏字符
cat -A .cursorrules | head -20

# 检查行尾符
od -c .cursorrules | head -5
```

**解决方案：**

```bash
# 修复编码问题
iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.fixed
mv .cursorrules.fixed .cursorrules

# 修复行尾符（Windows -> Unix）
dos2unix .cursorrules

# 或使用 sed
sed -i 's/\r$//' .cursorrules
```

### 问题 3：规则冲突

**症状：** 合并多个规则后 AI 建议不一致

**诊断步骤：**

```bash
# 查找重复定义
grep -n "命名" .cursorrules
grep -n "编码" .cursorrules
grep -n "错误" .cursorrules
```

**解决方案：**

```bash
# 方案 1：使用单一规则集测试
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# 方案 2：逐步合并
# 先添加一个规则，测试通过后再添加下一个

# 方案 3：解决冲突
# 手动编辑 .cursorrules，保留一致的规则
```

### 问题 4：性能问题

**症状：** Cursor 响应变慢

**诊断步骤：**

```bash
# 检查文件大小
ls -lh .cursorrules

# 检查行数
wc -l .cursorrules
```

**解决方案：**

```bash
# 精简规则文件
# 1. 删除不必要的注释
# 2. 移除重复的规则
# 3. 只保留核心规则

# 建议限制
# - 文件大小：< 50 KB
# - 行数：< 500 行
```

### 问题 5：翻译问题

**症状：** 技术术语翻译不一致或表述不清

**解决方案：**

| 问题类型 | 处理方法 |
|----------|----------|
| 术语不一致 | 统一使用标准翻译，专有名词保留英文 |
| 代码格式错乱 | 检查代码块标记和缩进 |
| 表述不清 | 调整语序，拆分长句 |

---

## 诊断工具

### 规则文件验证器

```bash
#!/bin/bash
# validate_cursorrules.sh

FILE=".cursorrules"

echo "验证 .cursorrules 文件..."

# 检查文件存在
if [ ! -f "$FILE" ]; then
    echo "❌ 错误：文件不存在"
    exit 1
fi

# 检查文件不为空
if [ ! -s "$FILE" ]; then
    echo "❌ 错误：文件为空"
    exit 1
fi

# 检查编码
ENCODING=$(file -b --mime-encoding "$FILE")
if [ "$ENCODING" != "utf-8" ] && [ "$ENCODING" != "us-ascii" ]; then
    echo "⚠️ 警告：编码可能有问题 ($ENCODING)"
fi

# 检查内容
LINES=$(wc -l < "$FILE")
echo "📄 文件行数：$LINES"

SIZE=$(wc -c < "$FILE")
echo "📦 文件大小：$SIZE 字节"

echo "✅ 验证完成"
```

### 环境检查

```bash
#!/bin/bash
# check_environment.sh

echo "=== 环境检查 ==="

# 检查 Cursor
if command -v cursor &> /dev/null; then
    echo "✅ Cursor 已安装"
else
    echo "⚠️ Cursor 未在 PATH 中找到"
fi

# 检查 Git
if command -v git &> /dev/null; then
    echo "✅ Git 已安装: $(git --version)"
else
    echo "❌ Git 未安装"
fi

# 检查项目结构
if [ -d ".git" ]; then
    echo "✅ Git 仓库"
else
    echo "⚠️ 不是 Git 仓库"
fi

# 检查规则文件
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules 存在"
else
    echo "❌ .cursorrules 不存在"
fi
```

---

## 高级故障排除

### 调试模式

```bash
# 启用 Cursor 日志
export CURSOR_LOG_LEVEL=debug

# 查看 Cursor 日志
# macOS/Linux
tail -f ~/.cursor/logs/main.log

# Windows
Get-Content -Tail 50 $env:APPDATA\Cursor\logs\main.log
```

### 完全重置

```bash
# 备份当前配置
cp .cursorrules .cursorrules.backup

# 删除规则文件
rm .cursorrules

# 从规则集重新复制
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# 重启 Cursor
```

### 清除缓存

```bash
# macOS/Linux
rm -rf ~/.cursor/cache

# Windows
Remove-Item -Recurse -Force $env:APPDATA\Cursor\cache
```

---

## 获取帮助

### 自助资源

| 资源 | 链接 |
|------|------|
| 快速开始 | [getting-started.md](./getting-started.md) |
| 最佳实践 | [best-practices.md](./best-practices.md) |
| 安装指南 | [installation-guide.md](./installation-guide.md) |

### 社区支持

| 渠道 | 用途 |
|------|------|
| [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) | 报告 Bug、请求功能 |
| [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions) | 提问、分享经验 |

### 问题报告模板

提交 Issue 时，请包含以下信息：

```markdown
## 问题描述
[简要描述问题]

## 环境信息
- 操作系统：[如 Windows 11]
- Cursor 版本：[如 0.45.0]
- 规则集：[如 frontend/react/nextjs-typescript]

## 复现步骤
1. 
2. 
3. 

## 期望行为
[描述期望的结果]

## 实际行为
[描述实际发生的情况]

## 附加信息
- .cursorrules 文件内容（或截图）
- 错误信息
- 相关日志
```

---

> 💡 **提示**：大多数问题可以通过以下三步解决：
>
> 1. 确认 `.cursorrules` 在项目根目录
> 2. 重启 Cursor 编辑器
> 3. 检查文件编码为 UTF-8
