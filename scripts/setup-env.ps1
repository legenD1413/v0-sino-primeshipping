# SPS 管理后台环境配置脚本
# 此脚本会自动创建 .env.local 文件并配置环境变量

Write-Host "🚀 SPS 管理后台环境配置脚本" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# 检查是否在项目根目录
if (-not (Test-Path "package.json")) {
    Write-Host "❌ 错误：请在项目根目录运行此脚本！" -ForegroundColor Red
    exit 1
}

# 创建 .env.local 文件
Write-Host "📝 创建环境配置文件..." -ForegroundColor Yellow

$envContent = @"
# SPS 管理后台环境配置
# 数据库配置（Neon PostgreSQL）
DATABASE_URL=postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require

# Postmark 邮件服务配置
POSTMARK_API_TOKEN=68ef6c85-6260-4277-8527-530727b0cc22

# 管理员默认密码
ADMIN_DEFAULT_PASSWORD=sps2024!

# 应用配置
NEXT_PUBLIC_APP_NAME=SPS Admin System
NEXT_PUBLIC_APP_VERSION=1.0.0
"@

try {
    $envContent | Out-File -FilePath ".env.local" -Encoding UTF8 -Force
    Write-Host "✅ 环境配置文件创建成功！" -ForegroundColor Green
} catch {
    Write-Host "❌ 创建环境配置文件失败：$($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# 检查 .env.local 文件
if (Test-Path ".env.local") {
    Write-Host "📁 环境配置文件位置：$(Get-Location)\.env.local" -ForegroundColor Cyan
    $fileSize = (Get-Item ".env.local").Length
    Write-Host "📊 文件大小：$fileSize 字节" -ForegroundColor Cyan
} else {
    Write-Host "❌ 环境配置文件创建失败！" -ForegroundColor Red
    exit 1
}

# 测试网络连接
Write-Host "🌐 测试数据库网络连接..." -ForegroundColor Yellow
try {
    $connection = Test-NetConnection -ComputerName "ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech" -Port 5432 -InformationLevel Quiet
    if ($connection) {
        Write-Host "✅ 网络连接正常！" -ForegroundColor Green
    } else {
        Write-Host "⚠️  网络连接可能存在问题，请检查防火墙设置" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  无法测试网络连接：$($_.Exception.Message)" -ForegroundColor Yellow
}

# 检查是否有 node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 安装依赖包..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "🎉 环境配置完成！" -ForegroundColor Green
Write-Host "请按以下步骤验证配置：" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. 启动开发服务器：" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 打开管理后台：" -ForegroundColor White
Write-Host "   http://localhost:3000/sps-admin" -ForegroundColor Gray
Write-Host ""
Write-Host "3. 登录信息：" -ForegroundColor White
Write-Host "   用户名：admin" -ForegroundColor Gray
Write-Host "   密码：sps2024!" -ForegroundColor Gray
Write-Host ""
Write-Host "4. 测试数据库连接：" -ForegroundColor White
Write-Host "   切换到'数据库管理'选项卡，点击'测试连接'" -ForegroundColor Gray
Write-Host ""

# 询问是否立即启动开发服务器
$start = Read-Host "是否立即启动开发服务器？(y/n)"
if ($start -eq "y" -or $start -eq "Y" -or $start -eq "") {
    Write-Host "🚀 启动开发服务器..." -ForegroundColor Green
    npm run dev
} 