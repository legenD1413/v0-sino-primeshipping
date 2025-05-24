import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 博客文章目录路径
const postsDirectory = path.join(process.cwd(), 'content/posts')

// 获取所有文章列表
export async function GET(request: NextRequest) {
  try {
    // 确保目录存在
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }
    
    // 获取目录下的所有md文件
    const fileNames = fs.readdirSync(postsDirectory)
    const postsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        // 从文件名获取slug
        const slug = fileName.replace(/\.md$/, '')
        
        // 读取markdown文件
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // 使用gray-matter解析frontmatter
        const matterResult = matter(fileContents)
        
        // 返回需要的数据
        return {
          slug,
          title: matterResult.data.title || '',
          date: matterResult.data.date || '',
          author: matterResult.data.author || '',
          category: matterResult.data.category || '',
          excerpt: matterResult.data.excerpt || '',
          coverImage: matterResult.data.coverImage || ''
        }
      })
    
    // 按日期排序
    const sortedPosts = postsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
    
    return NextResponse.json(sortedPosts)
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return NextResponse.json({ error: '获取文章列表失败' }, { status: 500 })
  }
}

// 创建新文章
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // 验证必要字段
    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json(
        { error: '标题、slug和内容为必填字段' },
        { status: 400 }
      )
    }
    
    // 检查slug是否已存在
    const filePath = path.join(postsDirectory, `${data.slug}.md`)
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: '该slug已存在，请使用其他标识符' },
        { status: 409 }
      )
    }
    
    // 确保目录存在
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }
    
    // 创建frontmatter内容
    const frontmatter = {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      readTime: data.readTime || ''
    }
    
    // 使用gray-matter创建文件内容
    const fileContent = matter.stringify(data.content, frontmatter)
    
    // 写入文件
    fs.writeFileSync(filePath, fileContent, 'utf8')
    
    return NextResponse.json({ success: true, slug: data.slug }, { status: 201 })
  } catch (error) {
    console.error('创建文章失败:', error)
    return NextResponse.json({ error: '创建文章失败' }, { status: 500 })
  }
} 