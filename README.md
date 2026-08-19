# pure-fe-project-template

一个纯前端模板项目，基于 Vite + React + TypeScript，适合快速搭建中后台/管理后台或通用业务前端项目。

## 特性

- ✅ React 18 + Hooks 开发范式
- ✅ 单页应用路由（react-router-dom，history mode）
- ✅ 组件与工具链：shadcn/ui 风格组件、Tailwind CSS、es-toolkit、ahooks、Jotai
- ✅ 国际化：react-i18next + i18next
- ✅ 测试与代码质量：Vitest、ESLint、Prettier、Husky + lint-staged、Commitlint
- ✅ 包管理：pnpm
- ✅ 环境配置：`.env` / `.env.production`

## 目录结构

- `src/main.tsx`：应用入口
- `src/App.tsx`：路由与页面骨架
- `src/pages/*`：页面级组件（当前示例页面）
- `src/components/ui/*`：基础 UI 组件
- `src/lib/*`：公共工具与配置
- `src/store/*`：Jotai 状态管理
- `src/i18n/*`：语言包与初始化逻辑
- `src/test/setup.ts`：测试环境初始化
- `index.html`、`vite.config.ts`、`tailwind.config.ts`：构建相关配置

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 `http://localhost:5173`（默认端口可能因环境变化）。

## 常用命令

```bash
pnpm build          # 类型检查 + 打包
pnpm preview        # 预览打包产物
pnpm test           # 运行测试（watch 模式）
pnpm test:run       # 运行测试（单次）
pnpm lint           # ESLint 检查
pnpm format         # Prettier 格式化
pnpm typecheck      # TypeScript 严格检查
pnpm lint-staged    # 提交前暂存文件校验（Hook 会执行）
```

## 环境变量

- `.env`：开发环境默认值
- `.env.production`：生产环境覆盖值

项目运行中可通过 `import.meta.env` 读取 `VITE_*` 前缀的变量，例如：

```ts
const title = import.meta.env.VITE_APP_TITLE
```
