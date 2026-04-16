# Troubleshooting Guide

> 🔧 Quick diagnosis and solutions for common issues

## Table of Contents

- [Quick Diagnosis](#quick-diagnosis)
- [Common Issues](#common-issues)
- [Diagnostic Tools](#diagnostic-tools)
- [Advanced Troubleshooting](#advanced-troubleshooting)
- [Getting Help](#getting-help)

---

## Quick Diagnosis

### 5-Minute Checklist

Run these commands to quickly troubleshoot:

```bash
# 1. Check if file exists
ls -la .cursorrules

# 2. Check file location (must be in project root)
pwd

# 3. Check file content (ensure it has actual content)
head -20 .cursorrules

# 4. Check file encoding (should be UTF-8)
file .cursorrules

# 5. Check file permissions
stat .cursorrules
```

### One-Click Diagnostic Script

Save the following as `diagnose.sh`:

```bash
#!/bin/bash
# Cursor Rules Diagnostic Tool

echo "=== Cursor Rules Diagnostic Tool ==="
echo ""

# Check file exists
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules file exists"
else
    echo "❌ .cursorrules file not found"
    echo "   Solution: cp rules/frontend/react/nextjs-typescript/.cursorrules ./"
    exit 1
fi

# Check file location
if [ -d ".git" ]; then
    echo "✅ File is in Git project root"
else
    echo "⚠️  May not be in Git project root"
    echo "   Tip: Ensure .cursorrules is in project root, not a subdirectory"
fi

# Check file encoding
ENCODING=$(file -b --mime-encoding .cursorrules)
if [ "$ENCODING" = "utf-8" ] || [ "$ENCODING" = "us-ascii" ]; then
    echo "✅ File encoding correct: $ENCODING"
else
    echo "⚠️  File encoding issue: $ENCODING"
    echo "   Solution: iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.fixed"
fi

# Check file size
LINES=$(wc -l < .cursorrules)
if [ "$LINES" -lt 5 ]; then
    echo "⚠️  File content too short ($LINES lines), may be incomplete"
else
    echo "✅ File content normal ($LINES lines)"
fi

# Check file permissions
if [ -r ".cursorrules" ]; then
    echo "✅ File is readable"
else
    echo "❌ File is not readable"
    echo "   Solution: chmod 644 .cursorrules"
fi

echo ""
echo "=== Diagnosis Complete ==="
```

Usage:

```bash
chmod +x diagnose.sh
./diagnose.sh
```

---

## Common Issues

### Issue 1: Rules Not Working

**Symptoms**: AI suggestions don't follow `.cursorrules` content

**Root Causes**:

| Check Item | Normal State | Solution |
|------------|--------------|----------|
| File Location | Project root | Move to root directory |
| Setting Enabled | "Use .cursorrules" is ON | Enable in settings |
| Filename | `.cursorrules` (dot prefix) | Check filename |
| File Encoding | UTF-8 | Convert encoding |

**Solution Steps**:

```bash
# Step 1: Confirm file location
ls -la .cursorrules
# Should be in project root, not a subdirectory

# Step 2: Restart Cursor
# Fully close Cursor, then reopen

# Step 3: Check Settings
# Cursor > Settings > Search "cursorrules" > Enable toggle
```

### Issue 2: File Encoding Error

**Symptoms**: Chinese content displays as garbled text

**Diagnosis**:

```bash
# Check encoding
file .cursorrules

# View hidden characters
cat -A .cursorrules | head -20
```

**Solutions**:

```bash
# Convert encoding (GBK -> UTF-8)
iconv -f GBK -t UTF-8 .cursorrules > .cursorrules.utf8
mv .cursorrules.utf8 .cursorrules

# Fix line endings (Windows -> Unix)
dos2unix .cursorrules

# Or use sed
sed -i 's/\r$//' .cursorrules
```

### Issue 3: Rule Conflicts

**Symptoms**: Inconsistent AI suggestions after merging multiple rules

**Diagnosis**:

```bash
# Find duplicate definitions
grep -n "naming" .cursorrules
grep -n "encoding" .cursorrules
grep -n "error handling" .cursorrules
```

**Solutions**:

1. **Test with Single Rule Set**
   ```bash
   cp rules/frontend/react/nextjs-typescript/.cursorrules ./
   ```

2. **Merge Gradually**
   - Add one rule first
   - Test it, then add the next

3. **Resolve Conflicts Manually**
   - Edit `.cursorrules` file
   - Remove conflicting rules
   - Keep higher priority rules

### Issue 4: Performance Issues

**Symptoms**: Cursor responds slowly

**Diagnosis**:

```bash
# Check file size
ls -lh .cursorrules

# Check line count
wc -l .cursorrules
```

**Recommended Limits**:

| Metric | Recommended | Over Limit Action |
|--------|-------------|-------------------|
| File Size | < 50 KB | Trim rule content |
| Line Count | < 500 lines | Remove redundant rules |
| Rule Items | < 50 items | Classify and layer management |

**Optimization**:

```bash
# 1. Remove unnecessary comments
# 2. Remove duplicate rules
# 3. Keep only core rules

# Optimization example: Convert detailed explanations to concise rules
# Before:
# Please ensure all components use TypeScript type definitions,
# including props, state, and function return values

# After:
# All components must use TypeScript type definitions
```

### Issue 5: Translation Issues

**Symptoms**: Technical terms are inconsistently translated

**Resolution**:

| Issue Type | Resolution |
|------------|------------|
| Inconsistent terms | Use standard translations, keep proper nouns in English |
| Code formatting issues | Check code block markers and indentation |
| Unclear expressions | Rephrase, split long sentences |

---

## Diagnostic Tools

### Rules File Validator

```bash
#!/bin/bash
# validate_cursorrules.sh

FILE=".cursorrules"

echo "🔍 Validating .cursorrules file..."
echo ""

ERRORS=0

# Check file exists
if [ ! -f "$FILE" ]; then
    echo "❌ Error: File not found"
    exit 1
fi

# Check file not empty
if [ ! -s "$FILE" ]; then
    echo "❌ Error: File is empty"
    exit 1
fi

# Check encoding
ENCODING=$(file -b --mime-encoding "$FILE")
if [ "$ENCODING" != "utf-8" ] && [ "$ENCODING" != "us-ascii" ]; then
    echo "⚠️  Warning: Possible encoding issue ($ENCODING)"
    ((ERRORS++))
else
    echo "✅ Encoding check passed: $ENCODING"
fi

# Check content
LINES=$(wc -l < "$FILE")
SIZE=$(wc -c < "$FILE")

echo "📄 File lines: $LINES"
echo "📦 File size: $SIZE bytes"

if [ "$LINES" -lt 5 ]; then
    echo "⚠️  Warning: Content too short"
    ((ERRORS++))
fi

if [ "$SIZE" -gt 51200 ]; then
    echo "⚠️  Warning: File too large (recommended < 50KB)"
    ((ERRORS++))
fi

# Check for key content
if grep -q "coding standards\|code style\|naming" "$FILE"; then
    echo "✅ Found coding standards content"
else
    echo "⚠️  No coding standards content found"
fi

echo ""
if [ $ERRORS -eq 0 ]; then
    echo "✅ Validation passed"
else
    echo "⚠️  Found $ERRORS warning(s)"
fi
```

### Environment Check Script

```bash
#!/bin/bash
# check_environment.sh

echo "=== Environment Check ==="
echo ""

# Check Cursor
if command -v cursor &> /dev/null; then
    echo "✅ Cursor installed"
else
    echo "⚠️  Cursor not found in PATH"
    echo "   Tip: Use alias or full path to launch"
fi

# Check Git
if command -v git &> /dev/null; then
    echo "✅ Git installed: $(git --version)"
else
    echo "❌ Git not installed"
fi

# Check project structure
if [ -d ".git" ]; then
    echo "✅ Current directory is a Git repository"
else
    echo "⚠️  Current directory is not a Git repository"
fi

# Check rules file
if [ -f ".cursorrules" ]; then
    echo "✅ .cursorrules file exists"
    echo "   Path: $(realpath .cursorrules)"
else
    echo "❌ .cursorrules file not found"
fi

echo ""
echo "=== Check Complete ==="
```

---

## Advanced Troubleshooting

### Debug Mode

```bash
# Enable Cursor debug logging
export CURSOR_LOG_LEVEL=debug

# View logs
# macOS/Linux
tail -f ~/.cursor/logs/main.log

# Windows
Get-Content -Tail 50 $env:APPDATA\Cursor\logs\main.log
```

### Complete Reset

```bash
# 1. Backup current configuration
cp .cursorrules .cursorrules.backup.$(date +%Y%m%d)

# 2. Delete current rules
rm .cursorrules

# 3. Copy fresh from rule set
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# 4. Restart Cursor
```

### Clear Cache

```bash
# macOS
rm -rf ~/Library/Application\ Support/Cursor/cache

# Linux
rm -rf ~/.config/Cursor/cache

# Windows
Remove-Item -Recurse -Force $env:APPDATA\Cursor\cache
```

---

## Getting Help

### Self-Service Resources

| Resource | Link |
|----------|------|
| 📚 Quick Start | [getting-started.md](./getting-started.md) |
| 💡 Best Practices | [best-practices.md](./best-practices.md) |
| ⚙️ Installation Guide | [installation-guide.md](./installation-guide.md) |

### Community Support

| Channel | Purpose | Link |
|---------|---------|------|
| 🐛 Issues | Report Bugs | [GitHub Issues](https://github.com/LessUp/awesome-cursorrules-zh/issues) |
| 💬 Discussions | Q&A, Experience Sharing | [GitHub Discussions](https://github.com/LessUp/awesome-cursorrules-zh/discussions) |

### Issue Report Template

When submitting an issue, please include:

```markdown
## Problem Description
[Briefly describe the issue]

## Environment Info
- Operating System: [e.g., Windows 11 / macOS 14 / Ubuntu 22.04]
- Cursor Version: [e.g., 0.45.0]
- Rule Set: [e.g., frontend/react/nextjs-typescript]

## Reproduction Steps
1. Step one
2. Step two
3. Step three

## Expected Behavior
[Describe expected result]

## Actual Behavior
[Describe what actually happened]

## Additional Info
- .cursorrules file content (or key parts)
- Error message screenshots
- Solutions already tried
```

---

## FAQ

### Q: Can the rules file be placed in subdirectories?

**A**: Yes. Cursor prioritizes rules in deeper directories. For example:
- Root `.cursorrules` → General rules
- `frontend/.cursorrules` → Frontend-specific rules (higher priority)

### Q: Can I use multiple rules files simultaneously?

**A**: Cursor itself only reads one `.cursorrules` file. You can:
1. Merge multiple rules into one file
2. Use directory-level rules for separate configuration

### Q: Do I need to restart Cursor after changing rules?

**A**: It's recommended to restart. In some cases, reopening the project is sufficient.

### Q: Do rules apply to existing code?

**A**: Rules primarily affect AI-generated new code. Existing code won't be automatically modified.

---

<div align="center">

> 💡 **Tip**: Most issues can be resolved with these three steps:
>
> 1. Confirm `.cursorrules` is in project root
> 2. Restart the Cursor editor
> 3. Check file encoding is UTF-8

**[⬆ Back to Top](#troubleshooting-guide)** | **[📚 Back to Documentation Home](./README.md)**

</div>
