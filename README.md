# 神经网络教育页面

这是一个基于 Next.js 和 shadcn/ui 构建的神经网络教育页面，用于展示神经网络基础知识，包括神经元、权重和偏置等核心概念。

## 功能特性

- 🧠 **神经网络基础知识展示**：清晰解释神经元、权重、偏置等概念
- 🎨 **现代化UI设计**：使用 shadcn/ui 组件库，响应式设计
- 📚 **教学内容**：包含测验推荐和实训建议
- 💫 **美观的视觉效果**：渐变背景，卡片布局，图标装饰

## 技术栈

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面

## 项目结构

```
/
├── app/                    # Next.js 应用目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/
│   ├── ui/                # shadcn/ui 组件
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   └── neural-network-education.tsx  # 主教育页面组件
├── lib/
│   └── utils.ts           # 工具函数
└── ...
```

## 页面内容

页面包含以下主要部分：

1. **标题和介绍**：神经网络基础概念介绍
2. **核心概念卡片**：
   - 权重 (Weight) - 影响力度的数值
   - 偏置 (Bias) - 决策门槛
3. **工作原理总结**：神经元处理信息的完整流程
4. **学习建议**：
   - 推荐测验：巩固理论知识
   - 推荐实训：房价预测实验

## 构建和部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 许可证

此项目仅用于教育目的。
