import crypto from 'crypto'
import { executeQuery } from './database'

// 简单的密码加密函数（实际项目中推荐使用bcrypt）
export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

// 验证密码函数
export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

// 用户接口定义
export interface User {
  id: string
  username: string
  email: string
  password: string
  role: 'admin' | 'user'
  lastLogin: string
  createdAt: string
  updatedAt: string
  isActive: boolean
}

// 数据库用户字段映射
interface DbUser {
  id: number
  username: string
  email: string
  password_hash: string
  role: 'admin' | 'user'
  last_login: string | null
  created_at: string
  updated_at: string
  is_active?: boolean
}

// 转换数据库用户到应用用户格式
function dbUserToUser(dbUser: DbUser): User {
  return {
    id: dbUser.id.toString(),
    username: dbUser.username,
    email: dbUser.email,
    password: dbUser.password_hash,
    role: dbUser.role,
    lastLogin: dbUser.last_login || '从未登录',
    createdAt: dbUser.created_at,
    updatedAt: dbUser.updated_at,
    isActive: dbUser.is_active !== false
  }
}

// 获取所有用户
export async function getAllUsers(): Promise<User[]> {
  try {
    const result = await executeQuery(`
      SELECT id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
      FROM users 
      ORDER BY created_at DESC
    `)
    
    if (result.success && result.data) {
      return result.data.map(dbUserToUser)
    }
    
    return []
  } catch (error) {
    console.error('获取用户列表失败:', error)
    return []
  }
}

// 根据ID查找用户
export async function getUserById(id: string): Promise<User | undefined> {
  try {
    const result = await executeQuery(`
      SELECT id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
      FROM users 
      WHERE id = $1
    `, [parseInt(id)])
    
    if (result.success && result.data && result.data.length > 0) {
      return dbUserToUser(result.data[0])
    }
    
    return undefined
  } catch (error) {
    console.error('根据ID查找用户失败:', error)
    return undefined
  }
}

// 根据用户名或邮箱查找用户
export async function getUserByUsername(username: string): Promise<User | undefined> {
  try {
    const result = await executeQuery(`
      SELECT id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
      FROM users 
      WHERE username = $1 OR email = $1
    `, [username])
    
    if (result.success && result.data && result.data.length > 0) {
      return dbUserToUser(result.data[0])
    }
    
    return undefined
  } catch (error) {
    console.error('根据用户名查找用户失败:', error)
    return undefined
  }
}

// 添加新用户
export async function addUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User | null> {
  try {
    console.log('=== 数据库添加用户操作 ===')
    console.log('用户数据:', { ...userData, password: userData.password ? `${userData.password.substring(0, 10)}...` : undefined })
    
    const result = await executeQuery(`
      INSERT INTO users (username, email, password_hash, role, last_login, is_active)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
    `, [
      userData.username,
      userData.email,
      userData.password,
      userData.role,
      userData.lastLogin,
      userData.isActive === true
    ])
    
    console.log('数据库插入结果:', result.success ? '成功' : '失败')
    if (!result.success) {
      console.log('数据库错误:', result.error)
    }
    
    if (result.success && result.data && result.data.length > 0) {
      console.log('用户创建成功，ID:', result.data[0].id)
      return dbUserToUser(result.data[0])
    }
    
    console.log('用户创建失败：没有返回数据')
    return null
  } catch (error) {
    console.error('添加用户失败:', error)
    return null
  }
}

// 更新用户信息
export async function updateUser(id: string, updates: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null> {
  try {
    const updateFields: string[] = []
    const updateValues: any[] = []
    let paramIndex = 1

    // 构建动态更新语句
    if (updates.username !== undefined) {
      updateFields.push(`username = $${paramIndex++}`)
      updateValues.push(updates.username)
    }
    if (updates.email !== undefined) {
      updateFields.push(`email = $${paramIndex++}`)
      updateValues.push(updates.email)
    }
    if (updates.password !== undefined) {
      updateFields.push(`password_hash = $${paramIndex++}`)
      updateValues.push(updates.password)
    }
    if (updates.role !== undefined) {
      updateFields.push(`role = $${paramIndex++}`)
      updateValues.push(updates.role)
    }
    if (updates.lastLogin !== undefined) {
      updateFields.push(`last_login = $${paramIndex++}`)
      updateValues.push(updates.lastLogin)
    }
    if (updates.isActive !== undefined) {
      updateFields.push(`is_active = $${paramIndex++}`)
      updateValues.push(updates.isActive)
    }

    // 总是更新 updated_at
    updateFields.push(`updated_at = CURRENT_TIMESTAMP`)
    
    // 添加 WHERE 条件的参数
    updateValues.push(parseInt(id))

    const query = `
      UPDATE users 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
    `
    
    console.log('=== 数据库更新操作 ===')
    console.log('更新字段:', updateFields)
    console.log('参数值:', updateValues.map(v => typeof v === 'string' && v.length > 20 ? `${v.substring(0, 20)}...` : v))
    
    const result = await executeQuery(query, updateValues)
    
    if (result.success && result.data && result.data.length > 0) {
      console.log('数据库更新成功')
      return dbUserToUser(result.data[0])
    }
    
    console.log('数据库更新失败:', result.error)
    return null
  } catch (error) {
    console.error('更新用户失败:', error)
    return null
  }
}

// 删除用户
export async function deleteUser(id: string): Promise<User | null> {
  try {
    const result = await executeQuery(`
      DELETE FROM users 
      WHERE id = $1
      RETURNING id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
    `, [parseInt(id)])
    
    if (result.success && result.data && result.data.length > 0) {
      return dbUserToUser(result.data[0])
    }
    
    return null
  } catch (error) {
    console.error('删除用户失败:', error)
    return null
  }
}

// 检查用户名或邮箱是否已存在（用于注册时验证）
export async function isUserExists(username: string, email: string, excludeId?: string): Promise<boolean> {
  try {
    let query = `
      SELECT id FROM users 
      WHERE (username = $1 OR email = $2)
    `
    const params = [username, email]
    
         if (excludeId) {
       query += ` AND id != $3`
       params.push(excludeId)
     }
    
    const result = await executeQuery(query, params)
    
    return result.success && result.data && result.data.length > 0
  } catch (error) {
    console.error('检查用户是否存在失败:', error)
    return false
  }
}

// 初始化默认用户（如果不存在）
export async function initializeDefaultUsers(): Promise<void> {
  try {
    const adminExists = await getUserByUsername('admin')
    
    if (!adminExists) {
      console.log('创建默认管理员用户...')
      await addUser({
        username: 'admin',
        email: 'admin@sinoprimeshipping.com',
        password: hashPassword('sps2024!'),
        role: 'admin',
        lastLogin: '从未登录',
        isActive: true
      })
      console.log('默认管理员用户创建成功')
    }
  } catch (error) {
    console.error('初始化默认用户失败:', error)
  }
} 