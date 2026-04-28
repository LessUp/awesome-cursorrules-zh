# Setup Guides

Environment setup and installation guides to help you quickly start using the awesome-cursorrules-zh project.

## Available Guides

| Guide | Chinese | English |
|-------|---------|---------|
| Quick Start | [Chinese](../../zh/getting-started.md) | [English](../../en/getting-started.md) |
| Installation Guide | [Chinese](../../zh/installation-guide.md) | [English](../../en/installation-guide.md) |
| Node.js Environment | [Details](./nodejs-setup.md) | - |
| Editor Setup | [Details](./editor-setup.md) | - |

## System Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | >= 22.0.0 |
| npm | >= 9.0.0 |
| Git | Any version |

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/LessUp/awesome-cursorrules-zh.git

# 2. Enter directory
cd awesome-cursorrules-zh

# 3. Install dependencies
npm install

# 4. Start dev server
npm run docs:dev
```

## Using Rule Files

### Method 1: Direct Copy

```bash
# Copy rule file to your project root
cp rules/frontend/react/nextjs-typescript/.cursorrules /your/project/
```

### Method 2: Using Cursor Editor

1. Open Cursor editor
2. Open your project
3. Create `.cursorrules` file in project root
4. Paste appropriate rule content from this site

### Method 3: Command Line Download

```bash
# Download a single rule
curl -o .cursorrules https://raw.githubusercontent.com/LessUp/awesome-cursorrules-zh/main/rules/frontend/react/nextjs-typescript/.cursorrules
```

## Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Run project check
npm run check

# Start local preview
npm run docs:preview
```

## Next Steps

- [Using Rules Tutorial](../tutorials/using-rules.md) - Learn how to use rules effectively
- [Contributing Guide](../tutorials/contributing.md) - Participate in project contribution
- [Best Practices](../../zh/best-practices.md) - Recommended development practices
