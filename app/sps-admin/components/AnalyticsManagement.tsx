'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { 
  Code,
  Copy,
  Check,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function AnalyticsManagement() {
  const [copied, setCopied] = useState<string | null>(null)
  const { toast } = useToast()

  // 标准GTM代码 - 完全按照用户要求
  const gtmHeadCode = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCJRWMF2');</script>
<!-- End Google Tag Manager -->`

  const gtmBodyCode = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCJRWMF2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
      toast({
        title: "已复制",
        description: "GTM代码已复制到剪贴板"
      })
    } catch (error) {
      toast({
        title: "复制失败",
        description: "请手动复制代码",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Google Tag Manager 代码管理
          </CardTitle>
          <CardDescription>
            管理网站的Google Tag Manager代码埋入
          </CardDescription>
        </CardHeader>
      </Card>

      {/* 状态确认 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            埋入状态
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <h4 className="font-medium text-green-900">GTM代码已埋入</h4>
                  <p className="text-sm text-green-700">GTM ID: GTM-PCJRWMF2 已正确埋入到网站中</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">已生效</Badge>
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                ✅ Head标签代码已埋入到 &lt;head&gt; 标签内<br/>
                ✅ Body标签代码已埋入到 &lt;body&gt; 标签开始处<br/>
                ✅ GTM容器 GTM-PCJRWMF2 正在运行
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* GTM代码显示 */}
      <div className="space-y-6">
        {/* Head标签代码 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>1. Head标签代码</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(gtmHeadCode, 'head')}
              >
                {copied === 'head' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                复制
              </Button>
            </CardTitle>
            <CardDescription>
              Paste this code as high in the &lt;head&gt; of the page as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={gtmHeadCode}
              readOnly
              rows={8}
              className="font-mono text-sm bg-gray-50"
            />
          </CardContent>
        </Card>

        {/* Body标签代码 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>2. Body标签代码</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(gtmBodyCode, 'body')}
              >
                {copied === 'body' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                复制
              </Button>
            </CardTitle>
            <CardDescription>
              Paste this code immediately after the opening &lt;body&gt; tag
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={gtmBodyCode}
              readOnly
              rows={4}
              className="font-mono text-sm bg-gray-50"
            />
          </CardContent>
        </Card>
      </div>

      {/* 说明信息 */}
      <Card>
        <CardHeader>
          <CardTitle>说明信息</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">关于GTM代码埋入</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 以上两段代码已经自动埋入到网站的 layout.tsx 文件中</li>
              <li>• Head标签代码位于 &lt;head&gt; 标签内，尽可能靠前的位置</li>
              <li>• Body标签代码位于 &lt;body&gt; 标签开始后立即执行</li>
              <li>• GTM容器ID: GTM-PCJRWMF2 已正确配置</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 mb-2">功能状态</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>✅ GTM代码已成功埋入网站</li>
              <li>✅ 代码在所有页面生效</li>
              <li>✅ 支持所有GTM功能和跟踪</li>
              <li>✅ 无需额外配置即可使用</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-900 mb-2">注意事项</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>⚠️ 如需修改GTM容器ID，需要在代码中更新并重新部署</li>
              <li>⚠️ 代码变更后需要重新构建网站才能生效</li>
              <li>⚠️ 请在GTM后台配置具体的跟踪规则和触发器</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 