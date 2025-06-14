# SPS 99 表单系统测试指南

## 测试前准备

### 1. 环境检查
确保以下环境变量已配置：
```env
DATABASE_URL=postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTMARK_API_TOKEN=68ef6c85-6260-4277-8527-530727b0cc22
ADMIN_DEFAULT_PASSWORD=sps2024!
```

### 2. 数据库初始化
1. 访问管理后台: `http://localhost:3000/sps-admin`
2. 使用 `admin / sps2024!` 登录
3. 切换到"数据库管理"标签页
4. 点击"测试数据库连接"确认连接正常
5. 点击"初始化表单数据表"创建 `form_submissions` 表

### 3. 邮件配置
1. 在管理后台"邮件系统"标签页
2. 配置收件人信息：
   - 收件箱：设置主要接收邮箱
   - 抄送邮箱：设置抄送邮箱（可选）
   - 密抄邮箱：设置密抄邮箱（可选）
3. 点击"保存配置"
4. 测试邮件发送功能

## 功能测试步骤

### 测试1: 表单提交功能

#### 1.1 正常提交测试
1. **访问表单页面**: `http://localhost:3000/sps-99`
2. **填写表单信息**:
   ```
   姓名: 张三
   邮箱: zhangsan@example.com
   公司: 测试科技有限公司
   业务类型: TikTok销售商
   业务描述: 我们是一家专注于TikTok电商的公司，主要销售...
   ```
3. **点击提交**: "Submit Application"
4. **验证结果**:
   - 页面显示提交成功消息
   - 表单字段被清空
   - 控制台无错误信息

#### 1.2 表单验证测试
1. **必填字段验证**:
   - 尝试提交空表单
   - 验证每个必填字段的提示信息
   - 确认提交被阻止

2. **邮箱格式验证**:
   - 输入无效邮箱格式
   - 验证邮箱格式提示
   - 确认提交被阻止

#### 1.3 网络错误测试
1. **模拟网络错误**:
   - 断开网络连接
   - 尝试提交表单
   - 验证错误提示显示

### 测试2: 邮件发送功能

#### 2.1 邮件内容验证
1. **检查邮件收件箱**:
   - 确认主收件人收到邮件
   - 检查抄送收件人收到邮件
   - 验证密抄收件人收到邮件

2. **邮件内容检查**:
   - 验证邮件主题正确
   - 检查申请人信息完整
   - 确认业务描述显示正确
   - 验证时间戳格式

3. **邮件格式检查**:
   - HTML版本正确渲染
   - 纯文本版本内容完整
   - 移动端显示友好

#### 2.2 邮件追踪验证
1. **查看管理后台**:
   - 确认表单记录创建
   - 验证邮件发送状态为 `true`
   - 检查邮件Message ID存在

### 测试3: 管理后台功能

#### 3.1 数据显示测试
1. **访问表单管理**:
   - 登录管理后台
   - 切换到"表单管理"标签页
   - 验证统计数据正确

2. **列表显示检查**:
   - 确认新提交的表单出现在列表中
   - 验证所有字段信息正确
   - 检查状态标签显示

#### 3.2 搜索和筛选测试
1. **搜索功能**:
   - 按姓名搜索
   - 按邮箱搜索
   - 按公司名搜索
   - 验证搜索结果准确

2. **筛选功能**:
   - 按申请状态筛选
   - 按回复状态筛选
   - 按业务类型筛选
   - 测试组合筛选条件

#### 3.3 状态管理测试
1. **编辑申请状态**:
   - 点击表单记录的"编辑"按钮
   - 修改申请状态（pending → processing → approved）
   - 添加管理员备注
   - 保存并验证更新成功

2. **回复状态管理**:
   - 将回复状态从"未回复"改为"已回复"
   - 验证状态更新
   - 检查统计数据变化

#### 3.4 删除功能测试
1. **删除确认**:
   - 点击"删除"按钮
   - 验证确认对话框出现
   - 取消删除操作

2. **执行删除**:
   - 确认删除操作
   - 验证记录从列表中移除
   - 检查统计数据更新

### 测试4: 性能和稳定性

#### 4.1 并发提交测试
1. **多窗口提交**:
   - 同时打开多个表单页面
   - 快速连续提交多个表单
   - 验证所有提交都正确处理

#### 4.2 大数据量测试
1. **批量数据测试**:
   - 提交大量表单数据
   - 测试分页功能性能
   - 验证搜索筛选效率

#### 4.3 错误恢复测试
1. **数据库连接中断**:
   - 模拟数据库连接问题
   - 验证错误处理机制
   - 测试连接恢复功能

2. **邮件服务故障**:
   - 模拟Postmark API错误
   - 验证错误提示显示
   - 确认数据依然保存

## 预期结果验证

### 1. 表单提交成功标准
- [ ] 表单数据正确保存到数据库
- [ ] 邮件成功发送到配置的收件人
- [ ] 用户收到提交成功确认
- [ ] 管理后台显示新记录
- [ ] 统计数据正确更新

### 2. 邮件质量标准
- [ ] 邮件内容完整准确
- [ ] HTML和文本格式都正确
- [ ] 移动端兼容性良好
- [ ] 垃圾邮件评分通过
- [ ] Message ID正确记录

### 3. 管理功能标准
- [ ] 数据查询响应时间 < 2秒
- [ ] 筛选搜索结果准确
- [ ] 状态更新实时生效
- [ ] 分页功能稳定
- [ ] 批量操作无误

### 4. 安全性验证
- [ ] SQL注入攻击防护有效
- [ ] XSS攻击防护有效
- [ ] 敏感数据正确处理
- [ ] 访问权限控制正常
- [ ] 错误信息不泄露敏感信息

## 故障排除

### 常见问题及解决方案

#### 1. 数据库连接失败
**症状**: 表单提交时提示数据库错误
**解决方案**:
1. 检查 `DATABASE_URL` 环境变量
2. 测试数据库连接
3. 确认数据库表已创建

#### 2. 邮件发送失败
**症状**: 表单提交成功但未收到邮件
**解决方案**:
1. 验证 `POSTMARK_API_TOKEN`
2. 检查邮件配置中的收件人设置
3. 查看Postmark控制台的发送日志

#### 3. 管理后台无数据
**症状**: 表单管理页面显示为空
**解决方案**:
1. 确认数据库表已初始化
2. 检查表单是否成功提交
3. 验证API路由是否正常

#### 4. 搜索筛选异常
**症状**: 搜索或筛选无结果或结果错误
**解决方案**:
1. 检查搜索关键词格式
2. 清除筛选条件重试
3. 刷新页面重新加载数据

## 性能基准

### 响应时间标准
- 表单页面加载: < 2秒
- 表单提交处理: < 5秒
- 邮件发送: < 10秒
- 管理后台查询: < 3秒
- 状态更新: < 2秒

### 并发处理能力
- 同时处理表单提交: 至少10个
- 管理后台并发用户: 至少5个
- 数据库连接池: 至少20个连接

## 测试报告模板

### 测试执行记录
```
测试日期: ____
测试人员: ____
测试环境: ____

功能测试结果:
□ 表单提交功能 - 通过/失败
□ 邮件发送功能 - 通过/失败  
□ 管理后台功能 - 通过/失败
□ 搜索筛选功能 - 通过/失败

性能测试结果:
□ 响应时间测试 - 通过/失败
□ 并发测试 - 通过/失败
□ 稳定性测试 - 通过/失败

发现问题:
1. ________________
2. ________________
3. ________________

建议优化:
1. ________________
2. ________________
3. ________________
``` 