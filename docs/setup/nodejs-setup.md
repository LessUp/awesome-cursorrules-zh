# Node.js 环境配置

本文档指导您配置 Node.js 开发环境。

## 安装 Node.js

### 方法一：官方安装包

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS (长期支持) 版本
3. 运行安装程序

### 方法二：使用 nvm (推荐)

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 安装 Node.js 18 LTS
nvm install 18

# 设置默认版本
nvm alias default 18

# 验证安装
node --version
npm --version
```

### 方法三：使用 fnm

```bash
# 安装 fnm
curl -fsSL https://fnm.vercel.app/install | bash

# 安装 Node.js
fnm install 18
fnm use 18
```

## npm 配置

### 设置镜像源（中国大陆用户）

```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 或使用 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### 常用配置

```bash
# 查看 npm 配置
npm config list

# 设置缓存目录
npm config set cache ~/.npm-cache

# 设置全局安装目录
npm config set prefix ~/.npm-global
```

## 项目依赖安装

```bash
# 安装项目依赖
npm install

# 仅安装生产依赖
npm install --production

# 更新依赖
npm update

# 审计安全漏洞
npm audit
```

## 常见问题

### 权限问题

```bash
# 错误：EACCES permission denied
# 解决方案：修改 npm 全局目录
mkdir ~/.npm-global
npm config set prefix ~/.npm-global
# 将以下内容添加到 ~/.bashrc 或 ~/.zshrc
export PATH=~/.npm-global/bin:$PATH
```

### 网络问题

```bash
# 超时问题：增加超时时间
npm config set fetch-timeout 600000

# 使用代理
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

### 版本冲突

```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install
```

## 相关资源

- [Node.js 官方文档](https://nodejs.org/docs/)
- [npm 官方文档](https://docs.npmjs.com/)
- [编辑器配置](./editor-setup.md)
