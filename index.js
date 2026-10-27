/**
 * Host half of the githubspace bundle.
 *
 * The bundle currently ships no runtime capability; it exists so the repository
 * is a valid, installable DSH bundle. Add behaviour here with `export function
 * apply(ctx, config)` (register everything through `ctx.effect` / `ctx.on` and
 * return the cleanup), or add a browser half via `dsh.client`.
 */
export function apply(_ctx, _config) {}
