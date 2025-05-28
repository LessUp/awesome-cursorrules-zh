# 社区推广材料 📢

## 🎯 掘金社区推广文案

### 标题
🚀 重磅发布！专为中文开发者打造的 Cursor AI 编程规则集合

### 正文
各位掘友好！

今天给大家分享一个超实用的开源项目 —— **Awesome Cursor Rules 中文版**！

#### 🤔 什么是 Cursor Rules？
如果你在用 Cursor AI 编辑器，一定知道 `.cursorrules` 文件的威力。它能让 AI 按照你的编码规范和最佳实践来生成代码，大大提升开发效率！

#### ✨ 项目亮点
- 🎯 **29个完整翻译的规则集**，覆盖主流技术栈
- 🏗️ **按技术领域分类**，前端/后端/区块链一应俱全
- 🇨🇳 **专为中文开发者优化**，告别英文文档困扰
- 📚 **155+ 精心翻译文件**，质量有保证

#### 🛠️ 支持的技术栈
- **前端**: React, Vue, TypeScript, React Native
- **后端**: Node.js, Python FastAPI, .NET
- **区块链**: Solidity 智能合约
- **系统编程**: C++
- **通用**: Git 规范, 代码指南

#### 🚀 5分钟上手
```bash
# 1. 克隆仓库
git clone https://github.com/your-username/awesome-cursorrules-zh.git

# 2. 选择规则集（以 React 为例）
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# 3. 在 Cursor 中开始编码，享受智能提示！
```

#### 💡 实际效果
使用前：AI 生成的代码风格不统一，命名随意
使用后：代码规范统一，遵循最佳实践，团队协作更高效

#### 🤝 开源贡献
项目完全开源，欢迎大家：
- ⭐ 给项目点个 Star
- 🐛 反馈使用问题
- 🌐 参与翻译贡献
- 📢 推荐给同事朋友

GitHub 地址：https://github.com/your-username/awesome-cursorrules-zh

让我们一起为中文开发者社区构建更好的 AI 编程体验！

#Cursor #AI编程 #开源项目 #前端开发 #后端开发

---

## 🎯 知乎推广文案

### 标题
如何让 Cursor AI 编辑器更懂中文开发者？这个开源项目给出了答案

### 正文
最近 Cursor AI 编辑器在开发者圈子里很火，但很多中文开发者在使用时遇到一个问题：AI 生成的代码不够符合我们的编码习惯和规范。

今天分享一个解决方案 —— **Awesome Cursor Rules 中文版**。

#### 问题背景
Cursor AI 虽然强大，但默认情况下：
- 生成的代码风格偏向欧美习惯
- 技术文档和注释都是英文
- 缺乏针对中文技术栈的优化
- 团队协作时代码风格不统一

#### 解决方案
通过 `.cursorrules` 文件，我们可以"训练" AI 按照特定的规范生成代码。这个项目提供了：

1. **29个完整的中文规则集**
   - React/Vue 前端开发
   - Node.js/Python 后端开发
   - TypeScript 类型安全编程
   - 移动端和区块链开发

2. **按技术栈分类的清晰结构**
   ```
   rules/
   ├── frontend/     # 前端技术栈
   ├── backend/      # 后端技术栈
   ├── blockchain/   # 区块链开发
   └── general/      # 通用规则
   ```

3. **中文优化的编程规范**
   - 保留英文 API 名称
   - 中文注释和文档
   - 符合国内开发习惯

#### 实际使用效果

**使用前**：
```javascript
// AI 生成的代码
function getData() {
  // fetch data from api
  return fetch('/api/data').then(res => res.json())
}
```

**使用后**：
```typescript
// AI 生成的代码
async function fetchUserData(): Promise<UserData> {
  try {
    const response = await fetch('/api/users')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('获取用户数据失败:', error)
    throw error
  }
}
```

可以看到，使用规则后的代码：
- 类型安全（TypeScript）
- 错误处理完善
- 命名规范统一
- 中文错误信息

#### 如何使用
1. 克隆项目到本地
2. 根据技术栈选择对应规则集
3. 复制 `.cursorrules` 文件到项目根目录
4. 在 Cursor 中开始编码

#### 项目价值
- **提升开发效率**：AI 生成的代码更符合预期
- **统一团队规范**：所有成员使用相同的编码标准
- **降低学习成本**：中文文档和注释更易理解
- **开源共建**：社区驱动，持续改进

#### 未来规划
- 继续翻译更多技术栈规则
- 添加中文特色的开发规范
- 建立活跃的贡献者社区
- 集成更多开发工具

这个项目不仅解决了 Cursor AI 的本土化问题，更重要的是为中文开发者社区提供了一个协作平台。

如果你也在使用 Cursor AI，不妨试试这个项目，相信会有不错的体验提升！

项目地址：https://github.com/your-username/awesome-cursorrules-zh

---

## 🎯 CSDN 推广文案

### 标题
【开源推荐】Cursor AI 编程规则中文版：让 AI 更懂中国开发者

### 正文
#### 前言
随着 AI 编程工具的普及，Cursor AI 编辑器成为了很多开发者的新宠。但在实际使用中，我们发现 AI 生成的代码往往不够符合中文开发者的习惯。今天推荐一个开源项目，专门解决这个痛点。

#### 项目介绍
**Awesome Cursor Rules 中文版** 是一个专为中文开发者打造的 Cursor AI 编程规则集合。通过精心翻译和本土化优化，让 AI 生成的代码更符合我们的开发习惯。

#### 核心特性
1. **全面的技术栈覆盖**
   - 前端：React、Vue、TypeScript
   - 后端：Node.js、Python、.NET
   - 移动端：React Native、iOS
   - 区块链：Solidity

2. **中文优化**
   - 技术术语标准中文翻译
   - 保留英文 API 名称
   - 中文注释和错误信息

3. **规范化的项目结构**
   - 按技术领域分类
   - 清晰的目录层次
   - 易于查找和使用

#### 使用教程
##### 步骤1：获取项目
```bash
git clone https://github.com/your-username/awesome-cursorrules-zh.git
cd awesome-cursorrules-zh
```

##### 步骤2：选择规则集
根据你的项目技术栈选择对应的规则：
```bash
# React + Next.js 项目
cp rules/frontend/react/nextjs-typescript/.cursorrules ./

# Vue 3 项目
cp rules/frontend/vue/composition-api/.cursorrules ./

# Python FastAPI 项目
cp rules/backend/python/fastapi/.cursorrules ./
```

##### 步骤3：在 Cursor 中使用
1. 用 Cursor 打开你的项目
2. 确保项目根目录有 `.cursorrules` 文件
3. 开始编码，AI 会按照规则生成代码

#### 实战案例
以 React 项目为例，使用规则前后的对比：

**使用前**：
```jsx
function MyComponent(props) {
  return <div>{props.title}</div>
}
```

**使用后**：
```tsx
interface MyComponentProps {
  title: string
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="component-container">
      {title}
    </div>
  )
}

export default MyComponent
```

可以看到，使用规则后的代码：
- 使用 TypeScript 类型定义
- 遵循 React 函数组件最佳实践
- 添加了适当的 CSS 类名
- 代码结构更规范

#### 项目优势
1. **提升开发效率**：减少手动调整 AI 生成代码的时间
2. **统一代码风格**：团队成员使用相同的编码规范
3. **降低学习成本**：中文文档更容易理解
4. **持续更新**：社区驱动，规则集不断完善

#### 贡献指南
项目欢迎社区贡献：
- 翻译新的规则集
- 改进现有翻译
- 报告问题和建议
- 分享使用经验

#### 总结
这个项目不仅解决了 Cursor AI 的本土化问题，更为中文开发者社区提供了一个协作平台。如果你正在使用 Cursor AI，强烈推荐试试这个项目。

项目地址：https://github.com/your-username/awesome-cursorrules-zh
文档地址：查看项目 README 和 docs 目录

让我们一起为中文开发者社区构建更好的 AI 编程体验！

#### 相关标签
#CursorAI #AI编程 #开源项目 #前端开发 #后端开发 #TypeScript #React #Vue #Python
