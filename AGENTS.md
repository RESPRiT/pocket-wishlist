# Agent Instructions

## Domain Glossary

@wiki/GLOSSARY.md

## Issue Tracking

This project uses **bd** (beads). The Claude Code SessionStart hook in
`.claude/settings.json` runs `bd prime` automatically, so the full workflow
reference is injected each session — don't duplicate it here.

> **Architecture in one line:** Issues live in a local Dolt database
> (`.beads/dolt/`); cross-machine sync uses `bd dolt push/pull` (a
> git-compatible protocol), stored under `refs/dolt/data` on your git
> remote — separate from `refs/heads/*` where your code lives.
> `.beads/issues.jsonl` is a passive export, not the wire protocol.
>
> See [SYNC_CONCEPTS.md](https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md)
> for the one-screen overview and anti-patterns (don't treat JSONL as the
> source of truth; don't `bd import` during normal operation; don't
> reach for third-party Dolt hosting before trying the default).

If hooks aren't running for some reason, run `bd prime` manually.

## Worktrees and PRs

When work happens on a worktree branch (e.g. one created via
`EnterWorktree`), **do not merge it into `main` locally**. Push the
branch to the remote and open a pull request instead — that's the
intended integration path, and it's the whole reason the work was
isolated on a branch in the first place. Local fast-forward merges
collapse that review surface and ship straight to whatever is watching
`main` (Coolify, in this repo's case).

Use `gh pr create` once the branch is pushed. Don't merge the PR
yourself; leave that for the user.

## React Compiler

`packages/wishlist-web` is built with the React Compiler (Forget) via
`babel-plugin-react-compiler`. The compiler auto-memoizes component renders
and derived values, so **do not reach for `useMemo` / `useCallback`** in new
code — leave the computation inline and let the compiler do the work.

This is a strict default. Only deviate when the compiler demonstrably
isn't covering a case, *or* covering it breaks something. The two known
escape hatches:

- **`"use no memo"` directive** at the top of a function body opts that
  function out of compilation. Used when the compiler's output is
  incompatible with a wrapped library —
  `packages/wishlist-web/src/components/List.tsx` is the current example
  (incompatible with `@tanstack/react-virtual`).
- **Manual `useMemo` / `useCallback`** when the compiler bails on a hook
  for structural reasons (e.g. a ref write during render) and a downstream
  consumer needs a stable reference. See `useEntryHeights` for an example:
  the `probeVpRef.current = …` render-time write bails the compiler, so
  `itemHeights` and `needsMeasurement` are wrapped manually because the
  virtualizer's options memo in `List` depends on their identity.

Whichever escape hatch you reach for, **leave a code comment explaining
why the compiler isn't doing this for you** — both so a future reader
doesn't strip it as redundant, and so the policy stays auditable.

## Non-Interactive Shell Commands

**ALWAYS use non-interactive flags** with file operations to avoid hanging on confirmation prompts.

Shell commands like `cp`, `mv`, and `rm` may be aliased to include `-i` (interactive) mode on some systems, causing the agent to hang indefinitely waiting for y/n input.

**Use these forms instead:**
```bash
# Force overwrite without prompting
cp -f source dest           # NOT: cp source dest
mv -f source dest           # NOT: mv source dest
rm -f file                  # NOT: rm file

# For recursive operations
rm -rf directory            # NOT: rm -r directory
cp -rf source dest          # NOT: cp -r source dest
```

**Other commands that may prompt:**
- `scp` - use `-o BatchMode=yes` for non-interactive
- `ssh` - use `-o BatchMode=yes` to fail instead of prompting
- `apt-get` - use `-y` flag
- `brew` - use `HOMEBREW_NO_AUTO_UPDATE=1` env var
