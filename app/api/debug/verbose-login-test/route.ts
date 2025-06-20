import { NextRequest, NextResponse } from 'next/server'
import { 
  getUserByUsername, 
  verifyPassword, 
  hashPassword,
  initializeDefaultUsers
} from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    const debugLog: string[] = []
    const debugData: any = {}
    
    debugLog.push('=== 详细登录测试开始 ===')
    
    const username = 'admin'
    const password = 'sps2024!'
    
    debugLog.push(`测试用户名: ${username}`)
    debugLog.push(`测试密码: ${password}`)
    debugLog.push(`密码长度: ${password.length}`)
    
    // 1. 初始化用户
    debugLog.push('步骤1: 初始化默认用户')
    await initializeDefaultUsers()
    debugLog.push('初始化完成')
    
    // 2. 查找用户
    debugLog.push('步骤2: 查找用户')
    const user = await getUserByUsername(username)
    
    if (!user) {
      debugLog.push('用户查找失败: 用户不存在')
      return NextResponse.json({
        success: false,
        step: 'getUserByUsername',
        debugLog,
        debugData
      })
    }
    
    debugLog.push('用户查找成功')
    debugData.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      passwordLength: user.password.length,
      passwordHash: user.password
    }
    
    // 3. 检查用户状态
    debugLog.push('步骤3: 检查用户状态')
    if (!user.isActive) {
      debugLog.push('用户状态检查失败: 账户已禁用')
      return NextResponse.json({
        success: false,
        step: 'userStatus',
        debugLog,
        debugData
      })
    }
    debugLog.push('用户状态正常')
    
    // 4. 密码验证 - 详细分析
    debugLog.push('步骤4: 密码验证详细分析')
    
    // 4a. 生成新的密码哈希
    const newPasswordHash = hashPassword(password)
    debugLog.push(`输入密码: "${password}"`)
    debugLog.push(`新生成的哈希: "${newPasswordHash}"`)
    debugLog.push(`存储的哈希: "${user.password}"`)
    debugLog.push(`新哈希长度: ${newPasswordHash.length}`)
    debugLog.push(`存储哈希长度: ${user.password.length}`)
    
    debugData.passwordAnalysis = {
      inputPassword: password,
      newHash: newPasswordHash,
      storedHash: user.password,
      newHashLength: newPasswordHash.length,
      storedHashLength: user.password.length
    }
    
    // 4b. 直接比较
    const directMatch = newPasswordHash === user.password
    debugLog.push(`直接哈希比较结果: ${directMatch}`)
    debugData.passwordAnalysis.directMatch = directMatch
    
    // 4c. 使用verifyPassword函数
    const verifyResult = verifyPassword(password, user.password)
    debugLog.push(`verifyPassword函数结果: ${verifyResult}`)
    debugData.passwordAnalysis.verifyResult = verifyResult
    
    // 4d. 字符串比较
    const charByCharMatch = newPasswordHash.split('').every((char, index) => 
      char === user.password[index]
    )
    debugLog.push(`逐字符比较结果: ${charByCharMatch}`)
    debugData.passwordAnalysis.charByCharMatch = charByCharMatch
    
    debugLog.push('=== 详细登录测试完成 ===')
    
    return NextResponse.json({
      success: true,
      message: '详细登录测试完成',
      finalResult: {
        userFound: !!user,
        userActive: user.isActive,
        passwordVerified: verifyResult,
        allTestsPassed: !!user && user.isActive && verifyResult
      },
      debugLog,
      debugData
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误',
      step: 'exception'
    }, { status: 500 })
  }
} 