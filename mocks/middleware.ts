/**
 * mihawk's middleware file:
 * - just a Koa Middleware
 */
import type { Context, Next } from 'koa' // 需要 koa@v2.0.0+ (例如：koa@^2.15.3)
import Compose from 'koa-compose'
import Router from '@koa/router'

/**
 * 初始化 @koa/router 实例
 */
const router = new Router()

/**
 * 定义自定义路由
 */
// GET /a/b/c
router.get('/v1/a/b/c', async (ctx: Context, next: Next) => {
  void ctx
  void next
  // ...
})
// POST /w/x/y
router.post('/v1/w/x/y', async (ctx: Context, next: Next) => {
  void ctx
  void next
  // ...
})
// ...

/**
 * 导出默认中间件
 * - 使用 koa-compose 组合所有路由中间件
 */
export default Compose([
  router.routes(), //
  router.allowedMethods(),
])
