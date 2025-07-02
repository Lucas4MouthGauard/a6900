# 项目文档

## 目录结构

### `/src` - 源代码目录
- `components/` - React组件
- `pages/` - 页面组件
- `utils/` - 工具函数
- `hooks/` - 自定义React Hooks
- `styles/` - 样式文件

### `/public` - 静态资源
- 图片、字体等静态文件

### `/docs` - 项目文档
- API文档
- 开发指南
- 部署说明

### `/tests` - 测试文件
- 单元测试
- 集成测试

### `/config` - 配置文件
- 环境配置
- 构建配置

### `/scripts` - 构建脚本
- 部署脚本
- 构建脚本

## 开发指南

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint规则
- 使用Prettier进行代码格式化

### 组件开发
- 使用函数式组件
- 使用TypeScript接口定义Props
- 遵循单一职责原则

### 样式规范
- 使用CSS模块或styled-components
- 遵循BEM命名规范
- 响应式设计优先

## 测试策略
- 单元测试覆盖率 > 80%
- 集成测试覆盖关键流程
- E2E测试覆盖用户场景 