# 仓库规范

## 项目结构与模块组织

这是一个 Vite + React + TypeScript 的前端模板（SPA）。

- `src/main.tsx`：应用启动入口
- `src/App.tsx`：路由与根布局
- `src/pages/*`：页面组件（React Router 渲染入口）
- `src/components/ui/*`：可复用 UI 组件（shadcn 风格）
- `src/lib/*`：通用工具/配置（含 hooks、helpers、配置）
- `src/hooks/*`：React 自定义 Hooks（如 `useForceUpdate.ts`）
- `src/hooks/useTheme.ts`：主题管理 Hook（支持 light/dark 切换与持久化）
- `src/store/*`：Jotai 状态
- `src/i18n/*`：i18n 初始化与语言包
- `src/test/setup.ts`：Vitest 测试环境初始化
- `index.html`、`vite.config.ts`、`tailwind.config.ts`、`postcss.config.js`：构建与样式配置
- `.env`、`.env.production`：环境变量（`VITE_*`）

## 构建、测试与开发命令

- `pnpm install`：安装依赖
- `pnpm dev`：启动开发服务器
- `pnpm build`：类型检查并生成生产构建（`tsc -b && vite build`）
- `pnpm preview`：本地预览生产构建
- `pnpm test`：启动 Vitest 监听测试
- `pnpm test:run`：一次性运行全部测试（CI 风格）
- `pnpm lint` / `pnpm lint:fix`：ESLint 校验 / 自动修复
- `pnpm format` / `pnpm format:check`：Prettier 格式化 / 校验
- `pnpm typecheck`：使用 `tsconfig.app.json` 做严格类型检查
- `pnpm lint-staged`：提交前处理暂存文件（Hook 调用）

## 代码风格与命名规范

- 使用 TypeScript 与函数组件 + Hooks 风格开发。
- 组件文件建议用 PascalCase（如 `HomePage.tsx`），工具模块用 camelCase（如 `utils.ts`）。
- 优先使用 `@/...` 引入 `src/*`，减少深层相对路径。
- 公共边界建议显式声明类型，避免 `any`。
- 代码风格由 Prettier 控制：`singleQuote`、无分号、`trailingComma: all`。
- ESLint 规则包含 React、TypeScript、Hooks 与 Prettier 联动。

## 页面设计规则（默认系统规则）

- 涉及页面/界面设计时，以以下 3 个 SKILL 为强制参考顺序：
  - `frontend-design`
  - `design-taste-frontend`
  - `impeccable`
- 实施要求：
  - 先做“设计阅读（design read）”：明确页面类型、目标用户、风格方向，再进入具体实现。
  - 需要时先选定设计 dial（`DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY`），并说明为什么。
  - 优先遵守现有系统：若使用官方设计系统（本模板主要为 shadcn/tailwind 方案），避免混用其他设计系统风格体系。
  - 进入实现前必须确认可访问性和状态、空状态、错误状态是否有处理。
  - 主题不再只做“局部美化”，要保证页面全局一致性（light/dark 统一）。
- 该规则用于本仓库前端页面设计与界面升级，不替代功能/架构方案决策。

## 主题切换说明

- 项目支持 `light` 与 `dark` 两套主题。
- 使用方式：
  - 状态与持久化逻辑放在 `src/hooks/useTheme.ts`。
  - App 布局在 `<html>` 上通过 `dark` class 进行切换。
  - 颜色通过 `src/styles.css` 和 Tailwind 语义变量（`bg-background`、`text-foreground`、`border`、`muted`）驱动。
- `src/App.tsx` 当前已接入主题切换按钮（Sun/Moon 图标），可直接复用该交互。

## 测试规范

- 测试框架：Vitest + Testing Library。
- 测试文件放在 `src/` 下，命名 `*.test.ts` 或 `*.test.tsx`，靠近实现文件。
- 合并前建议先跑 `pnpm test:run`。
- 新增组件、Hooks、状态逻辑应覆盖关键行为路径，避免无意义的快照堆砌。

## 提交与 PR 规范

- Git 提交消息由 Commitlint 校验（Conventional Commits），示例：
  - `feat: add language toggle`
  - `fix: correct route fallback`
  - `chore: update dependencies`
- PR 建议包含：变更摘要、执行过的验证命令、涉及 UI 时附截图。
- 控制改动粒度，避免引入无关重构。

## 安全与配置说明

- 不要把真实密钥提交到仓库，不要提交包含真实凭据的 `.env.local`。
- 发布前比对 `.env` 与 `.env.production`，确认接口地址与环境差异。
