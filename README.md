# githubspace

个人工作区，由 DeepSeek Harness 维护；本仓库同时是一个可安装的 DSH 组合包（bundle）。

## 目录

- `GITHUB-SETUP.md` — GitHub 接入说明
- `package.json` — 包清单，`dsh.bundle.patch` 声明组合包
- `cordis.patch.yml` — 插入插件行的 patch
- `index.js` — 插件入口（Host 半侧）
- `locale/`、`icon.svg` — 插件展示元信息与图标
- `tools/` — 本地便携版 Git / gh（已 gitignore）

## 作为 DSH 插件安装

- 本地目录：「插件 → 添加插件 → 安装第三方插件」填 `D:\workspace`
- 远端：填 `git+https://github.com/CHATUL1/githubspace.git`
- 装好后默认可能未启用，需在插件页打开；新增行首次生效可能要求重启 DSH

当前版本只提供组合包外壳，`apply()` 为空。加功能时：

1. Host 能力写在 `index.js` 的 `export function apply(ctx, config)` 中，注册的东西用 `ctx.effect` / `ctx.on` 返回清理函数。
2. 浏览器端 UI 需要增加 `dsh.client` 段、`./client` 导出和一个 `client.js`（模块加载器工厂，id 与包名一致）。
3. 新增文件记得同步到 `package.json` 的 `exports` / `files`，否则 git 安装后读不到。

## 环境

- Git 2.56.0 · GitHub CLI 2.103.3（均在 `tools/`）
- 账号：CHATUL1
