export const getEnvConfig = () => ({
  appTitle: import.meta.env.VITE_APP_TITLE ?? 'Pure FE Template',
  appEnv: import.meta.env.VITE_APP_ENV ?? 'development',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? ''
})
