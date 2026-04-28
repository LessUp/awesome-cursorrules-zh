# Node.js Environment Setup

This document guides you through configuring the Node.js development environment.

## Installing Node.js

### Method 1: Official Installer

1. Visit [Node.js Website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer

### Method 2: Using nvm (Recommended)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 22 LTS
nvm install 22

# Set default version
nvm alias default 22

# Verify installation
node --version
npm --version
```

### Method 3: Using fnm

```bash
# Install fnm
curl -fsSL https://fnm.vercel.app/install | bash

# Install Node.js
fnm install 22
fnm use 22
```

## npm Configuration

### Setting Mirror (For Users in China)

```bash
# Use Taobao mirror
npm config set registry https://registry.npmmirror.com

# Or use cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### Common Configuration

```bash
# View npm config
npm config list

# Set cache directory
npm config set cache ~/.npm-cache

# Set global install directory
npm config set prefix ~/.npm-global
```

## Project Dependency Installation

```bash
# Install project dependencies
npm install

# Install production dependencies only
npm install --production

# Update dependencies
npm update

# Audit security vulnerabilities
npm audit
```

## Common Issues

### Permission Issues

```bash
# Error: EACCES permission denied
# Solution: Modify npm global directory
mkdir ~/.npm-global
npm config set prefix ~/.npm-global
# Add the following to ~/.bashrc or ~/.zshrc
export PATH=~/.npm-global/bin:$PATH
```

### Network Issues

```bash
# Timeout issue: Increase timeout
npm config set fetch-timeout 600000

# Use proxy
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

### Version Conflicts

```bash
# Clear cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Related Resources

- [Node.js Official Docs](https://nodejs.org/docs/)
- [npm Official Docs](https://docs.npmjs.com/)
- [Editor Setup](./editor-setup.md)
