import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 博客文章目录路径
const postsDirectory = path.join(process.cwd(), 'content/posts')

// 获取单篇文章
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const filePath = path.join(postsDirectory, `${slug}.md`)
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: '文章不存在' },
        { status: 404 }
      )
    }
    
    // 读取文件内容
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)
    
    // 返回文章数据
    return NextResponse.json({
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      author: matterResult.data.author || '',
      category: matterResult.data.category || '',
      tags: matterResult.data.tags || [],
      excerpt: matterResult.data.excerpt || '',
      content: matterResult.content || '',
      coverImage: matterResult.data.coverImage || '',
      readTime: matterResult.data.readTime || ''
    })
  } catch (error) {
    console.error('获取文章失败:', error)
    return NextResponse.json({ error: '获取文章失败' }, { status: 500 })
  }
}

// 更新文章
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const filePath = path.join(postsDirectory, `${slug}.md`)
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: '文章不存在' },
        { status: 404 }
      )
    }
    
    // 获取请求数据
    const data = await request.json()
    
    // 验证必要字段
    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: '标题和内容为必填字段' },
        { status: 400 }
      )
    }
    
    // 如果要更改slug
    if (data.slug && data.slug !== slug) {
      const newFilePath = path.join(postsDirectory, `${data.slug}.md`)
      
      // 检查新slug是否已存在
      if (fs.existsSync(newFilePath)) {
        return NextResponse.json(
          { error: '该slug已存在，请使用其他标识符' },
          { status: 409 }
        )
      }
      
      // 删除旧文件（在创建新文件后进行）
      const shouldDeleteOldFile = true
    } else {
      // 保持原有slug
      data.slug = slug
    }
    
    // 创建frontmatter内容
    const frontmatter = {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      readTime: data.readTime || ''
    }
    
    // 使用gray-matter创建文件内容
    const fileContent = matter.stringify(data.content, frontmatter)
    
    // 写入新文件
    const targetPath = path.join(postsDirectory, `${data.slug}.md`)
    fs.writeFileSync(targetPath, fileContent, 'utf8')
    
    // 如果slug发生变化，删除旧文件
    if (data.slug !== slug) {
      fs.unlinkSync(filePath)
    }
    
    return NextResponse.json({ success: true, slug: data.slug })
  } catch (error) {
    console.error('更新文章失败:', error)
    return NextResponse.json({ error: '更新文章失败' }, { status: 500 })
  }
}

// 删除文章
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const filePath = path.join(postsDirectory, `${slug}.md`)
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: '文章不存在' },
        { status: 404 }
      )
    }
    
    // 删除文件
    fs.unlinkSync(filePath)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('删除文章失败:', error)
    return NextResponse.json({ error: '删除文章失败' }, { status: 500 })
  }
} 