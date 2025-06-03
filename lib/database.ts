import { Pool } from 'pg'

// 数据库连接池配置 - 优化超时设置
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL || 'postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false
  },
  max: 10, // 最大连接数
  idleTimeoutMillis: 60000, // 空闲超时时间 (60秒)
  connectionTimeoutMillis: 10000, // 连接超时时间 (10秒)
  query_timeout: 30000, // 查询超时时间 (30秒)
  statement_timeout: 30000, // 语句超时时间 (30秒)
})

// 数据库连接测试函数 - 增加重试机制
export async function testDatabaseConnection(retries = 3) {
  let client
  let lastError
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`数据库连接尝试 ${attempt}/${retries}`)
      
      // 获取连接
      client = await pool.connect()
      
      // 执行简单查询测试连接
      const result = await client.query('SELECT NOW() as current_time, version() as db_version')
      
      // 获取数据库统计信息
      const statsResult = await client.query(`
        SELECT 
          COUNT(*) as total_tables 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
      `)
      
      // 检查连接池状态
      const poolStats = {
        totalCount: pool.totalCount,
        idleCount: pool.idleCount,
        waitingCount: pool.waitingCount
      }
      
      console.log('数据库连接成功！')
      return {
        success: true,
        message: '数据库连接成功',
        data: {
          currentTime: result.rows[0].current_time,
          version: result.rows[0].db_version,
          totalTables: statsResult.rows[0].total_tables,
          poolStats,
          connectionString: process.env.DATABASE_URL ? '已配置' : '使用默认配置',
          attempts: attempt
        }
      }
    } catch (error) {
      lastError = error
      console.error(`数据库连接失败 (尝试 ${attempt}/${retries}):`, error)
      
      if (client) {
        client.release()
        client = undefined
      }
      
      // 如果不是最后一次尝试，等待后重试
      if (attempt < retries) {
        console.log(`等待 ${attempt * 2} 秒后重试...`)
        await new Promise(resolve => setTimeout(resolve, attempt * 2000))
      }
    }
  }
  
  return {
    success: false,
    message: `数据库连接失败 (已尝试 ${retries} 次)`,
    error: lastError instanceof Error ? lastError.message : '未知错误'
  }
}

// 执行数据库查询 - 增加重试机制
export async function executeQuery(text: string, params?: any[], retries = 2) {
  let lastError
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    let client
    try {
      client = await pool.connect()
      const result = await client.query(text, params)
      return {
        success: true,
        data: result.rows,
        rowCount: result.rowCount
      }
    } catch (error) {
      lastError = error
      console.error(`数据库查询失败 (尝试 ${attempt}/${retries}):`, error)
      
      // 如果不是最后一次尝试，等待后重试
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    } finally {
      if (client) {
        client.release()
      }
    }
  }
  
  return {
    success: false,
    error: lastError instanceof Error ? lastError.message : '未知错误'
  }
}

// 获取数据库表信息
export async function getDatabaseTables() {
  const query = `
    SELECT 
      table_name,
      table_type,
      is_insertable_into
    FROM information_schema.tables 
    WHERE table_schema = 'public'
    ORDER BY table_name
  `
  
  return await executeQuery(query)
}

// 创建用户表（如果不存在）
export async function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(20) DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      last_login TIMESTAMP
    )
  `
  
  return await executeQuery(query)
}

// 创建配置表（如果不存在）
export async function createConfigTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS system_config (
      id SERIAL PRIMARY KEY,
      config_key VARCHAR(100) UNIQUE NOT NULL,
      config_value JSONB NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
  
  return await executeQuery(query)
}

// 初始化数据库表
export async function initializeDatabase() {
  try {
    // 创建用户表
    const userTableResult = await createUsersTable()
    if (!userTableResult.success) {
      throw new Error(`创建用户表失败: ${userTableResult.error}`)
    }
    
    // 创建配置表
    const configTableResult = await createConfigTable()
    if (!configTableResult.success) {
      throw new Error(`创建配置表失败: ${configTableResult.error}`)
    }
    
    // 检查是否有默认管理员用户
    const adminCheck = await executeQuery(
      "SELECT id FROM users WHERE username = $1",
      ['admin']
    )
    
    if (adminCheck.success && adminCheck.data && adminCheck.data.length === 0) {
      // 插入默认管理员用户（实际项目中密码应该被哈希）
      await executeQuery(
        `INSERT INTO users (username, email, password_hash, role) 
         VALUES ($1, $2, $3, $4)`,
        ['admin', 'admin@sinoprimeshipping.com', 'sps2024!', 'admin']
      )
    }
    
    return {
      success: true,
      message: '数据库初始化成功'
    }
  } catch (error) {
    console.error('数据库初始化失败:', error)
    return {
      success: false,
      message: '数据库初始化失败',
      error: error instanceof Error ? error.message : '未知错误'
    }
  }
}

// 关闭数据库连接池
export async function closeDatabasePool() {
  await pool.end()
}

export default pool 