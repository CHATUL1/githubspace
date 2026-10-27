# GitHub 接入说明（DeepSeek Harness）

本机已把 GitHub 账号接入到 DSH，Agent 可以直接建仓、克隆、提交、推送。

## 账号

| 项目 | 值 |
| --- | --- |
| GitHub 账号 | `CHATUL1` |
| 认证方式 | `gh` OAuth token（存于 Windows 凭据管理器，非明文） |
| Token 权限 | `repo` `workflow` `read:org` `gist` |
| git 操作协议 | HTTPS（由 `gh` 作为 credential helper） |
| git 提交身份 | `CHATUL1` / `64731379+CHATUL1@users.noreply.github.com` |

## 仓库

- `githubspace`（public）：https://github.com/CHATUL1/githubspace
- 本地：`D:\workspace`，默认分支 `main`，`origin` 已配置
- `tools/` 已加入 `.gitignore`（便携版二进制不进仓库）

## 工具位置（全部在 D 盘）

| 工具 | 路径 |
| --- | --- |
| Git 2.56.0（便携版） | `D:\workspace\tools\PortableGit` |
| GitHub CLI 2.103.3（便携版） | `D:\workspace\tools\gh` |

用户 PATH 已包含：

```
D:\workspace\tools\PortableGit\cmd
D:\workspace\tools\gh
```

> 新开的终端、以及重启后的 DSH 里，`git` / `gh` 可直接使用。当前正在运行的 DSH 进程仍持有旧 PATH。

## 常用操作

```powershell
gh auth status                 # 查看登录状态
gh repo list                   # 列出我的仓库
gh repo create <名字> --private --source . --push   # 新建仓库并推送当前目录
git clone https://github.com/CHATUL1/<仓库>.git
gh pr create                   # 提 PR
```

## 已验证

- `gh auth status` → `✓ Logged in to github.com account CHATUL1`
- `git credential fill` → 返回 `username=CHATUL1` + 有效 token（推送无需再输密码）
- `gh api user` → 账号信息读取正常

## 备注

- `D:\github` 是 `CHATUL1/tachiyomi`（fork，upstream 为 `starfish23/mangafeed`）。
- 原 C 盘的 `C:\Program Files\Git` 与 `C:\Program Files\GitHub CLI` 已卸载，PATH 旧条目已清理。
