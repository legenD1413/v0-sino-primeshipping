'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function DebugPage() {
  const [results, setResults] = useState<any>({})
  const [loading, setLoading] = useState<any>({})

  const callAPI = async (endpoint: string, method: string = 'GET', key: string) => {
    setLoading({...loading, [key]: true})
    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, [key]: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, [key]: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, [key]: false})
    }
  }

  const testLogin = async () => {
    setLoading({...loading, login: true})
    try {
      const response = await fetch('/api/sps-admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: 'sps2024!'
        })
      })
      
      const data = await response.json()
      setResults({...results, login: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, login: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, login: false})
    }
  }

  const directAuthTest = async () => {
    setLoading({...loading, directAuth: true})
    try {
      const response = await fetch('/api/debug/direct-auth-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, directAuth: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, directAuth: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, directAuth: false})
    }
  }

  const simpleLoginTest = async () => {
    setLoading({...loading, simpleLogin: true})
    try {
      const response = await fetch('/api/debug/simple-login-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, simpleLogin: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, simpleLogin: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, simpleLogin: false})
    }
  }

  const verboseLoginTest = async () => {
    setLoading({...loading, verboseLogin: true})
    try {
      const response = await fetch('/api/debug/verbose-login-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, verboseLogin: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, verboseLogin: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, verboseLogin: false})
    }
  }

  const testInitialization = async () => {
    setLoading({...loading, testInit: true})
    try {
      const response = await fetch('/api/debug/test-initialization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, testInit: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, testInit: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, testInit: false})
    }
  }

  const testDatabaseConnection = async () => {
    setLoading({...loading, testDB: true})
    try {
      const response = await fetch('/api/debug/test-database-connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, testDB: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, testDB: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, testDB: false})
    }
  }

  const fixUsersTable = async () => {
    setLoading({...loading, fixTable: true})
    try {
      const response = await fetch('/api/debug/fix-users-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const data = await response.json()
      setResults({...results, fixTable: {
        status: response.status,
        success: response.ok,
        data
      }})
    } catch (error) {
      setResults({...results, fixTable: {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      }})
    } finally {
      setLoading({...loading, fixTable: false})
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">SPS 系统调试工具</h1>
      
      <div className="grid gap-4">
        {/* 数据库初始化 */}
        <Card>
          <CardHeader>
            <CardTitle>1. 数据库初始化</CardTitle>
            <CardDescription>创建用户表和默认管理员账户</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => callAPI('/api/sps-admin/database/init-users', 'POST', 'init')}
              disabled={loading.init}
            >
              {loading.init ? '初始化中...' : '初始化数据库'}
            </Button>
            
            {results.init && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.init.status} - {results.init.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.init.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 检查登录信息 */}
        <Card>
          <CardHeader>
            <CardTitle>2. 检查登录信息</CardTitle>
            <CardDescription>查看当前数据库中的用户信息和密码测试</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => callAPI('/api/debug/login-info', 'GET', 'info')}
              disabled={loading.info}
            >
              {loading.info ? '检查中...' : '检查登录信息'}
            </Button>
            
            {results.info && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.info.status} - {results.info.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.info.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 重置密码 */}
        <Card>
          <CardHeader>
            <CardTitle>3. 重置管理员密码</CardTitle>
            <CardDescription>重新设置admin用户的密码为 sps2024!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => callAPI('/api/debug/reset-admin-password', 'POST', 'reset')}
              disabled={loading.reset}
              variant="outline"
            >
              {loading.reset ? '重置中...' : '重置密码'}
            </Button>
            
            {results.reset && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.reset.status} - {results.reset.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.reset.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 测试登录 */}
        <Card>
          <CardHeader>
            <CardTitle>4. 测试登录</CardTitle>
            <CardDescription>使用默认凭据 (admin / sps2024!) 测试登录</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testLogin}
              disabled={loading.login}
            >
              {loading.login ? '登录中...' : '测试登录'}
            </Button>
            
            {results.login && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.login.status} - {results.login.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.login.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 直接认证测试 */}
        <Card>
          <CardHeader>
            <CardTitle>5. 直接认证测试</CardTitle>
            <CardDescription>绕过可能的缓存问题，直接测试数据库认证</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={directAuthTest}
              disabled={loading.directAuth}
              variant="secondary"
            >
              {loading.directAuth ? '测试中...' : '直接认证测试'}
            </Button>
            
            {results.directAuth && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.directAuth.status} - {results.directAuth.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.directAuth.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 简单登录测试 */}
        <Card>
          <CardHeader>
            <CardTitle>6. 简单登录测试</CardTitle>
            <CardDescription>服务器端调用登录API，排除客户端问题</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={simpleLoginTest}
              disabled={loading.simpleLogin}
              variant="outline"
            >
              {loading.simpleLogin ? '测试中...' : '简单登录测试'}
            </Button>
            
            {results.simpleLogin && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.simpleLogin.status} - {results.simpleLogin.success ? '成功' : '失败'}
                  <br />
                  <strong>响应：</strong> {JSON.stringify(results.simpleLogin.data, null, 2)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 详细登录测试 */}
        <Card>
          <CardHeader>
            <CardTitle>7. 详细登录测试</CardTitle>
            <CardDescription>🔍 深度分析每个验证步骤，显示所有调试信息</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={verboseLoginTest}
              disabled={loading.verboseLogin}
              variant="destructive"
            >
              {loading.verboseLogin ? '分析中...' : '🔍 详细分析'}
            </Button>
            
            {results.verboseLogin && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.verboseLogin.status} - {results.verboseLogin.success ? '成功' : '失败'}
                  <br />
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                    <strong>调试日志：</strong>
                    <pre className="whitespace-pre-wrap">
                      {results.verboseLogin.data?.debugLog?.join('\n')}
                    </pre>
                  </div>
                  <div className="mt-2">
                    <strong>详细数据：</strong>
                    <pre className="whitespace-pre-wrap text-xs">
                      {JSON.stringify(results.verboseLogin.data?.debugData, null, 2)}
                    </pre>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 初始化测试 */}
        <Card>
          <CardHeader>
            <CardTitle>8. 初始化深度测试</CardTitle>
            <CardDescription>🔧 测试用户初始化过程，查找admin用户消失的原因</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testInitialization}
              disabled={loading.testInit}
              variant="secondary"
            >
              {loading.testInit ? '测试中...' : '🔧 测试初始化'}
            </Button>
            
            {results.testInit && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.testInit.status} - {results.testInit.success ? '成功' : '失败'}
                  <br />
                  <div className="mt-2 p-2 bg-blue-50 rounded text-xs">
                    <strong>测试摘要：</strong>
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(results.testInit.data?.summary, null, 2)}
                    </pre>
                  </div>
                  <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                    <strong>调试日志：</strong>
                    <pre className="whitespace-pre-wrap">
                      {results.testInit.data?.debugLog?.join('\n')}
                    </pre>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 数据库连接测试 */}
        <Card>
          <CardHeader>
            <CardTitle>9. 数据库深度诊断</CardTitle>
            <CardDescription>🔍 测试数据库连接、表结构和插入操作</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={testDatabaseConnection}
              disabled={loading.testDB}
              variant="destructive"
            >
              {loading.testDB ? '诊断中...' : '🔍 数据库诊断'}
            </Button>
            
            {results.testDB && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.testDB.status} - {results.testDB.success ? '成功' : '失败'}
                  <br />
                  <div className="mt-2 p-2 bg-red-50 rounded text-xs">
                    <strong>诊断日志：</strong>
                    <pre className="whitespace-pre-wrap">
                      {results.testDB.data?.debugLog?.join('\n')}
                    </pre>
                  </div>
                  {results.testDB.data?.debugData && (
                    <div className="mt-2 p-2 bg-yellow-50 rounded text-xs">
                      <strong>详细数据：</strong>
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(results.testDB.data.debugData, null, 2)}
                      </pre>
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 修复users表 */}
        <Card>
          <CardHeader>
            <CardTitle>🔧 修复users表</CardTitle>
            <CardDescription>⚠️ 添加缺失的is_active列以修复登录问题</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={fixUsersTable}
              disabled={loading.fixTable}
              variant="default"
              className="bg-green-600 hover:bg-green-700"
            >
              {loading.fixTable ? '修复中...' : '🔧 修复表结构'}
            </Button>
            
            {results.fixTable && (
              <Alert className="mt-4">
                <AlertDescription>
                  <strong>状态：</strong> {results.fixTable.status} - {results.fixTable.success ? '成功' : '失败'}
                  <br />
                  <div className="mt-2 p-2 bg-green-50 rounded text-xs">
                    <strong>修复日志：</strong>
                    <pre className="whitespace-pre-wrap">
                      {results.fixTable.data?.debugLog?.join('\n')}
                    </pre>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* 结果总结 */}
        {Object.keys(results).length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>调试结果总结</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {results.init && (
                  <div>✅ 数据库初始化：{results.init.success ? '成功' : '失败'}</div>
                )}
                {results.info && (
                  <div>✅ 登录信息检查：{results.info.success ? '成功' : '失败'}</div>
                )}
                {results.reset && (
                  <div>✅ 密码重置：{results.reset.success ? '成功' : '失败'}</div>
                )}
                {results.login && (
                  <div>✅ 登录测试：{results.login.success ? '成功' : '失败'}</div>
                )}
                {results.directAuth && (
                  <div>✅ 直接认证测试：{results.directAuth.success ? '成功' : '失败'}</div>
                )}
                {results.simpleLogin && (
                  <div>✅ 简单登录测试：{results.simpleLogin.success ? '成功' : '失败'}</div>
                )}
              </div>
              
              {(results.login?.success || results.directAuth?.success || results.simpleLogin?.success) && (
                <Alert className="mt-4">
                  <AlertDescription>
                    <strong>🎉 登录成功！</strong><br />
                    现在可以使用以下凭据登录管理后台：<br />
                    用户名：admin<br />
                    密码：sps2024!
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 