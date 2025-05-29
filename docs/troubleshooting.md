# 故障排除指南 🔧

遇到问题？本指南将帮助您解决使用 Awesome Cursor Rules 中文版时的常见问题。

## 🚨 常见问题

### 1. 规则不生效

#### 问题描述
AI 的代码建议没有遵循 .cursorrules 文件中的规则。

#### 解决方案
```bash
# 1. 检查文件位置
ls -la .cursorrules

# 2. 检查文件内容
cat .cursorrules | head -10

# 3. 重启 Cursor 编辑器
# 关闭 Cursor，然后重新打开项目

# 4. 检查 Cursor 设置
# 确保 "Use .cursorrules" 选项已启用
```

#### 可能原因
- `.cursorrules` 文件不在项目根目录
- 文件格式错误或损坏
- Cursor 编辑器需要重启
- 设置中未启用规则文件

### 2. 文件格式错误

#### 问题描述
.cursorrules 文件无法被正确解析。

#### 解决方案
```bash
# 1. 检查文件编码
file .cursorrules

# 2. 验证 YAML 格式（如果适用）
# 使用在线 YAML 验证器检查格式

# 3. 重新复制规则文件
cp rules/frontend/react/nextjs-basic/.cursorrules ./

# 4. 检查特殊字符
# 确保没有不可见字符或错误的换行符
```

#### 预防措施
- 使用 UTF-8 编码保存文件
- 避免手动编辑复杂的规则文件
- 定期备份工作的规则配置

### 3. 规则冲突

#### 问题描述
合并多个规则集后出现冲突或不一致的建议。

#### 解决方案
```bash
# 1. 使用单一规则集测试
cp rules/frontend/react/nextjs-basic/.cursorrules ./

# 2. 逐步添加规则
# 先使用基础规则，然后逐步添加特定规则

# 3. 检查规则兼容性
# 确保选择的规则集来自兼容的技术栈
```

#### 最佳实践
- 优先使用单一技术栈的规则集
- 避免混合不兼容的框架规则
- 测试规则组合的效果

### 4. AI 建议质量差

#### 问题描述
AI 的代码建议不符合预期或质量较低。

#### 解决方案
```bash
# 1. 检查规则文件完整性
wc -l .cursorrules

# 2. 尝试不同的规则集
cp rules/general/code-guidelines/.cursorrules ./

# 3. 调整 Cursor 设置
# 在设置中调整 AI 模型和参数
```

#### 优化建议
- 使用更具体的规则集
- 提供更多的上下文信息
- 调整 AI 的创造性级别

### 5. 性能问题

#### 问题描述
使用规则后 Cursor 响应变慢。

#### 解决方案
```bash
# 1. 简化规则文件
# 删除不必要的规则条目

# 2. 检查文件大小
ls -lh .cursorrules

# 3. 重启 Cursor
# 清理缓存并重新启动
```

#### 性能优化
- 保持规则文件简洁
- 避免过于复杂的规则
- 定期清理 Cursor 缓存

## 🔍 诊断工具

### 1. 规则文件检查脚本
```bash
#!/bin/bash
# check_cursorrules.sh

echo "🔍 检查 .cursorrules 文件..."

if [ ! -f ".cursorrules" ]; then
    echo "❌ .cursorrules 文件不存在"
    exit 1
fi

echo "✅ 文件存在"
echo "📊 文件大小: $(ls -lh .cursorrules | awk '{print $5}')"
echo "📝 行数: $(wc -l < .cursorrules)"

echo "🔤 文件编码:"
file .cursorrules

echo "📋 文件内容预览:"
head -5 .cursorrules
```

### 2. 环境检查
```bash
# 检查 Cursor 版本
cursor --version

# 检查项目结构
tree -L 2

# 检查 Git 状态
git status
```

### 3. 规则验证
```bash
# 验证规则文件语法
python3 -c "
import yaml
try:
    with open('.cursorrules', 'r', encoding='utf-8') as f:
        content = f.read()
    print('✅ 文件格式正确')
except Exception as e:
    print(f'❌ 文件格式错误: {e}')
"
```

## 🆘 获取帮助

### 1. 社区支持
- 📝 [提交 Issue](https://github.com/your-username/awesome-cursorrules-zh/issues)
- 💬 [社区讨论](https://github.com/your-username/awesome-cursorrules-zh/discussions)
- 📚 [查看文档](./getting-started.md)

### 2. 问题报告模板
```markdown
## 问题描述
简要描述遇到的问题

## 环境信息
- OS: [例如 Windows 11]
- Cursor 版本: [例如 0.40.0]
- 规则集: [例如 react/nextjs-basic]

## 复现步骤
1. 
2. 
3. 

## 期望行为
描述期望的行为

## 实际行为
描述实际发生的情况

## 附加信息
- .cursorrules 文件内容
- 错误截图
- 相关日志
```

### 3. 快速修复检查清单
- [ ] .cursorrules 文件在项目根目录
- [ ] 文件内容完整且格式正确
- [ ] Cursor 编辑器已重启
- [ ] 设置中启用了规则文件
- [ ] 没有规则冲突
- [ ] 文件编码为 UTF-8

## 🔄 重置和恢复

### 1. 重置规则配置
```bash
# 备份当前配置
cp .cursorrules .cursorrules.backup

# 使用默认规则
cp rules/general/code-guidelines/.cursorrules ./

# 测试基本功能
```

### 2. 恢复工作配置
```bash
# 从备份恢复
cp .cursorrules.backup .cursorrules

# 或从版本控制恢复
git checkout HEAD -- .cursorrules
```

### 3. 完全重新开始
```bash
# 删除现有配置
rm .cursorrules

# 重新选择规则集
cp rules/frontend/react/nextjs-basic/.cursorrules ./

# 重启 Cursor
```

## 📞 联系支持

如果以上方法都无法解决您的问题，请：

1. **收集信息**
   - 操作系统和版本
   - Cursor 编辑器版本
   - 使用的规则集
   - 错误截图或日志

2. **提交 Issue**
   - 使用详细的问题描述
   - 提供复现步骤
   - 附上相关文件和截图

3. **参与讨论**
   - 在社区讨论中寻求帮助
   - 分享您的解决方案
   - 帮助其他用户

---

💡 **提示**: 大多数问题都可以通过重启 Cursor 编辑器和检查文件位置来解决！
