import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'
import { hashPassword, verifyPassword } from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    console.log('=== 重置管理员密码 ===')
    
    const newPassword = 'sps2024!'
    const hashedPassword = hashPassword(newPassword)
    
    console.log('新密码:', newPassword)
    console.log('新密码哈希:', hashedPassword)
    console.log('哈希长度:', hashedPassword.length)
    
    // 更新admin用户的密码
    const updateResult = await executeQuery(`
      UPDATE users 
      SET password_hash = $1, updated_at = CURRENT_TIMESTAMP
      WHERE username = 'admin'
      RETURNING id, username, password_hash
    `, [hashedPassword])
    
    console.log('更新结果:', updateResult)
    
    if (updateResult.success && updateResult.data && updateResult.data.length > 0) {
      const updatedUser = updateResult.data[0]
      
      // 验证密码是否正确设置
      const verificationResult = verifyPassword(newPassword, updatedUser.password_hash)
      console.log('密码验证结果:', verificationResult)
      
      return NextResponse.json({
        success: true,
        message: '管理员密码重置成功',
        data: {
          userId: updatedUser.id,
          username: updatedUser.username,
          passwordHashLength: updatedUser.password_hash.length,
          verificationPassed: verificationResult,
          newPassword: newPassword
        }
      })
    } else {
      return NextResponse.json({
        success: false,
        error: '密码更新失败',
        details: updateResult.error
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('重置密码失败:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 