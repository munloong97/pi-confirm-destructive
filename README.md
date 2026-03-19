# pi-confirm-destructive-ext

A Pi extension that blocks potentially destructive commands and asks for user confirmation.

## Features

Intercepts and warns about:
- `rm -rf` - Recursive force deletion
- `DROP` / `TRUNCATE` - SQL destructive operations
- `git push --force` / `git push -f` - Force push
- `git reset --hard` - Hard reset
- `git clean -fd` - Clean untracked files
- `--no-verify` - Bypassing git hooks

## Usage

Install the extension:

```bash
ln -s ~/pi-extensions/pi-confirm-destructive-ext ~/.pi/agent/extensions/pi-confirm-destructive-ext
```

When a dangerous command is detected, a confirmation dialog will appear before execution.