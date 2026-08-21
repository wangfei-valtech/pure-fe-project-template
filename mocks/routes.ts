/** 配置 Mihawk 自动文件 Mock 使用的示例路由映射。 */
const routes: Record<string, string> = {
  'GET /test': './GET/index',
  'GET /test-*': './GET/index',
}
export default routes
