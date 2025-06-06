'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { 
  BarChart3, 
  Settings, 
  Eye, 
  Activity, 
  Users, 
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Zap,
  Code,
  Globe,
  Plus,
  Trash2
} from 'lucide-react'



// Analytics配置接口
interface AnalyticsConfig {
  gtm_id: string
  ga4_id: string
  gtag_id: string
  enabled: boolean
  debug_mode: boolean
  track_pageviews: boolean
  track_events: boolean
  track_ecommerce: boolean
  custom_dimensions: CustomDimension[]
  goals: Goal[]
}

interface CustomDimension {
  id: string
  name: string
  scope: 'hit' | 'session' | 'user' | 'product'
  parameter: string
}

interface Goal {
  id: string
  name: string
  type: 'destination' | 'event' | 'duration' | 'pageviews'
  value: string
  description: string
}

// 实时统计数据接口
interface RealTimeStats {
  activeUsers: number
  pageViews: number
  events: number
  topPages: Array<{ page: string; views: number }>
  topEvents: Array<{ event: string; count: number }>
}

export default function AnalyticsManagement() {
  const [config, setConfig] = useState<AnalyticsConfig>({
    gtm_id: 'GTM-PCJRWMF2',
    ga4_id: '',
    gtag_id: '',
    enabled: true,
    debug_mode: false,
    track_pageviews: true,
    track_events: true,
    track_ecommerce: false,
    custom_dimensions: [],
    goals: []
  })

  const [realTimeStats, setRealTimeStats] = useState<RealTimeStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)

  const { toast } = useToast()

  // 加载配置
  useEffect(() => {
    loadAnalyticsConfig()
    if (config.enabled) {
      loadRealTimeStats()
      // 每30秒更新一次实时数据
      const interval = setInterval(loadRealTimeStats, 30000)
      return () => clearInterval(interval)
    }
  }, [config.enabled])

  const loadAnalyticsConfig = async () => {
    try {
      // 从localStorage或API加载配置
      const savedConfig = localStorage.getItem('analytics_config')
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig))
      }
    } catch (error) {
      console.error('加载Analytics配置失败:', error)
    }
  }

  const saveAnalyticsConfig = async () => {
    try {
      setIsSaving(true)
      
      // 保存到localStorage（实际项目中应该保存到数据库）
      localStorage.setItem('analytics_config', JSON.stringify(config))
      
      // 这里可以调用API保存到数据库
      // await fetch('/api/analytics/config', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(config)
      // })

      toast({
        title: "成功",
        description: "Analytics配置已保存"
      })
    } catch (error) {
      toast({
        title: "错误",
        description: "保存配置失败",
        variant: "destructive"
      })
    } finally {
      setIsSaving(false)
    }
  }

  const loadRealTimeStats = async () => {
    try {
      // 模拟实时数据（实际项目中调用Google Analytics API）
      setRealTimeStats({
        activeUsers: Math.floor(Math.random() * 50) + 10,
        pageViews: Math.floor(Math.random() * 200) + 50,
        events: Math.floor(Math.random() * 100) + 20,
        topPages: [
          { page: '/', views: 45 },
          { page: '/services/fcl-to-port', views: 23 },
          { page: '/services/fcl-to-door', views: 18 },
          { page: '/get-quote', views: 15 },
          { page: '/about-us', views: 12 }
        ],
        topEvents: [
          { event: 'page_view', count: 156 },
          { event: 'button_click', count: 45 },
          { event: 'form_submit', count: 23 },
          { event: 'file_download', count: 12 },
          { event: 'external_link', count: 8 }
        ]
      })
    } catch (error) {
      console.error('加载实时数据失败:', error)
    }
  }

  const testAnalyticsConnection = async () => {
    setIsLoading(true)
    try {
      // 验证GTM ID格式
      const gtmIdPattern = /^GTM-[A-Z0-9]+$/
      if (!gtmIdPattern.test(config.gtm_id)) {
        setTestResult({ 
          success: false, 
          message: 'GTM ID格式无效，应为 GTM-XXXXXXX 格式' 
        })
        return
      }

      // 检查GTM是否已加载（如果已经在页面中运行）
      if (typeof window !== 'undefined') {
        // 检查dataLayer是否存在
        const hasDataLayer = (window as any).dataLayer && Array.isArray((window as any).dataLayer)
        
        // 检查GTM容器是否存在
        const hasGTMScript = document.querySelector(`script[src*="${config.gtm_id}"]`)
        
        if (hasDataLayer || hasGTMScript) {
          setTestResult({ 
            success: true, 
            message: `GTM ID ${config.gtm_id} 格式正确，跟踪代码已集成` 
          })
        } else {
          setTestResult({ 
            success: true, 
            message: `GTM ID ${config.gtm_id} 格式正确，将在下次页面加载时生效` 
          })
        }
      } else {
        setTestResult({ 
          success: true, 
          message: `GTM ID ${config.gtm_id} 格式正确` 
        })
      }
    } catch (error) {
      setTestResult({ 
        success: false, 
        message: '测试失败，请检查GTM ID格式' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
      toast({
        title: "已复制",
        description: "代码已复制到剪贴板"
      })
    } catch (error) {
      toast({
        title: "复制失败",
        description: "请手动复制代码",
        variant: "destructive"
      })
    }
  }

  const addCustomDimension = () => {
    const newDimension: CustomDimension = {
      id: `cd_${Date.now()}`,
      name: '',
      scope: 'hit',
      parameter: ''
    }
    setConfig({
      ...config,
      custom_dimensions: [...config.custom_dimensions, newDimension]
    })
  }

  const removeCustomDimension = (id: string) => {
    setConfig({
      ...config,
      custom_dimensions: config.custom_dimensions.filter(dim => dim.id !== id)
    })
  }

  const addGoal = () => {
    const newGoal: Goal = {
      id: `goal_${Date.now()}`,
      name: '',
      type: 'event',
      value: '',
      description: ''
    }
    setConfig({
      ...config,
      goals: [...config.goals, newGoal]
    })
  }

  const removeGoal = (id: string) => {
    setConfig({
      ...config,
      goals: config.goals.filter(goal => goal.id !== id)
    })
  }

  // 生成GTM代码
  const gtmHeadCode = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${config.gtm_id}');</script>
<!-- End Google Tag Manager -->`

  const gtmBodyCode = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtm_id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Analytics管理
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="gtm_id">Google Tag Manager ID</Label>
              <Input
                id="gtm_id"
                value={config.gtm_id}
                onChange={(e) => setConfig({...config, gtm_id: e.target.value})}
                placeholder="GTM-XXXXXXX"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label>启用跟踪</Label>
              <Switch
                checked={config.enabled}
                onCheckedChange={(checked) => setConfig({...config, enabled: checked})}
              />
            </div>
            
            <Button>保存配置</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="config" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="config">基础配置</TabsTrigger>
          <TabsTrigger value="tracking">跟踪设置</TabsTrigger>
          <TabsTrigger value="codes">代码管理</TabsTrigger>
          <TabsTrigger value="stats">实时数据</TabsTrigger>
        </TabsList>

        {/* 基础配置 */}
        <TabsContent value="config">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Analytics基础配置
              </CardTitle>
              <CardDescription>
                配置Google Tag Manager和Google Analytics的基本参数
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gtm_id">Google Tag Manager ID *</Label>
                  <Input
                    id="gtm_id"
                    value={config.gtm_id}
                    onChange={(e) => setConfig({...config, gtm_id: e.target.value})}
                    placeholder="GTM-XXXXXXX"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ga4_id">Google Analytics 4 ID</Label>
                  <Input
                    id="ga4_id"
                    value={config.ga4_id}
                    onChange={(e) => setConfig({...config, ga4_id: e.target.value})}
                    placeholder="G-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">启用Analytics跟踪</h4>
                  <p className="text-sm text-gray-600">开启后将在网站中加载跟踪代码</p>
                </div>
                <Switch
                  checked={config.enabled}
                  onCheckedChange={(checked) => setConfig({...config, enabled: checked})}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">调试模式</h4>
                  <p className="text-sm text-gray-600">开启后在浏览器控制台显示跟踪信息</p>
                </div>
                <Switch
                  checked={config.debug_mode}
                  onCheckedChange={(checked) => setConfig({...config, debug_mode: checked})}
                />
              </div>

              {testResult && (
                <Alert className={testResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className={testResult.success ? "text-green-700" : "text-red-700"}>
                    {testResult.message}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-4">
                <Button onClick={testAnalyticsConnection} disabled={isLoading}>
                  {isLoading ? '测试中...' : '测试连接'}
                </Button>
                <Button onClick={saveAnalyticsConfig} disabled={isSaving}>
                  {isSaving ? '保存中...' : '保存配置'}
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    打开GTM后台
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 跟踪设置 */}
        <TabsContent value="tracking">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>跟踪功能设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">页面浏览跟踪</h4>
                    <p className="text-sm text-gray-600">自动跟踪用户访问的页面</p>
                  </div>
                  <Switch
                    checked={config.track_pageviews}
                    onCheckedChange={(checked) => setConfig({...config, track_pageviews: checked})}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">事件跟踪</h4>
                    <p className="text-sm text-gray-600">跟踪用户的交互行为（点击、表单提交等）</p>
                  </div>
                  <Switch
                    checked={config.track_events}
                    onCheckedChange={(checked) => setConfig({...config, track_events: checked})}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">电商跟踪</h4>
                    <p className="text-sm text-gray-600">跟踪交易和转化数据</p>
                  </div>
                  <Switch
                    checked={config.track_ecommerce}
                    onCheckedChange={(checked) => setConfig({...config, track_ecommerce: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 自定义维度 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  自定义维度
                  <Button size="sm" onClick={addCustomDimension}>
                    <Plus className="h-4 w-4 mr-2" />
                    添加维度
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {config.custom_dimensions.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">暂无自定义维度</p>
                ) : (
                  <div className="space-y-4">
                    {config.custom_dimensions.map((dimension, index) => (
                      <div key={dimension.id} className="flex gap-4 items-end">
                        <div className="flex-1">
                          <Label>维度名称</Label>
                          <Input
                            value={dimension.name}
                            onChange={(e) => {
                              const updated = [...config.custom_dimensions]
                              updated[index].name = e.target.value
                              setConfig({...config, custom_dimensions: updated})
                            }}
                            placeholder="维度名称"
                          />
                        </div>
                        <div className="flex-1">
                          <Label>参数名</Label>
                          <Input
                            value={dimension.parameter}
                            onChange={(e) => {
                              const updated = [...config.custom_dimensions]
                              updated[index].parameter = e.target.value
                              setConfig({...config, custom_dimensions: updated})
                            }}
                            placeholder="parameter_name"
                          />
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeCustomDimension(dimension.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 代码管理 */}
        <TabsContent value="codes">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  跟踪代码
                </CardTitle>
                <CardDescription>
                  以下是需要添加到网站的跟踪代码，代码已自动集成到组件中
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Head标签代码（已集成）</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(gtmHeadCode, 'head')}
                    >
                      {copied === 'head' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      复制
                    </Button>
                  </div>
                  <Textarea
                    value={gtmHeadCode}
                    readOnly
                    rows={8}
                    className="font-mono text-sm"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Body标签代码（已集成）</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(gtmBodyCode, 'body')}
                    >
                      {copied === 'body' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      复制
                    </Button>
                  </div>
                  <Textarea
                    value={gtmBodyCode}
                    readOnly
                    rows={4}
                    className="font-mono text-sm"
                  />
                </div>

                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertDescription>
                    跟踪代码已经通过GoogleAnalytics组件自动集成到网站中。
                    当您修改GTM ID后，重新部署网站即可生效。
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 实时数据 */}
        <TabsContent value="stats">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>热门页面</CardTitle>
                </CardHeader>
                <CardContent>
                  {realTimeStats?.topPages.map((page, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-sm truncate">{page.page}</span>
                      <Badge variant="outline">{page.views}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>热门事件</CardTitle>
                </CardHeader>
                <CardContent>
                  {realTimeStats?.topEvents.map((event, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-sm">{event.event}</span>
                      <Badge variant="outline">{event.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  快速访问
                  <Button variant="outline" onClick={loadRealTimeStats}>
                    刷新数据
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Google Analytics
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer">
                      <Settings className="mr-2 h-4 w-4" />
                      Tag Manager
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 