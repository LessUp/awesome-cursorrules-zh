# Installation Guide

> ⚙️ Complete environment setup and configuration instructions

## Table of Contents

- [System Requirements](#system-requirements)
- [Install Cursor Editor](#install-cursor-editor)
- [Get the Rules](#get-the-rules)
- [Project Configuration](#project-configuration)
- [Verify Installation](#verify-installation)
- [Updates and Maintenance](#updates-and-maintenance)

---

## System Requirements

### Operating Systems

| System | Minimum Version | Recommended Version |
|--------|-----------------|---------------------|
| Windows | Windows 10 | Windows 11 |
| macOS | 10.15 (Catalina) | 14 (Sonoma) |
| Linux | Ubuntu 18.04 | Ubuntu 22.04 LTS |

### Hardware Requirements

| Component | Minimum Requirement | Recommended Configuration |
|-----------|---------------------|---------------------------|
| RAM | 4 GB | 8 GB+ |
| Storage | 500 MB | 1 GB+ |
| Processor | Dual-core | Quad-core+ |
| Network | Stable connection | Broadband connection |

### Required Software

| Software | Purpose | Download |
|----------|---------|----------|
| Cursor AI | AI Programming Editor | [cursor.sh](https://cursor.sh/) |
| Git | Version Control | [git-scm.com](https://git-scm.com/downloads) |

---

## Install Cursor Editor

### Windows

**Method 1: Official Website (Recommended)**

1. Visit [cursor.sh](https://cursor.sh/)
2. Click the "Download" button
3. Run the downloaded `.exe` installer
4. Follow the wizard to complete installation

**Method 2: Using Winget**

```powershell
winget install cursor
```

**Method 3: Using Chocolatey**

```powershell
choco install cursor
```

### macOS

**Method 1: Official Website (Recommended)**

1. Visit [cursor.sh](https://cursor.sh/)
2. Download the `.dmg` file
3. Drag Cursor to your Applications folder

**Method 2: Using Homebrew**

```bash
brew install --cask cursor
```

### Linux

**Method 1: AppImage (Recommended)**

```bash
# Download AppImage
wget https://downloader.cursor.sh/linux/appImage/x64 -O cursor.AppImage

# Add execute permission
chmod +x cursor.AppImage

# Run
./cursor.AppImage
```

**Method 2: Using Snap**

```bash
sudo snap install cursor
```

**Method 3: Ubuntu/Debian Package**

```bash
# Download .deb package
wget https://cursor.sh/download/deb -O cursor.deb

# Install
sudo dpkg -i cursor.deb
sudo apt-get install -f  # Fix dependencies
```

### First-Time Setup

1. Open the Cursor application
2. Log in to your Cursor account (optional, but recommended for syncing settings)
3. Choose your AI model preference:
   - **Claude (Recommended)**: Strong code understanding
   - **GPT-4**: General programming tasks
   - Others as needed
4. Complete the initial setup wizard
5. Enable rule support (recommended):
   - Open Settings (`Ctrl/Cmd + ,`)
   - Search for "cursorrules"
   - Enable "Use .cursorrules" option

---

## Get the Rules

### Method 1: Git Clone (Recommended)

```bash
# Clone the repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# Enter the directory
cd awesome-cursorrules-zh

# View available rules
ls rules/
```

### Method 2: Download Archive

```bash
# Download latest version
wget https://github.com/LessUp/awesome-cursorrules-zh/archive/refs/heads/main.zip

# Extract
unzip main.zip
cd awesome-cursorrules-zh-main
```

### Method 3: GitHub CLI

```bash
# Using gh command (requires GitHub CLI)
gh repo clone LessUp/awesome-cursorrules-zh

cd awesome-cursorrules-zh
```

---

## Project Configuration

### Basic Configuration Process

**Step 1: Identify Your Tech Stack**

```bash
# List frontend rules
ls rules/frontend/react/

# List backend rules
ls rules/backend/python/

# List mobile rules
ls rules/mobile/
```

**Step 2: Copy Rules File**

```bash
# Enter your project directory
cd /path/to/your/project

# Copy single rule
cp /path/to/awesome-cursorrules-zh/rules/frontend/react/nextjs-typescript/.cursorrules ./

# Or merge multiple rules
cat /path/to/awesome-cursorrules-zh/rules/frontend/react/nextjs-typescript/.cursorrules > .cursorrules
echo "" >> .cursorrules
cat /path/to/awesome-cursorrules-zh/rules/backend/python/fastapi-api-example/.cursorrules >> .cursorrules
```

**Step 3: Verify Configuration**

```bash
# Check if file exists
ls -la .cursorrules

# View first 30 lines of content
cat .cursorrules | head -30

# Check file encoding (should be UTF-8)
file .cursorrules
```

### Cursor Editor Configuration

Recommended Cursor settings (`settings.json`):

```json
{
  "cursor.ai.model": "claude-3.5-sonnet",
  "cursor.ai.maxTokens": 4096,
  "cursor.ai.temperature": 0.2,
  "cursor.ai.enableCodeActions": true,
  "cursor.ai.useCursorRules": true
}
```

Settings path:
- **Windows**: `%APPDATA%/Cursor/User/settings.json`
- **macOS**: `~/Library/Application Support/Cursor/User/settings.json`
- **Linux**: `~/.config/Cursor/User/settings.json`

---

## Verify Installation

### Functionality Checklist

- [ ] Cursor launches and runs normally
- [ ] `.cursorrules` file is in the project root
- [ ] "Use .cursorrules" setting is enabled
- [ ] File encoding is UTF-8

### Verification Commands

```bash
# 1. Check if file exists
ls -la .cursorrules

# 2. Check file content
head -20 .cursorrules

# 3. Check file encoding
file .cursorrules
# Expected output: .cursorrules: UTF-8 Unicode text

# 4. Check file size
ls -lh .cursorrules
# Recommended: Less than 50KB
```

### Functionality Test

1. **Open Project**: Open a project containing `.cursorrules` with Cursor
2. **Create Test File**: Create a new code file (e.g., `test.tsx`)
3. **Trigger AI Suggestions**: Type code and observe AI responses
4. **Verify Rules Working**:
   - Naming suggestions follow rules
   - Code style is consistent
   - Architecture patterns are correct

---

## Updates and Maintenance

### Update Rules

```bash
# Enter the rules directory
cd awesome-cursorrules-zh

# Pull latest updates
git pull origin main

# View update content
git log --oneline -10
```

### Version Locking

Lock to a specific version if needed:

```bash
# View available tags
git tag

# Switch to specific version
git checkout v2.0.0

# Or create your own branch
git checkout -b my-custom-rules
```

### Backup and Restore

```bash
# Backup current rules
cp .cursorrules .cursorrules.backup.$(date +%Y%m%d)

# Restore from backup
cp .cursorrules.backup .cursorrules

# Restore from Git
git checkout HEAD -- .cursorrules
```

### Clear Cache

If experiencing unusual behavior, try clearing cache:

```bash
# macOS/Linux
rm -rf ~/.cursor/cache

# Windows
Remove-Item -Recurse -Force $env:APPDATA\Cursor\cache
```

---

## FAQ

### Q: Does Cursor require login?

Some Cursor features require login, but `.cursorrules` functionality works offline. Logging in enables settings sync and history.

### Q: What happens if rules file is in wrong location?

Cursor only looks for `.cursorrules` in the project root. Placing it in subdirectories will not work.

### Q: How do I verify rules are working?

Ask the AI assistant to "describe the coding standards for this project". If the response matches your `.cursorrules` content, rules are active.

---

<div align="center">

**[⬆ Back to Top](#installation-guide)** | **[📚 Back to Documentation Home](./README.md)**

</div>
