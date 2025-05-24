import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 博客文章目录路径
const postsDirectory = path.join(process.cwd(), 'content/posts');
const authorsDirectory = path.join(process.cwd(), 'content/authors');

// 添加调试信息
console.log("当前工作目录:", process.cwd());
console.log("文章目录路径:", postsDirectory);
console.log("作者目录路径:", authorsDirectory);
console.log("文章目录是否存在:", fs.existsSync(postsDirectory));
console.log("作者目录是否存在:", fs.existsSync(authorsDirectory));
if (fs.existsSync(authorsDirectory)) {
  console.log("作者目录内容:", fs.readdirSync(authorsDirectory));
}

// 博客文章类型定义
export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  readTime: string;
};

// 作者类型定义
export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

// 获取所有博客文章
export function getAllPosts(): Post[] {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // 获取目录下的所有md文件
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // 从文件名获取slug
      const slug = fileName.replace(/\.md$/, '');
      
      // 读取markdown文件
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // 使用gray-matter解析frontmatter
      const matterResult = matter(fileContents);
      
      // 输出作者信息以进行调试
      console.log(`文件: ${fileName}, 作者ID: ${matterResult.data.author}`);
      
      // 合并数据
      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        author: matterResult.data.author || '',
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content || '',
        coverImage: matterResult.data.coverImage || '',
        category: matterResult.data.category || '',
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime || '',
      } as Post;
    });
  
  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取所有文章的slug
export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

// 根据slug获取文章详情
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // 使用remark将markdown转换为HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    author: matterResult.data.author || '',
    excerpt: matterResult.data.excerpt || '',
    content: contentHtml,
    coverImage: matterResult.data.coverImage || '',
    category: matterResult.data.category || '',
    tags: matterResult.data.tags || [],
    readTime: matterResult.data.readTime || '',
  };
}

// 根据类别获取文章
export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(post => post.category === category);
}

// 获取所有类别
export function getAllCategories(): { name: string; count: number; key: string }[] {
  const posts = getAllPosts();
  const categories = posts.reduce((acc, post) => {
    const category = post.category;
    if (category) {
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category]++;
    }
    return acc;
  }, {} as Record<string, number>);
  
  return Object.keys(categories).map(key => ({
    name: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    count: categories[key],
    key
  }));
}

// 获取所有标签
export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const tags: Record<string, number> = {};
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        if (!tags[tag]) {
          tags[tag] = 0;
        }
        tags[tag]++;
      });
    }
  });
  
  return Object.keys(tags).map(key => ({
    name: key,
    count: tags[key]
  }));
}

// 获取所有作者
export function getAllAuthors(): Author[] {
  try {
    const fullPath = path.join(authorsDirectory, 'authors.json');
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Authors file not found at: ${fullPath}`);
      return [];
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(`Authors file content: ${fileContents}`);
    
    try {
      const data = JSON.parse(fileContents);
      if (!data.authors || !Array.isArray(data.authors)) {
        console.error('Invalid authors data format:', data);
        return [];
      }
      console.log(`Parsed authors data: ${JSON.stringify(data.authors)}`);
      return data.authors;
    } catch (parseError) {
      console.error('Failed to parse authors JSON:', parseError);
      return [];
    }
  } catch (error) {
    console.error('Error getting all authors:', error);
    return [];
  }
}

// 根据ID获取作者
export function getAuthorById(id: string): Author | null {
  try {
    if (!id) {
      console.log('No author ID provided');
      return null;
    }
    
    const authors = getAllAuthors();
    console.log(`Looking for author with ID: ${id}, Available authors: ${JSON.stringify(authors.map(a => a.id))}`);
    
    const author = authors.find(author => author.id === id);
    if (!author) {
      console.log(`Author with ID ${id} not found`);
    }
    return author || null;
  } catch (error) {
    console.error(`Error getting author with ID ${id}:`, error);
    return null;
  }
}

// 搜索文章
export function searchPosts(query: string): Post[] {
  const posts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter(post => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    );
  });
}

// 获取相关文章
export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const currentPost = getAllPosts().find(post => post.slug === currentSlug);
  if (!currentPost) return [];
  
  const allPosts = getAllPosts();
  
  // 过滤掉当前文章
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // 计算相关性得分
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // 相同类别加分
    if (post.category === currentPost.category) score += 3;
    
    // 相同标签加分
    if (currentPost.tags && post.tags) {
      currentPost.tags.forEach(tag => {
        if (post.tags.includes(tag)) score += 2;
      });
    }
    
    return { post, score };
  });
  
  // 按得分排序，获取前N篇相关文章
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(scoredPost => scoredPost.post);
} 