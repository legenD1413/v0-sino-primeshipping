# SinoPrimeshipping

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/haiges-projects/v0-sino-primeshipping)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/6XGD2cuI8FA)

## 项目概述

这是新普瑞姆国际货运（SinoPrime Shipping）的官方网站项目，基于Next.js构建。该网站提供物流服务信息、行业知识和博客内容，帮助客户了解国际货运和供应链管理。

### 核心特性

- 公司服务介绍
- 行业解决方案
- 博客和知识库
- 联系表单

## 技术栈

- **框架**：Next.js 15.2.4 (App Router)
- **UI库**：Tailwind CSS + Radix UI组件
- **语言**：TypeScript
- **部署**：Vercel

## 博客管理系统

本项目集成了一个基于文件系统的简易博客管理系统，使用Markdown格式存储文章内容。

### 博客系统特性

- 基于Markdown的文章管理
- 文章分类和标签系统
- 简单的管理界面（CRUD操作）
- SEO优化的文章页面
- 响应式设计

### 博客管理界面

博客管理界面可通过以下路径访问：

```
/blog-admin
```

管理界面提供以下功能：
- 查看所有文章列表
- 创建新文章
- 编辑现有文章
- 删除文章

### 内容存储结构

博客内容存储在项目根目录的`content`文件夹中：

```
content/
├── posts/        # 存储文章Markdown文件
└── authors/      # 存储作者信息
```

### 文章格式

文章使用Markdown格式，包含frontmatter元数据：

```markdown
---
title: "文章标题"
slug: "article-slug"
excerpt: "文章摘要"
coverImage: "/path/to/image.jpg"
date: "2023-01-01"
author: "author-id"
category: "CATEGORY"
tags: ["标签1", "标签2"]
readTime: "5 min"
---

# 文章内容

这里是文章的正文内容...
```

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/v0-sino-primeshipping.git
cd v0-sino-primeshipping
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署

项目已配置为自动部署到Vercel。每次推送到主分支时，都会触发自动部署。

## 如何贡献

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 许可证

详见LICENSE文件。

# SinoPrime Shipping Website

一个现代化的物流公司网站，专注于中国到北美的物流服务。

## 🚀 主要功能

### 📝 博客系统
- **自动目录组件**：支持一级（H1）和二级（H2）标题的自动目录生成
- **锚点链接**：点击目录项可平滑滚动到对应章节
- **URL哈希**：生成可分享的链接，支持直接定位到特定章节
- **实时高亮**：滚动时自动高亮当前章节
- **粘性定位**：目录在滚动时保持可见
- **响应式设计**：适配不同屏幕尺寸

### 🎯 网站特色
- 响应式设计，支持移动端和桌面端
- 现代化的UI/UX设计
- 完整的物流服务展示
- 博客内容管理系统
- 多语言支持（中英文）

## 📁 项目结构

```
├── app/                    # Next.js 15 App Router
├── components/            # React 组件
│   ├── blog/             # 博客相关组件
│   │   └── TableOfContents.tsx  # 目录组件
│   └── ui/               # UI 组件
├── content/              # 内容文件
│   ├── posts/           # 博客文章 (Markdown)
│   └── authors/         # 作者信息
├── docs/                # 文档
│   ├── 博客文章编写指南.md
│   └── blog-template.md
├── lib/                 # 工具函数
│   └── blog.ts         # 博客数据处理
└── public/             # 静态资源
    └── blog/           # 博客图片
```

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: Markdown + Gray Matter
- **图标**: Lucide React
- **部署**: Vercel

## 📝 博客文章编写

### 快速开始
1. 复制 `docs/blog-template.md` 作为新文章模板
2. 修改 front matter 信息
3. 按照标题层级编写内容：
   - 使用一个 H1 标题作为文章主标题
   - 使用 H2 标题作为主要章节（会显示在目录中）
   - 使用 H3-H6 作为子章节（不显示在目录中）
4. 将文件保存到 `content/posts/` 目录

### 目录组件特性
- ✅ 自动检测 H1 和 H2 标题
- ✅ 生成可点击的导航链接
- ✅ 平滑滚动到目标位置
- ✅ 实时高亮当前章节
- ✅ URL 哈希更新和分享
- ✅ 粘性定位保持可见

### 文章结构示例
```markdown
# 文章主标题

## 主要章节1
### 子章节1.1
### 子章节1.2

## 主要章节2
### 详细说明

## 结论
```

详细的编写指南请参考：`docs/博客文章编写指南.md`

## 🚀 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📋 作者信息

系统支持以下作者：
- `zhang-ming` - Ming Zhang (Logistics Expert)
- `li-wei` - Wei Li (Customs Affairs Consultant)  
- `wang-jing` - Jing Wang (E-commerce Logistics Specialist)

## 🏷️ 文章分类

- `FROM CHINA` - 中国出口相关
- `FBA` - Amazon FBA 相关
- `SHIPPING` - 运输相关
- `LOGISTICS` - 综合物流

## 📞 联系信息

SinoPrime Shipping - 您值得信赖的中国到北美物流合作伙伴

---

遵循最佳实践，每篇新博客文章都会自动具有完整的目录导航功能！
