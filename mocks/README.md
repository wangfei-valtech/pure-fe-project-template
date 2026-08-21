# 本地启动 mock-server 说明

> 本工程基于第三方工具包 [mihawk](https://github.com/Froguard/mihawk/blob/master/README.md) 启动 mock-server，从而完成对于线上后端接口的 mock 操作

> MockServer 的目的在于，“以一种不依赖后端程序为前提，进行正常的前端逻辑开发和代码调试”，使得前后端在开发阶段进行 `前后分离/解耦`

## 启动

```sh
pnpm run mock
```

> 建议单独的窗口执行，方便和 dev 指令窗口区分开来，混淆在一个窗口不利于排查问题

当前 MockServer 监听 `0.0.0.0:8888`，并同时启用 HTTP 和 WebSocket：

```ts
{
  host: "0.0.0.0",
  port: 8888,
  cors: true,
  cache: true,
  watch: true,
  mockDir: "mocks",
  mockDataFileType: "json",
  mockLogicFileType: "ts",
  autoCreateMockLogicFile: true,
  socketConfig: {
    stomp: false,
  },
}
```

启动成功后，可以访问 http://127.0.0.1:8888/index 查看文件式 Mock 示例接口。

## 本地接口转发

本工程当前的 `next.config.ts` 只在开发环境转发版本化接口：

```text
/v:version(\d+)/:path* -> http://127.0.0.1:9999/v:version/:path*
```

例如，浏览器请求 `/v1/a/b` 时，vite 会将其转发到 `http://127.0.0.1:9999/v1/a/b`。

- `"/v1/"` 等版本化接口由本地 `mihawk` MockServer 处理。
- 生产环境不启用这条 MockServer rewrite。
