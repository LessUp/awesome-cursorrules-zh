# 故障排除指南

> 🔧 快速诊断和解决常见问题

## 目录

- [快速诊断](#快速诊断)
- [常见问题解决](#常见问题解决)
- [诊断工具](#诊断工具)
- [高级故障排除](#高级故障排除)
- [获取帮助](#获取帮助)

---

## 快速诊断

### 5 分钟检查清单

运行以下命令快速排查问题：

```bash
# 1. 检查文件是否存在
ls -la .cursorrules

# 2. 检查文件位置（必须在项目根目录）
pwd

# 3. 检查文件内容（确保有实际内容）
head -20 .cursorrules

# 4. 检查文件编码（应为 UTF-8）
file .cursorrules

# 5. 检查文件权限
stat .cursorrules
```

### 一键诊断脚本

保存以下脚本为 `diagnose.sh`：

```bash
#!/bin/bash
# Cursor Rules 诊断工具

echo "=== Cursor Rules 诊断工具 ==="
echo ""

# 检查文件存在
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules 文件存在"
else
    echo "❌ .cursorrules 文件不存在"
    echo "   解决: cp rules/frontend/react/nextjs-typescript/.cursorrules ./"
    exit 1
fi

# 检查文件位置
if [ -d ".git" ]; then
    echo "✅ 文件位于 Git 项目根目录"
else
    echo "⚠️  可能不在 Git 项目根目录"
    echo "   提示: 确保 .cursorrules 在项目根目录，非子目录"
fi

# 检查文件编码
ENCODING=$(file -b --mime-encoding .cursorrules)
if [ "$ENCODING" = "utf-8" ] || [ "$ENCODING" = "us-ascii" ]; then
    echo "✅ 文件编码正确: $ENCODING"
else
    echo "⚠️  文件编码异常: $ENCODING"
    echo "   解决: iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.fixed"
fi

# 检查文件大小
LINES=$(wc -l < .cursorrules)
if [ "$LINES" -lt 5 ]; then
    echo "⚠️  文件内容较少 ($LINES 行)，可能不完整"
else
    echo "✅ 文件内容正常 ($LINES 行)"
fi

# 检查文件权限
if [ -r ".cursorrules" ]; then
    echo "✅ 文件可读"
else
    echo "❌ 文件不可读"
    echo "   解决: chmod 644 .cursorrules"
fi

echo ""
echo "=== 诊断完成 ==="
```

使用方法：

```bash
chmod +x diagnose.sh
./diagnose.sh
```

---

## 常见问题解决

### 问题 1：规则不生效

**症状**：AI 建议不符合 `.cursorrules` 中的规则

**原因排查**：

| 检查项 | 正常状态 | 解决方法 |
|--------|----------|----------|
| 文件位置 | 项目根目录 | 移动到根目录 |
| 设置启用 | "Use .cursorrules" 为 ON | 在设置中启用 |
| 文件名 | `.cursorrules`（点前缀） | 检查文件名 |
| 文件编码 | UTF-8 | 转换编码 |

**解决步骤**：

```bash
# 步骤 1：确认文件位置
ls -la .cursorrules
# 应该在项目根目录，不能在子目录

# 步骤 2：重启 Cursor
# 完全关闭 Cursor，然后重新打开

# 步骤 3：检查设置
# Cursor > Settings > 搜索 "cursorrules" > 启用开关
```

### 问题 2：文件编码错误

**症状**：中文内容显示乱码

**诊断**：

```bash
# 检查编码
file .cursorrules

# 查看隐藏字符
cat -A .cursorrules | head -20
```

**解决方案**：

```bash
# 转换编码 (GBK -> UTF-8)
iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.utf8
mv .cursorrules.utf8 .cursorrules

# 修复行尾符（Windows -> Unix）
dos2unix .cursorrules

# 或使用 sed
sed -i 's/\r$//' .cursorrules
```

### 问题 3：规则冲突

**症状**：合并多个规则后 AI 建议不一致

**诊断**：

```bash
# 查找重复定义
grep -n "命名" .cursorrules
grep -n "编码" .cursorrules
grep -n "错误处理" .cursorrules
```

**解决方案**：

1. **使用单一规则集测试**
   ```bash
   cp rules/frontend/react/nextjs-typescript/.cursorrules ./
   ```

2. **逐步合并**
   - 先添加一条规则
   - 测试通过后再添加下一条

3. **手动解决冲突**
   - 编辑 `.cursorrules` 文件
   - 删除冲突的规则
   - 保留优先级高的规则

### 问题 4：性能问题

**症状**：Cursor 响应变慢

**诊断**：

```bash
# 检查文件大小
ls -lh .cursorrules

# 检查行数
wc -l .cursorrules
```

**建议限制**：

| 指标 | 建议值 | 超出处理 |
|------|--------|----------|
| 文件大小 | < 50 KB | 精简规则内容 |
| 行数 | < 500 行 | 删除冗余规则 |
| 规则条目 | < 50 条 | 分类分层管理 |

**优化方案**：

```bash
# 1. 删除不必要的注释
# 2. 移除重复规则
# 3. 只保留核心规则

# 精简示例：将详细说明改为简洁规则
# 修改前：
# 请确保所有组件都使用 TypeScript 类型定义，
# 包括 props、state 和函数返回值

# 修改后：
# 所有组件必须使用 TypeScript 类型定义
```

### 问题 5：翻译问题

**症状**：技术术语翻译不一致

**处理方案**：

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

echo "🔍 验证 .cursorrules 文件..."
echo ""

ERRORS=0

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
    echo "⚠️  警告：编码可能有问题 ($ENCODING)"
    ((ERRORS++))
else
    echo "✅ 编码检查通过: $ENCODING"
fi

# 检查内容
LINES=$(wc -l < "$FILE")
SIZE=$(wc -c < "$FILE")

echo "📄 文件行数: $LINES"
echo "📦 文件大小: $SIZE 字节"

if [ "$LINES" -lt 5 ]; then
    echo "⚠️  警告：内容较少"
    ((ERRORS++))
fi

if [ "$SIZE" -gt 51200 ]; then
    echo "⚠️  警告：文件较大 (建议 < 50KB)"
    ((ERRORS++))
fi

# 检查关键内容
if grep -q "编码规范\|代码风格\|命名" "$FILE"; then
    echo "✅ 发现编码规范相关内容"
else
    echo "⚠️  未发现编码规范相关内容"
fi

echo ""
if [ $ERRORS -eq 0 ]; then
    echo "✅ 验证通过"
else
    echo "⚠️  发现 $ERRORS 个警告"
fi
```

### 环境检查脚本

```bash
#!/bin/bash
# check_environment.sh

echo "=== 环境检查 ==="
echo ""

# 检查 Cursor
if command -v cursor &> /dev/null; then
    echo "✅ Cursor 已安装"
else
    echo "⚠️  Cursor 未在 PATH 中找到"
    echo "   提示: 使用别名或完整路径启动"
fi

# 检查 Git
if command -v git &> /dev/null; then
    echo "✅ Git 已安装: $(git --version)"
else
    echo "❌ Git 未安装"
fi

# 检查项目结构
if [ -d ".git" ]; then
    echo "✅ 当前目录是 Git 仓库"
else
    echo "⚠️  当前目录不是 Git 仓库"
fi

# 检查规则文件
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules 文件存在"
    echo "   路径: $(realpath .cursorrules)"
else
    echo "❌ .cursorrules 文件不存在"
fi

echo ""
echo "=== 检查完成 ==="
```

---

## 高级故障排除

### 调试模式

```bash
# 启用 Cursor 调试日志
export CURSOR_LOG_LEVEL=debug

# 查看日志
# macOS/Linux
tail -f ~/.cursor/logs/main.log

# Windows
Get-Content -Tail 50 $env:APPDATA\Cursor\logs\main.log
```

### 完全重置

```bash
# 1. 备份当前配置
cp .cursorrules .cursorrules.backup.$(date +%Y%m%d)

# 2. 删除当前规则
rm .cursorrules

# 3. 从规则集重新复制
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# 4. 重启 Cursor
```

### 清除缓存

```bash
# macOS
rm -rf ~/Library/Application\ Support/Cursor/cache

# Linux
rm -rf ~/.config/Cursor/cache

# Windows
Remove-Item -Recurse -Force $env:APPDATA\Cursor\cache
```

---

## 获取帮助

### 自助资源

| 资源 | 链接 |
|------|------|
| 📚 快速开始 | [getting-started.md](./getting-started.md) |
| 💡 最佳实践 | [best-practices.md](./best-practices.md) |
| ⚙️ 安装指南 | [installation-guide.md](./installation-guide.md) |

### 社区支持

| 渠道 | 用途 | 链接 |
|------|------|------|
| 🐛 Issues | 报告 Bug | [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) |
| 💬 Discussions | 提问交流 | [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions) |

### 问题报告模板

提交 Issue 时，请包含：

```markdown
## 问题描述
[简要描述遇到的问题]

## 环境信息
- 操作系统: [如 Windows 11 / macOS 14 / Ubuntu 22.04]
- Cursor 版本: [如 0.45.0]
- 规则集: [如 frontend/react/nextjs-typescript]

## 复现步骤
1. 步骤一
2. 步骤二
3. 步骤三

## 期望行为
[描述期望的结果]

## 实际行为
[描述实际发生的情况]

## 附加信息
- .cursorrules 文件内容（或关键部分）
- 错误信息截图
- 已尝试的解决方法
```

---

## FAQ（常见问题）

### Q: 规则文件可以放在子目录吗？

**A**: 可以。Cursor 会优先使用更深层级的规则文件。例如：
- 根目录 `.cursorrules` → 通用规则
- `frontend/.cursorrules` → 前端特定规则（优先级更高）

### Q: 可以同时使用多个规则文件吗？

**A**: Cursor 本身只读取一个 `.cursorrules` 文件。你可以：
1. 将多个规则合并到一个文件
2. 使用目录级规则分别配置

### Q: 规则更改后需要重启 Cursor 吗？

**A**: 建议重启以确保规则生效。部分情况下重新打开项目即可。

### Q: 规则对已有代码有效吗？

**A**: 规则主要影响 AI 生成的新代码。对已有代码不会自动修改。

---

<div align="center">

> 💡 **提示**：大多数问题可以通过以下三步解决：
>
> 1. 确认 `.cursorrules` 在项目根目录
> 2. 重启 Cursor 编辑器
> 3. 检查文件编码为 UTF-8

**[⬆ 返回顶部](#故障排除指南)** | **[📚 返回文档首页](./README.md)**

</div>
