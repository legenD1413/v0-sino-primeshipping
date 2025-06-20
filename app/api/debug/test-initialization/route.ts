import { NextRequest, NextResponse } from 'next/server'
import { 
  getUserByUsername, 
  addUser,
  hashPassword,
  getAllUsers
} from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    const debugLog: string[] = []
    const debugData: any = {}
    
    debugLog.push('=== 初始化测试开始 ===')
    
    // 1. 检查所有现有用户
    debugLog.push('步骤1: 检查所有现有用户')
    const allUsers = await getAllUsers()
    debugLog.push(`现有用户数量: ${allUsers.length}`)
    allUsers.forEach((user, index) => {
      debugLog.push(`用户${index + 1}: ${user.username} (${user.email}) - 激活状态: ${user.isActive}`)
    })
    debugData.existingUsers = allUsers
    
    // 2. 查找admin用户
    debugLog.push('步骤2: 查找admin用户')
    const adminUser = await getUserByUsername('admin')
    debugLog.push(`admin用户查找结果: ${adminUser ? '找到' : '未找到'}`)
    if (adminUser) {
      debugLog.push(`admin用户详情: ID=${adminUser.id}, 激活=${adminUser.isActive}, 密码长度=${adminUser.password.length}`)
      debugData.adminUser = adminUser
    }
    
    // 3. 如果admin用户不存在，创建它
    if (!adminUser) {
      debugLog.push('步骤3: admin用户不存在，创建新的admin用户')
      const newUser = await addUser({
        username: 'admin',
        email: 'admin@sinoprimeshipping.com',
        password: hashPassword('sps2024!'),
        role: 'admin',
        lastLogin: '从未登录',
        isActive: true
      })
      
      if (newUser) {
        debugLog.push('admin用户创建成功')
        debugData.createdAdmin = newUser
      } else {
        debugLog.push('admin用户创建失败')
      }
    } else {
      debugLog.push('步骤3: admin用户已存在，跳过创建')
    }
    
    // 4. 再次检查admin用户
    debugLog.push('步骤4: 再次验证admin用户')
    const finalAdminUser = await getUserByUsername('admin')
    debugLog.push(`最终admin用户状态: ${finalAdminUser ? '存在' : '不存在'}`)
    if (finalAdminUser) {
      debugData.finalAdminUser = finalAdminUser
    }
    
    // 5. 再次检查所有用户
    debugLog.push('步骤5: 最终用户列表')
    const finalAllUsers = await getAllUsers()
    debugLog.push(`最终用户数量: ${finalAllUsers.length}`)
    finalAllUsers.forEach((user, index) => {
      debugLog.push(`最终用户${index + 1}: ${user.username} (${user.email}) - 激活: ${user.isActive}`)
    })
    debugData.finalAllUsers = finalAllUsers
    
    debugLog.push('=== 初始化测试完成 ===')
    
    return NextResponse.json({
      success: true,
      message: '初始化测试完成',
      summary: {
        initialUserCount: allUsers.length,
        adminFoundInitially: !!adminUser,
        adminFoundFinally: !!finalAdminUser,
        finalUserCount: finalAllUsers.length
      },
      debugLog,
      debugData
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 