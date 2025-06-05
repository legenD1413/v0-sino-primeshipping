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
- **SPS管理后台系统**（新增）

## 技术栈

- **框架**：Next.js 15.2.4 (App Router)
- **UI库**：Tailwind CSS + Radix UI组件
- **语言**：TypeScript
- **数据库**：PostgreSQL (Neon托管服务)
- **部署**：Vercel
- **邮件服务**：Postmark API
- **图标库**：Lucide React

## 表单系统

本项目提供两套完整的表单系统，为不同业务需求提供专业的解决方案。

### 1. 报价申请系统（新增）

专为客户报价需求设计的综合表单系统，提供完整的国际物流服务报价申请。

#### 访问地址
```
/get-quote
```

#### 功能特性
- 📝 完整的报价申请表单（包含联系信息和业务信息）
- ✅ 实时表单验证和错误提示
- 📧 自动邮件通知系统
- 🎨 现代化UI设计，参考SPS-99页面风格
- 📱 完全响应式移动端适配
- 🔄 提交状态实时反馈
- 💾 数据库持久化存储

#### 表单内容结构

**一、联系信息 (Contact Information)**
- 您的姓名 (必填)
- 公司/店铺名称 (必填)
- 邮箱地址 (必填)
- 电话号码 (选填)
- 国家 (必填) - 下拉选择：美国、加拿大、其他

**二、业务信息 (Business Information)**
- 主要产品类别 (必填) - 可填写多个
- 货物发货国 (必填) - 默认：中国
- 货物目的国/地区 (必填) - 多选：美国、加拿大、美国和加拿大、其他
- 偏好运输方式 (必填) - 多选：
  - FBA Prep & Ship Services
  - DTC Shipping
  - International Express
  - Warehousing & Fulfillment
  - LCL to Door
  - FCL to Door
  - Air Freight to Door
- 需求描述 (必填) - 详细的业务需求说明

#### 数据库支持
- 新建 `quote_requests` 数据表
- 支持JSON格式存储多选字段
- 自动时间戳记录
- 状态管理和工作流跟踪

### 2. SPS 99 Pioneer 项目申请系统

专为SPS 99 Pioneer项目设计的申请表单系统，提供完整的表单提交、邮件通知和管理功能。

#### 访问地址
```
/sps-99
```

#### 表单功能特性
- 📝 完整的项目申请表单
- ✅ 实时表单验证
- 📧 自动邮件通知
- 🎨 现代化UI设计
- 📱 移动端适配
- 🔄 提交状态反馈

#### 支持的业务类型
- TikTok销售商
- Kickstarter创作者  
- Indiegogo创作者
- 电商品牌
- 其他定制类型

## SPS管理后台系统

全新的管理后台系统，提供用户管理、表单管理和邮件系统配置功能。

### 访问地址

```
/sps-admin
```

### 登录信息

- **用户名**: admin
- **密码**: sps2024!

### 主要功能

#### 1. 用户管理
- ✅ 用户登录认证
- ✅ 添加新用户
- ✅ 删除用户（保护主管理员）
- ✅ 重置用户密码
- ✅ 用户角色管理（管理员/普通用户）
- ✅ 查看用户登录历史

#### 2. 表单管理系统（新增）
- ✅ SPS 99 Pioneer项目申请表单处理
- ✅ 表单数据自动保存到数据库
- ✅ 自动邮件通知功能
- ✅ 申请状态管理（待处理/处理中/已通过/已拒绝）
- ✅ 回复状态跟踪（未回复/已回复）
- ✅ 管理员备注系统
- ✅ 高级搜索和筛选功能
- ✅ 分页显示和批量操作
- ✅ 统计数据概览
- ✅ **Excel数据导出功能**（新增）
  - 导出全部表单数据为.xlsx格式
  - 包含完整的17个数据字段
  - 自动文件命名和下载
  - 中文字段标题和格式化
  - 支持大数据量导出

#### 3. Postmark邮件系统配置
- ✅ API令牌配置
- ✅ 发件人邮箱设置
- ✅ 回复邮箱设置
- ✅ 消息流配置
- ✅ 多收件人支持（主收件人/抄送/密抄）
- ✅ 邮件发送测试
- ✅ 配置保存和验证

#### 4. 数据库管理
- ✅ PostgreSQL数据库连接测试
- ✅ 数据库表信息查看
- ✅ 数据库初始化（创建用户表和配置表）
- ✅ 表单数据表初始化
- ✅ 连接状态监控
- ✅ 连接池状态查看
- ✅ 数据库版本信息显示

### API接口

管理后台提供以下API接口：

#### 认证接口
```
POST /api/sps-admin/auth    # 管理员登录
GET  /api/sps-admin/auth    # 验证登录状态
```

#### 用户管理接口
```
GET    /api/sps-admin/users    # 获取用户列表
POST   /api/sps-admin/users    # 创建新用户
PUT    /api/sps-admin/users    # 更新用户信息
DELETE /api/sps-admin/users    # 删除用户
```

#### 配置管理接口
```
GET  /api/sps-admin/config     # 获取系统配置
POST /api/sps-admin/config     # 保存配置
PUT  /api/sps-admin/config     # 更新配置
```

#### Postmark邮件接口
```
POST /api/postmark/send-test   # 发送测试邮件
```

#### 表单管理接口（新增）
```
GET    /api/sps-admin/forms           # 获取表单提交记录列表
PUT    /api/sps-admin/forms           # 更新表单状态和备注
DELETE /api/sps-admin/forms           # 删除表单记录
POST   /api/sps-99/submit             # 提交SPS 99 Pioneer申请
POST   /api/get-quote/submit          # 提交报价申请（新增）
GET    /api/sps-admin/forms/export    # 导出全部表单数据为Excel文件
```

#### 数据库管理接口
```
POST /api/sps-admin/database/test       # 测试数据库连接
GET  /api/sps-admin/database/test       # 获取数据库表信息
POST /api/sps-admin/database/init       # 初始化数据库表结构
POST /api/sps-admin/database/init-forms # 初始化表单数据表
```

### 安全特性

- 🔒 登录认证保护
- 🔒 防止删除主管理员
- 🔒 输入验证和清理
- 🔒 邮箱格式验证
- 🔒 SQL注入防护
- 🔒 XSS攻击防护
- 🔒 API错误处理

### 技术特色

- 🎨 现代化UI设计，遵循苹果设计规范
- 📱 完全响应式设计
- ⚡ 实时状态反馈
- 🔄 数据持久化存储
- 📧 Postmark邮件集成
- 🎯 类型安全的TypeScript
- 📊 统计数据可视化
- 🔍 高级搜索筛选
- 📄 分页数据显示
- 📝 富文本内容支持

## 博客管理系统

本项目集成了一个基于文件系统的简易博客管理系统，使用Markdown格式存储文章内容。

### 博客系统特性

- 基于Markdown的文章管理
- 文章分类和标签系统
- 简单的管理界面（CRUD操作）
- SEO优化的文章页面
- 响应式设计

### 博客管理界面

博客管理功能已集成到SPS管理后台系统中，提供统一的管理体验：

**主要访问路径：**
```
/sps-admin → 博客管理标签页
```

**传统访问路径（已安全保护）：**
```
/blog-admin                    # 需要管理员认证，自动重定向到安全页面
/blog-admin/new                # 创建新文章页面（需要认证）
/blog-admin/edit/[slug]        # 编辑文章页面（需要认证）
```

#### 博客管理安全改进

- 🔒 **认证保护**：所有博客管理页面都需要管理员认证
- 🔒 **自动重定向**：未认证用户访问博客管理页面会自动重定向到安全提示页面
- 🔒 **安全页面**：显示详细的安全说明和登录指引
- 🔒 **Cookie认证**：使用Cookie机制确保服务端中间件能够验证用户身份
- 🔒 **统一管理**：博客管理功能已完全集成到SPS管理后台

#### 博客管理功能特性

- ✅ 文章统计概览（总数、已发布、草稿、已归档）
- ✅ 文章列表展示和筛选
- ✅ 搜索功能（标题、分类、作者）
- ✅ 分类过滤
- ✅ 创建新文章（在新窗口打开）
- ✅ 编辑文章（在新窗口打开）
- ✅ 删除文章（带确认提示）
- ✅ 文章状态管理（发布、草稿、归档）
- ✅ 查看已发布文章（在新窗口打开）

### 安全架构

#### 中间件保护
项目包含一个Next.js中间件（`middleware.ts`），用于保护博客管理路由：

```typescript
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/blog-admin')) {
    const isAuthenticated = request.cookies.get('sps_admin_logged_in')?.value === 'true'
    if (!isAuthenticated) {
      const loginUrl = new URL('/sps-admin', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
}
```

#### 双重认证机制
- **localStorage**：客户端状态管理
- **Cookie**：服务端中间件验证
- **页面级检查**：每个页面都有独立的认证检查逻辑

### 博客文章结构

博客文章使用以下数据结构：

```typescript
type Post = {
  slug: string           // URL友好的标识符
  title: string          // 文章标题
  date: string           // 发布日期
  author: string         // 作者ID
  category: string       // 文章分类
  tags?: string[]        // 标签数组
  excerpt: string        // 文章摘要
  content: string        // Markdown格式的正文内容
  coverImage: string     // 封面图片URL
  readTime: string       // 预估阅读时间
  status?: 'draft' | 'published' | 'archived'  // 文章状态
}
```
/blog-admin
```

**集成后的功能特性：**
- ✅ 统计数据概览（总文章数、已发布、草稿、归档）
- ✅ 表格化文章列表显示，支持搜索和分类过滤
- ✅ 文章状态管理（草稿/已发布/归档）
- ✅ 与SPS管理后台统一的UI设计风格
- ✅ 完整的CRUD操作（创建、编辑、删除、查看）
- ✅ 直接跳转到原博客管理页面进行详细编辑
- ✅ 响应式表格设计，适配各种屏幕尺寸

**管理界面提供以下功能：**
- 查看所有文章列表和统计数据
- 创建新文章（跳转至/blog-admin/new）
- 编辑现有文章（跳转至/blog-admin/edit/[slug]）
- 删除文章并实时更新列表
- 按分类、状态、作者搜索和过滤

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

3. 配置环境变量

🚨 **重要：如果遇到数据库连接问题，请先运行环境配置脚本**

```powershell
# 快速解决数据库连接问题（推荐）
.\scripts\setup-env.ps1
```

或手动创建 `.env.local` 文件：
```bash
# 数据库配置（Neon PostgreSQL）
DATABASE_URL=postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require

# Postmark 邮件服务配置
POSTMARK_API_TOKEN=68ef6c85-6260-4277-8527-530727b0cc22

# 管理员默认密码
ADMIN_DEFAULT_PASSWORD=sps2024!

# 应用配置
NEXT_PUBLIC_APP_NAME=SPS Admin System
NEXT_PUBLIC_APP_VERSION=1.0.0
```

💡 **常见问题解决**：
- 如果遇到 "Connection terminated due to connection timeout"：请查看 [环境配置说明](docs/环境配置说明.md)
- 系统已优化连接超时时间和重试机制
- 内置数据库连接字符串作为默认值

4. 启动开发服务器
```bash
pnpm dev
```

5. 打开浏览器访问 http://localhost:3000

### 数据库设置

首次使用需要初始化数据库：

1. 访问 `/sps-admin` 管理后台
2. 使用 admin/sps2024! 登录
3. 切换到"数据库管理"标签页
4. 点击"测试连接"验证数据库连接
5. 点击"初始化数据库"创建必要的表结构

详细配置说明请参考：[数据库配置说明](docs/数据库配置说明.md)

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
